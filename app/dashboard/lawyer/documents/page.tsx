import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DocumentList } from "@/components/documents/document-list";
import { prisma } from "@/lib/prisma";

export default async function LawyersDocuments() {
  const documents = await prisma.documents.findMany();
  const cases = await prisma.cases.findMany();

  return (
    <DashboardLayout role="lawyer">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
        <DocumentList documents={documents} userRole="lawyer" cases={cases} />
      </div>
    </DashboardLayout>
  );
}
