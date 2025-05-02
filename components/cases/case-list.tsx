import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Case } from "@/types/case";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Cases } from "@/lib/generated/prisma";

interface CaseListProps {
  // cases: Case[];
  cases: Cases[];
  userRole: "judge" | "lawyer" | "registrar";
}

export function CaseList({ cases, userRole }: CaseListProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>All Cases</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search cases..."
              className="w-full pl-8"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">
                      <Link
                        href={`/dashboard/${userRole}/cases/${caseItem.id}`}
                        className="hover:underline"
                      >
                        {caseItem.caseNumber}
                      </Link>
                    </h3>
                    <Badge
                      variant={
                        caseItem.status !== "CLOSED"
                          ? "default"
                          : caseItem.status === "CLOSED"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {caseItem.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {caseItem.title}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-sm text-muted-foreground">
                    Filed on:{" "}
                    {new Date(caseItem.filedDate).toLocaleDateString()}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={`/dashboard/${userRole}/cases/${caseItem.caseNumber}`}
                      >
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <p className="text-xs text-muted-foreground">Case Type</p>
                  <p className="text-sm">{caseItem.type}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Court</p>
                  <p className="text-sm">{caseItem.location}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Judge</p>
                  <p className="text-sm">{caseItem.judge}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Next Hearing</p>
                  <p className="text-sm">
                    {caseItem.nextHearing
                      ? new Date(caseItem.nextHearing).toLocaleDateString()
                      : "Not scheduled"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
