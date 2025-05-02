import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { HearingList } from "@/components/hearings/hearing-list";
import { HearingCalendar } from "@/components/hearings/hearing-calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prisma } from "@/lib/prisma";

export default async function LawyersHearings() {
  const hearings = await prisma.hearings.findMany({
    include: {
      cases: true,
    },
  });

  return (
    <DashboardLayout role="lawyer">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Hearings</h1>

        <Tabs defaultValue="list">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="pt-4">
            <HearingList hearings={hearings} />
          </TabsContent>
          <TabsContent value="calendar" className="pt-4">
            <HearingCalendar hearings={hearings} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
