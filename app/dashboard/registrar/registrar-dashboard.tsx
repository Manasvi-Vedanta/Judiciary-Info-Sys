"use client";

import { ChartComponent } from "@/components/dashboard/chart-component";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatsCard } from "@/components/dashboard/stats-card";
import { FileText, Clock, PlusCircle, Users } from "lucide-react";

interface DashboardProps {
  data: {
    stats: {
      cases: { current: number; last: number };
      hearings: { current: number; last: number };
      documents: { current: number; last: number };
    };
    charts: {
      caseTypes: { name: string; value: number }[];
      monthlyFilings: { name: string; value: number }[];
    };
  };
}

export default function RegistrarDashboard({ data }: DashboardProps) {
  const caseTrend =
    data.stats.cases.current > data.stats.cases.last ? "up" : "down";
  const hearingTrend =
    data.stats.hearings.current > data.stats.hearings.last ? "up" : "down";
  const documentTrend =
    data.stats.documents.current > data.stats.documents.last ? "up" : "down";

  return (
    <DashboardLayout role="registrar">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Registrar&apos;s Dashboard
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Cases Registered"
            value={data.stats.cases.current.toString()}
            icon={FileText}
            description="New cases this month"
            trend={caseTrend}
            trendValue={`${Math.abs(
              data.stats.cases.current - data.stats.cases.last
            )} from last month`}
          />
          <StatsCard
            title="Hearings Scheduled"
            value={data.stats.hearings.current.toString()}
            icon={Clock}
            description="Hearings scheduled this month"
            trend={hearingTrend}
            trendValue={`${Math.abs(
              data.stats.hearings.current - data.stats.hearings.last
            )} from last month`}
          />
          <StatsCard
            title="Documents Processed"
            value={data.stats.documents.current.toString()}
            icon={PlusCircle}
            description="Documents processed this month"
            trend={documentTrend}
            trendValue={`${Math.abs(
              data.stats.documents.current - data.stats.documents.last
            )} from last month`}
          />
          <StatsCard
            title="Party Updates"
            value="42" // This would need a query if you track party updates
            icon={Users}
            description="Party information updates"
            trend="up"
            trendValue="7 from last month"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartComponent
            title="Case Types"
            description="Distribution of cases by type"
            data={data.charts.caseTypes}
            type="pie"
          />
          <ChartComponent
            title="Case Filings"
            description="New cases filed per month"
            data={data.charts.monthlyFilings}
            type="bar"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
