"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Hearings, Cases } from "@/lib/generated/prisma";

interface HearingWithCase extends Hearings {
  cases: Cases;
}

interface HearingCalendarProps {
  hearings: HearingWithCase[];
}

export function HearingCalendar({ hearings }: HearingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Get hearings for the selected date
  const selectedDateHearings = date
    ? hearings.filter(
        (hearing) =>
          new Date(hearing.date).toDateString() === date.toDateString()
      )
    : [];

  // Get unique dates with hearings for highlighting in the calendar
  const hearingDates = hearings.map((hearing) =>
    new Date(hearing.date).toDateString()
  );

  const uniqueHearingDates = Array.from(new Set(hearingDates)).map(
    (dateStr) => new Date(dateStr)
  );

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Hearing Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            modifiers={{
              hearing: uniqueHearingDates,
            }}
            modifiersStyles={{
              hearing: {
                fontWeight: "bold",
                backgroundColor: "hsl(var(--primary) / 0.1)",
                color: "hsl(var(--primary))",
              },
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {date
              ? date.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Select a date"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDateHearings.length > 0 ? (
            <div className="space-y-4">
              {selectedDateHearings.map((hearing) => (
                <div
                  key={hearing.id}
                  className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex items-start gap-2 flex-col">
                        <h3 className="font-medium">{hearing.title}</h3>
                        <Badge variant="outline">{hearing.type}</Badge>
                        <Badge variant="secondary">
                          {hearing.cases.caseNumber}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {hearing.cases.title}
                      </p>
                    </div>
                    <div className="flex items-end flex-col text-sm text-muted-foreground">
                      {new Date(hearing.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      <span className="ml-2">({hearing.duration} mins)</span>
                    </div>
                  </div>
                  {hearing.location && (
                    <div className="mt-2 text-sm">
                      <span className="font-medium">Location: </span>
                      {hearing.location}
                    </div>
                  )}
                  {hearing.description && (
                    <div className="mt-2 text-sm">
                      <span className="font-medium">Description: </span>
                      {hearing.description}
                    </div>
                  )}
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Case: </span>
                    {hearing.cases.title} ({hearing.cases.type})
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              No hearings scheduled for this date
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
