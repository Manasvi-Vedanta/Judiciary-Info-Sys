import { prisma } from "@/lib/prisma";
import { endOfMonth, startOfMonth, subMonths } from "date-fns";
import RegistrarDashboard from "./registrar-dashboard";

interface MonthlyFiling {
  month: number;
  count: bigint; // or number, depending on your database
}

async function getDashboardData() {
  const now = new Date();
  const currentMonthStart = startOfMonth(now);
  const currentMonthEnd = endOfMonth(now);
  const lastMonthStart = startOfMonth(subMonths(now, 1));
  const lastMonthEnd = endOfMonth(subMonths(now, 1));

  // Get case counts
  const [currentMonthCases, lastMonthCases] = await Promise.all([
    prisma.cases.count({
      where: {
        filedDate: {
          gte: currentMonthStart,
          lte: currentMonthEnd,
        },
      },
    }),
    prisma.cases.count({
      where: {
        filedDate: {
          gte: lastMonthStart,
          lte: lastMonthEnd,
        },
      },
    }),
  ]);

  // Get hearing counts
  const [currentMonthHearings, lastMonthHearings] = await Promise.all([
    prisma.hearings.count({
      where: {
        date: {
          gte: currentMonthStart,
          lte: currentMonthEnd,
        },
      },
    }),
    prisma.hearings.count({
      where: {
        date: {
          gte: lastMonthStart,
          lte: lastMonthEnd,
        },
      },
    }),
  ]);

  // Get document counts
  const [currentMonthDocuments, lastMonthDocuments] = await Promise.all([
    prisma.documents.count({
      where: {
        createdAt: {
          gte: currentMonthStart,
          lte: currentMonthEnd,
        },
      },
    }),
    prisma.documents.count({
      where: {
        createdAt: {
          gte: lastMonthStart,
          lte: lastMonthEnd,
        },
      },
    }),
  ]);

  // Get case type distribution
  const caseTypes = await prisma.cases.groupBy({
    by: ["type"],
    _count: {
      type: true,
    },
  });

  // Get monthly case filings
  const monthlyFilings = await prisma.$queryRaw<MonthlyFiling[]>`
  SELECT 
    EXTRACT(MONTH FROM "filedDate") as month,
    COUNT(*)::integer as count
  FROM "Cases"
  WHERE "filedDate" >= NOW() - INTERVAL '6 months'
  GROUP BY EXTRACT(MONTH FROM "filedDate")
  ORDER BY month
`;

  const formattedMonthlyFilings = monthlyFilings.map((filing) => ({
    name: new Date(0, filing.month - 1).toLocaleString("default", {
      month: "short",
    }),
    value: Number(filing.count),
  }));

  return {
    stats: {
      cases: {
        current: currentMonthCases,
        last: lastMonthCases,
      },
      hearings: {
        current: currentMonthHearings,
        last: lastMonthHearings,
      },
      documents: {
        current: currentMonthDocuments,
        last: lastMonthDocuments,
      },
    },
    charts: {
      caseTypes: caseTypes.map((type) => ({
        name: type.type,
        value: type._count.type,
      })),
      monthlyFilings: formattedMonthlyFilings,
    },
  };
}

export default async function Page() {
  const data = await getDashboardData();
  return <RegistrarDashboard data={data} />;
}
