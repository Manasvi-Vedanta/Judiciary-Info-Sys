import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { HearingCalendar } from "@/components/hearings/hearing-calendar";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScheduleForm } from "@/components/registrar/schedule-form";
import { prisma } from "@/lib/prisma";

export default async function RegistrarsSchedule() {
  // Mock data
  const hearings = await prisma.hearings.findMany({
    include: {
      cases: true,
    },
  });

  return (
    <DashboardLayout role="registrar">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Hearing Schedule
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <HearingCalendar hearings={hearings} />
          </div>
          <div>
            <ScheduleForm />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
