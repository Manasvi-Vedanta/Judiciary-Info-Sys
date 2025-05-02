import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { CaseDetail } from "@/components/cases/case-detail";
import { prisma } from "@/lib/prisma";

export default async function RegistrarCaseDetail({
  params,
}: {
  params: { id: string };
}) {
  // Make sure params is properly awaited
  const caseNumber = await params.id;

  const caseData = await prisma.cases.findUnique({
    where: {
      caseNumber: caseNumber,
    },
    include: {
      documents: true,
      hearings: true,
    },
  });

  console.log(caseData);

  // Add error handling for when case is not found
  if (!caseData) {
    return (
      <DashboardLayout role="registrar">
        <div>Case not found</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="registrar">
      <CaseDetail caseData={caseData} userRole="registrar" />
    </DashboardLayout>
  );
}
