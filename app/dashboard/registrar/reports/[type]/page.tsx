import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ChartComponent } from "@/components/dashboard/chart-component";

interface ReportDetailProps {
  params: {
    type: string;
  };
}

export default function ReportDetail({ params }: ReportDetailProps) {
  const reportTypes = {
    cases: {
      title: "Case Summary Report",
      stats: [
        { label: "Total Cases", value: "156" },
        { label: "Active Cases", value: "89" },
        { label: "Closed Cases", value: "67" },
        { label: "Cases This Month", value: "12" },
      ],
      chartData: [
        { name: "Civil", value: 45 },
        { name: "Criminal", value: 35 },
        { name: "Family", value: 20 },
        { name: "Administrative", value: 15 },
      ],
    },
    hearings: {
      title: "Hearing Schedule Report",
      stats: [
        { label: "Total Hearings", value: "48" },
        { label: "Completed", value: "32" },
        { label: "Upcoming", value: "16" },
        { label: "Rescheduled", value: "4" },
      ],
      chartData: [
        { name: "Jan", value: 8 },
        { name: "Feb", value: 12 },
        { name: "Mar", value: 15 },
        { name: "Apr", value: 10 },
        { name: "May", value: 8 },
        { name: "Jun", value: 14 },
      ],
    },
    documents: {
      title: "Document Activity Report",
      stats: [
        { label: "Total Documents", value: "234" },
        { label: "Uploaded This Month", value: "45" },
        { label: "Pending Review", value: "12" },
        { label: "Recently Modified", value: "8" },
      ],
      chartData: [
        { name: "Pleadings", value: 40 },
        { name: "Evidence", value: 30 },
        { name: "Orders", value: 20 },
        { name: "Other", value: 10 },
      ],
    },
    parties: {
      title: "Party Analysis Report",
      stats: [
        { label: "Total Parties", value: "312" },
        { label: "Plaintiffs", value: "156" },
        { label: "Defendants", value: "156" },
        { label: "New This Month", value: "24" },
      ],
      chartData: [
        { name: "Individual", value: 60 },
        { name: "Organization", value: 25 },
        { name: "Government", value: 15 },
      ],
    },
  };

  const report = reportTypes[params.type as keyof typeof reportTypes];

  return (
    <DashboardLayout role="registrar">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">{report.title}</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {report.stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartComponent title="" data={report.chartData} type="pie" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Trend Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartComponent title="" data={report.chartData} type="bar" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p>
                This report provides a comprehensive analysis of {params.type}{" "}
                in the judicial system. The data shows trends and patterns that
                can help in decision-making and resource allocation.
              </p>
              <h3>Key Findings</h3>
              <ul>
                <li>Significant increase in case resolution rate</li>
                <li>Improved document processing efficiency</li>
                <li>Reduced average case duration</li>
                <li>Higher participant satisfaction rates</li>
              </ul>
              <h3>Recommendations</h3>
              <ul>
                <li>Implement additional case management strategies</li>
                <li>Enhance document processing workflows</li>
                <li>Optimize resource allocation</li>
                <li>Continue monitoring key performance indicators</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
