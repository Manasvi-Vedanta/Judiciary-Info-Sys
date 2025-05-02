import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DocumentList } from "@/components/documents/document-list";
import { Cases, Documents, Hearings } from "@/lib/generated/prisma";

interface CaseDetailProps {
  caseData: Cases & {
    documents: Documents[];
    hearings: Hearings[];
  };
  userRole: "judge" | "lawyer" | "registrar";
}

export function CaseDetail({ caseData, userRole }: CaseDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">{caseData.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{caseData.caseNumber}</span>
            <span>•</span>
            <span>{caseData.type}</span>
            <span>•</span>
            <Badge
              variant={
                caseData.status !== "CLOSED"
                  ? "default"
                  : caseData.status === "CLOSED"
                  ? "secondary"
                  : "outline"
              }
            >
              {caseData.status}
            </Badge>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Case Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Filing Date
              </p>
              <p>{new Date(caseData.filedDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Court</p>
              <p>{caseData.location}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Judge</p>
              <p>{caseData.judge}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Next Hearing
              </p>
              <p>
                {caseData.nextHearing
                  ? new Date(caseData.nextHearing).toLocaleDateString()
                  : "Not scheduled"}
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Plaintiff
              </p>
              <p>{caseData.plaintiffName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Defendant
              </p>
              <p>{caseData.defendantName}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="documents">
        <TabsList>
          {/* <TabsTrigger value="timeline">Timeline</TabsTrigger> */}
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="hearings">Hearings</TabsTrigger>
          <TabsTrigger value="parties">Parties</TabsTrigger>
        </TabsList>
        {/* <TabsContent value="timeline" className="pt-4">
          <Timeline events={caseData.events || []} />
        </TabsContent> */}
        <TabsContent value="documents" className="pt-4">
          <DocumentList
            documents={caseData.documents.length > 0 ? caseData.documents : []}
            cases={[caseData]}
            userRole={userRole}
          />
        </TabsContent>
        <TabsContent value="hearings" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Hearings</CardTitle>
              <CardDescription>
                All scheduled hearings for this case
              </CardDescription>
            </CardHeader>
            <CardContent>
              {caseData.hearings && caseData.hearings.length > 0 ? (
                <div className="grid gap-4">
                  {caseData.hearings.map((hearing) => (
                    <div
                      key={hearing.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <p className="font-medium">{hearing.title}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>
                            {new Date(hearing.date).toLocaleDateString()}
                          </span>
                          <span>•</span>
                          <span>
                            {new Date(hearing.date).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                      <Badge>{hearing.type}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No hearings scheduled</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="parties" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Case Parties</CardTitle>
              <CardDescription>
                All parties involved in this case
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold">Plaintiff</h3>
                  {caseData.plaintiffName ? (
                    <div className="mt-2 rounded-lg border p-4">
                      <p>{caseData.plaintiffName}</p>
                      <p className="text-sm text-muted-foreground">
                        {caseData.plaintiffAddress}
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      No detailed information
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">Defendant</h3>
                  {caseData.defendantName ? (
                    <div className="mt-2 rounded-lg border p-4">
                      <p>{caseData.defendantName}</p>
                      <p className="text-sm text-muted-foreground">
                        {caseData.defendantAddress}
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      No detailed information
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
