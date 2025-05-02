import { Event } from "@/types/event";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineProps {
  events: Event[];
}

export function Timeline({ events }: TimelineProps) {
  // Sort events by date, newest first
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Case Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-4 pl-6 before:absolute before:inset-0 before:left-2.5 before:w-px before:bg-border">
          {sortedEvents.map((event) => (
            <div key={event.id} className="relative">
              <div className="absolute -left-6 flex h-5 w-5 items-center justify-center rounded-full border bg-background">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-medium">{event.title}</h3>
                  <time
                    dateTime={event.date.toString()}
                    className="text-sm text-muted-foreground"
                  >
                    {new Date(event.date).toLocaleDateString()} at{" "}
                    {new Date(event.date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {event.description}
                </p>
                {event.user && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    By: {event.user.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}