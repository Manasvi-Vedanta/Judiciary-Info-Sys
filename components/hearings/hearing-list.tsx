import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Cases, Hearings } from "@/lib/generated/prisma";

interface HearingListProps {
  hearings: any;
}

export function HearingList({ hearings }: HearingListProps) {
  // Sort hearings by date
  console.log(hearings);

  const sortedHearings = [...hearings].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Upcoming Hearings</CardTitle>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search hearings..."
                className="w-full pl-8"
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {sortedHearings.map((hearing) => (
            <div
              key={hearing.id}
              className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{hearing.title}</h3>
                    <Badge>{hearing.type}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {hearing.cases.caseNumber}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-sm">
                    {new Date(hearing.date).toLocaleDateString()} at{" "}
                    {new Date(hearing.date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  {/* <Button variant="outline" size="sm">
                    View Details
                  </Button> */}
                </div>
              </div>
              {hearing.location && (
                <div className="mt-2 text-sm">
                  <span className="font-medium">Location: </span>
                  {hearing.location}
                </div>
              )}
              {hearing.description && (
                <div className="mt-2 text-sm text-muted-foreground">
                  {hearing.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
