import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  FileDown,
  CalendarClock,
  Users,
} from "lucide-react";
import { ChartComponent } from "@/components/dashboard/chart-component";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegistrarsReports() {
  // Mock data
  const casesByTypeData = [
    { name: "Civil", value: 35 },
    { name: "Criminal", value: 28 },
    { name: "Family", value: 15 },
    { name: "Administrative", value: 12 },
    { name: "Other", value: 10 },
  ];

  const casesByStatusData = [
    { name: "Active", value: 58 },
    { name: "Pending", value: 24 },
    { name: "Closed", value: 18 },
  ];

  const caseTimelineData = [
    { name: "Jan", value: 24 },
    { name: "Feb", value: 28 },
    { name: "Mar", value: 22 },
    { name: "Apr", value: 30 },
    { name: "May", value: 25 },
    { name: "Jun", value: 32 },
  ];

  return (
    <DashboardLayout role="registrar">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>

        <div className="flex items-center gap-4">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Report Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Current Month</SelectItem>
              <SelectItem value="quarter">Current Quarter</SelectItem>
              <SelectItem value="year">Current Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button>Generate Report</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Case Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
              <p className="text-xs text-muted-foreground">
                Total cases in the system
              </p>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                <FileText className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Hearings Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">
                Hearings scheduled this month
              </p>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                <CalendarClock className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Documents Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">126</div>
              <p className="text-xs text-muted-foreground">
                Documents processed this month
              </p>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                <FileDown className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Parties Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Total parties in the system
              </p>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                <Users className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Cases by Type</CardTitle>
              <CardDescription>Distribution of cases by type</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartComponent title="" data={casesByTypeData} type="pie" />
              <div className="mt-2 flex justify-end">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cases by Status</CardTitle>
              <CardDescription>Distribution of cases by status</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartComponent title="" data={casesByStatusData} type="pie" />
              <div className="mt-2 flex justify-end">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Case Timeline</CardTitle>
              <CardDescription>Cases registered over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartComponent title="" data={caseTimelineData} type="bar" />
              <div className="mt-2 flex justify-end">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>
              Download detailed reports for the current period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button
                variant="outline"
                className="h-auto flex-col items-center gap-2 py-4"
              >
                <FileText className="h-8 w-8" />
                <div className="text-center">
                  <div className="font-medium">Case Summary</div>
                  <div className="text-xs text-muted-foreground">
                    PDF Report
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto flex-col items-center gap-2 py-4"
              >
                <CalendarClock className="h-8 w-8" />
                <div className="text-center">
                  <div className="font-medium">Hearing Schedule</div>
                  <div className="text-xs text-muted-foreground">
                    Excel Report
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto flex-col items-center gap-2 py-4"
              >
                <FileDown className="h-8 w-8" />
                <div className="text-center">
                  <div className="font-medium">Document Activity</div>
                  <div className="text-xs text-muted-foreground">
                    PDF Report
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto flex-col items-center gap-2 py-4"
              >
                <Users className="h-8 w-8" />
                <div className="text-center">
                  <div className="font-medium">Party Analysis</div>
                  <div className="text-xs text-muted-foreground">
                    Excel Report
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
