"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function ScheduleForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "hearing",
    date: "",
    time: "",
    duration: 60,
    location: "",
    caseId: "",
    notes: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Combine date and time into a single DateTime string
      const dateTime = new Date(`${formData.date}T${formData.time}`);

      const hearingData = {
        title: formData.title,
        description: formData.description,
        type: formData.type,
        date: dateTime,
        duration: formData.duration,
        location: formData.location,
        caseId: parseInt(formData.caseId),
        notes: formData.notes,
      };

      const response = await fetch("/api/hearings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hearingData),
      });

      if (!response.ok) throw new Error("Failed to schedule hearing");

      console.log(response);

      // toast({
      //   title: "Hearing scheduled",
      //   description: "The hearing has been successfully scheduled.",
      // });

      router.refresh();
    } catch (error) {
      console.log(error);
      // toast({
      //   title: "Error",
      //   description: "There was an error scheduling the hearing.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Hearing</CardTitle>
        <CardDescription>
          Schedule a new hearing, trial, or meeting
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title*</Label>
            <Input
              id="title"
              placeholder="Enter hearing title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="type">Type*</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => handleChange("type", value)}
                required
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hearing">Hearing</SelectItem>
                  <SelectItem value="trial">Trial</SelectItem>
                  <SelectItem value="conference">Case Conference</SelectItem>
                  <SelectItem value="meeting">Meeting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="case">Related Case*</Label>
              <Select
                value={formData.caseId}
                onValueChange={(value) => handleChange("caseId", value)}
                required
              >
                <SelectTrigger id="case">
                  <SelectValue placeholder="Select case" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">CASE-2025-001</SelectItem>
                  <SelectItem value="2">CASE-2025-002</SelectItem>
                  <SelectItem value="3">CASE-2025-003</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date*</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time*</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="duration">Duration (minutes)*</Label>
            <Input
              id="duration"
              type="number"
              placeholder="60"
              value={formData.duration}
              onChange={(e) =>
                handleChange("duration", parseInt(e.target.value))
              }
              min="1"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="location">Location*</Label>
            <Input
              id="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter details or agenda"
              rows={3}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Additional notes"
              rows={2}
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
            />
          </div>

          <CardFooter className="flex justify-between px-0 pb-0">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Scheduling..." : "Schedule"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
