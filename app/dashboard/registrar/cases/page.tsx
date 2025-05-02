import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { CaseList } from "@/components/cases/case-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prisma } from "@/lib/prisma";

export default async function RegistrarsCases() {
  const cases = await prisma.cases.findMany({
    include: {
      documents: true,
      hearings: true,
    },
  });

  return (
    <DashboardLayout role="registrar">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Case Management</h1>
          <Button asChild>
            <Link href="/dashboard/registrar/cases/new">
              <PlusCircle className="mr-2 h-4 w-4" /> New Case
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Cases</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4">
            <CaseList cases={cases} userRole="registrar" />
          </TabsContent>
          <TabsContent value="active" className="pt-4">
            <CaseList
              cases={cases.filter((c) => c.status !== "CLOSED")}
              userRole="registrar"
            />
          </TabsContent>
          <TabsContent value="closed" className="pt-4">
            <CaseList
              cases={cases.filter((c) => c.status === "CLOSED")}
              userRole="registrar"
            />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
