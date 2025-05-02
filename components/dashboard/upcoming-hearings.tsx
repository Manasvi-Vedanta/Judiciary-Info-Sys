import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hearing } from "@/types/hearing";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface UpcomingHearingsProps {
  hearings: Hearing[];
}

export function UpcomingHearings({ hearings }: UpcomingHearingsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Upcoming Hearings</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {hearings.map((hearing) => (
            <div key={hearing.id} className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xs font-semibold">
                  {new Date(hearing.date).getDate()}
                </span>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium">
                  {hearing.caseNumber} - {hearing.title}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">
                    {new Date(hearing.date).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {hearing.type}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}