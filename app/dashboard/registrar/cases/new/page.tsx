import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { CaseForm } from "@/components/registrar/case-form";

export default function NewCase() {
  return (
    <DashboardLayout role="registrar">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">New Case</h1>
        <CaseForm />
      </div>
    </DashboardLayout>
  );
}
