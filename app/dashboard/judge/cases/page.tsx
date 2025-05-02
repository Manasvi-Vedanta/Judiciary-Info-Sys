import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { CaseList } from "@/components/cases/case-list";
import { prisma } from "@/lib/prisma";

export default async function JudgesCases() {
  const cases = await prisma.cases.findMany();

  return (
    <DashboardLayout role="judge">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Cases</h1>
        <CaseList cases={cases} userRole="judge" />
      </div>
    </DashboardLayout>
  );
}
