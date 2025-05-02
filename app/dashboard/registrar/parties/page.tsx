import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Edit, UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegistrarsParties() {
  // Mock data
  const parties = [
    {
      id: "1",
      name: "John Smith",
      type: "Individual",
      role: "Plaintiff",
      cases: ["CASE-2025-001"],
      contact: "john.smith@email.com",
      phone: "(123) 456-7890",
      address: "123 Main St, Anytown",
      representative: "Law Firm A",
    },
    {
      id: "2",
      name: "Robert Johnson",
      type: "Individual",
      role: "Defendant",
      cases: ["CASE-2025-001"],
      contact: "robert.johnson@email.com",
      phone: "(234) 567-8901",
      address: "456 Oak Ave, Anytown",
      representative: "Law Firm B",
    },
    {
      id: "3",
      name: "City of Metropolis",
      type: "Government",
      role: "Defendant",
      cases: ["CASE-2025-003"],
      contact: "legal@metropolis.gov",
      phone: "(345) 678-9012",
      address: "789 Civic Center, Metropolis",
      representative: "City Attorney Office",
    },
    {
      id: "4",
      name: "Acme Corporation",
      type: "Organization",
      role: "Plaintiff",
      cases: ["CASE-2025-005"],
      contact: "legal@acmecorp.com",
      phone: "(456) 789-0123",
      address: "1000 Corporate Blvd, Business City",
      representative: "Law Firm C",
    },
    {
      id: "5",
      name: "Jane Wilson",
      type: "Individual",
      role: "Plaintiff",
      cases: ["CASE-2025-004"],
      contact: "jane.wilson@email.com",
      phone: "(567) 890-1234",
      address: "321 Elm St, Anytown",
      representative: "Law Firm D",
    },
  ];

  return (
    <DashboardLayout role="registrar">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Party Information
          </h1>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" /> Add Party
          </Button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search parties..."
              className="w-full pl-8"
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Party Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Party Types</SelectItem>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="organization">Organization</SelectItem>
              <SelectItem value="government">Government</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="plaintiff">Plaintiff</SelectItem>
              <SelectItem value="defendant">Defendant</SelectItem>
              <SelectItem value="witness">Witness</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Parties</TabsTrigger>
            <TabsTrigger value="plaintiffs">Plaintiffs</TabsTrigger>
            <TabsTrigger value="defendants">Defendants</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Party Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {parties.map((party) => (
                    <div
                      key={party.id}
                      className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-start"
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{party.name}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 shrink-0"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                            {party.type}
                          </span>
                          <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                            {party.role}
                          </span>
                          {party.cases.map((caseId) => (
                            <span
                              key={caseId}
                              className="rounded-full bg-secondary px-2 py-1 text-xs"
                            >
                              {caseId}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 grid gap-1 text-sm">
                          <p>
                            <span className="font-medium">Contact:</span>{" "}
                            {party.contact}
                          </p>
                          <p>
                            <span className="font-medium">Phone:</span>{" "}
                            {party.phone}
                          </p>
                          <p>
                            <span className="font-medium">Address:</span>{" "}
                            {party.address}
                          </p>
                          <p>
                            <span className="font-medium">Representative:</span>{" "}
                            {party.representative}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="plaintiffs" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Plaintiffs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {parties
                    .filter((party) => party.role === "Plaintiff")
                    .map((party) => (
                      <div
                        key={party.id}
                        className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-start"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{party.name}</h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 shrink-0"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                              {party.type}
                            </span>
                            <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                              {party.role}
                            </span>
                            {party.cases.map((caseId) => (
                              <span
                                key={caseId}
                                className="rounded-full bg-secondary px-2 py-1 text-xs"
                              >
                                {caseId}
                              </span>
                            ))}
                          </div>
                          <div className="mt-3 grid gap-1 text-sm">
                            <p>
                              <span className="font-medium">Contact:</span>{" "}
                              {party.contact}
                            </p>
                            <p>
                              <span className="font-medium">Phone:</span>{" "}
                              {party.phone}
                            </p>
                            <p>
                              <span className="font-medium">Address:</span>{" "}
                              {party.address}
                            </p>
                            <p>
                              <span className="font-medium">
                                Representative:
                              </span>{" "}
                              {party.representative}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="defendants" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Defendants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {parties
                    .filter((party) => party.role === "Defendant")
                    .map((party) => (
                      <div
                        key={party.id}
                        className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-start"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{party.name}</h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 shrink-0"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                              {party.type}
                            </span>
                            <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                              {party.role}
                            </span>
                            {party.cases.map((caseId) => (
                              <span
                                key={caseId}
                                className="rounded-full bg-secondary px-2 py-1 text-xs"
                              >
                                {caseId}
                              </span>
                            ))}
                          </div>
                          <div className="mt-3 grid gap-1 text-sm">
                            <p>
                              <span className="font-medium">Contact:</span>{" "}
                              {party.contact}
                            </p>
                            <p>
                              <span className="font-medium">Phone:</span>{" "}
                              {party.phone}
                            </p>
                            <p>
                              <span className="font-medium">Address:</span>{" "}
                              {party.address}
                            </p>
                            <p>
                              <span className="font-medium">
                                Representative:
                              </span>{" "}
                              {party.representative}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
