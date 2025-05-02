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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type CaseFormData = {
  title: string;
  description?: string;
  type: string;
  filedDate: Date;
  location?: string;
  plaintiffName: string;
  plaintiffAddress?: string;
  defendantName: string;
  defendantAddress?: string;
  judge: string;
  crimeType?: string;
  crimeDate?: Date;
  crimeLocation?: string;
  arrestingOfficer?: string;
  arrestDate?: Date;
  caseNumber?: string;
};

export function CaseForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "case-info" | "plaintiff" | "defendant" | "crime-details"
  >("case-info");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form state
  const [formData, setFormData] = useState<CaseFormData>({
    title: "",
    description: "",
    type: "",
    filedDate: new Date(),
    location: "",
    judge: "",
    plaintiffName: "",
    plaintiffAddress: "",
    defendantName: "",
    defendantAddress: "",
    crimeType: "",
    crimeDate: undefined,
    crimeLocation: "",
    arrestingOfficer: "",
    arrestDate: undefined,
  });

  // Handle field changes
  const handleChange = (field: keyof CaseFormData, value: string | Date) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle date field changes
  const handleDateChange = (field: keyof CaseFormData, dateString: string) => {
    const date = dateString ? new Date(dateString) : undefined;
    setFormData((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  // Handle case submission
  const handleSubmit = async () => {
    // Validate required fields
    if (
      !formData.title ||
      !formData.type ||
      !formData.filedDate ||
      !formData.judge ||
      !formData.plaintiffName ||
      !formData.defendantName
    ) {
      // toast({
      //   title: "Missing information",
      //   description: "Please fill in all required fields.",
      //   variant: "destructive",
      // });
      return;
    }

    try {
      setIsSubmitting(true);

      // Submit form data to API
      const response = await axios.post("/api/cases", formData);

      // Redirect to the case details page
      console.log(formData);
      router.push(`/dashboard/registrar/cases/${response.data.caseNumber}`);
    } catch (error: any) {
      console.error("Error creating case:", error);
      // toast({
      //   title: "Failed to create case",
      //   description:
      //     error.response?.data?.message ||
      //     "There was an error creating the case. Please try again.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Case Submission</CardTitle>
        <CardDescription>
          Enter case details to register a new case in the system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="case-info"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as typeof activeTab)}
        >
          <TabsList className="mb-4 w-full grid grid-cols-4">
            <TabsTrigger value="case-info">Case Information</TabsTrigger>
            <TabsTrigger value="plaintiff">Plaintiff</TabsTrigger>
            <TabsTrigger value="defendant">Defendant</TabsTrigger>
            <TabsTrigger value="crime-details">Crime Details</TabsTrigger>
          </TabsList>

          <TabsContent value="case-info">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Case Title*</Label>
                <Input
                  id="title"
                  placeholder="Enter case title"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type">Case Type*</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleChange("type", value)}
                  required
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select case type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="civil">Civil</SelectItem>
                    <SelectItem value="criminal">Criminal</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="probate">Probate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="filedDate">Filed Date*</Label>
                <Input
                  id="filedDate"
                  type="date"
                  value={formData.filedDate.toISOString().split("T")[0]}
                  onChange={(e) =>
                    handleDateChange("filedDate", e.target.value)
                  }
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter case location"
                  value={formData.location || ""}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="judge">Assigned Judge*</Label>
                <Input
                  id="judge"
                  placeholder="Enter judge name"
                  value={formData.judge}
                  onChange={(e) => handleChange("judge", e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Case Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter case description"
                  rows={3}
                  value={formData.description || ""}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>

              <div className="mt-4 flex justify-end">
                <Button onClick={() => setActiveTab("plaintiff")}>
                  Next: Plaintiff Details
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="plaintiff">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="plaintiffName">Plaintiff Name*</Label>
                <Input
                  id="plaintiffName"
                  placeholder="Enter plaintiff name"
                  value={formData.plaintiffName}
                  onChange={(e) =>
                    handleChange("plaintiffName", e.target.value)
                  }
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="plaintiffAddress">Plaintiff Address</Label>
                <Textarea
                  id="plaintiffAddress"
                  placeholder="Enter address"
                  rows={2}
                  value={formData.plaintiffAddress || ""}
                  onChange={(e) =>
                    handleChange("plaintiffAddress", e.target.value)
                  }
                />
              </div>

              <div className="mt-4 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("case-info")}
                >
                  Back
                </Button>
                <Button onClick={() => setActiveTab("defendant")}>
                  Next: Defendant Details
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="defendant">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="defendantName">Defendant Name*</Label>
                <Input
                  id="defendantName"
                  placeholder="Enter defendant name"
                  value={formData.defendantName}
                  onChange={(e) =>
                    handleChange("defendantName", e.target.value)
                  }
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="defendantAddress">Defendant Address</Label>
                <Textarea
                  id="defendantAddress"
                  placeholder="Enter address"
                  rows={2}
                  value={formData.defendantAddress || ""}
                  onChange={(e) =>
                    handleChange("defendantAddress", e.target.value)
                  }
                />
              </div>

              <div className="mt-4 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("plaintiff")}
                >
                  Back
                </Button>
                <Button onClick={() => setActiveTab("crime-details")}>
                  Next: Crime Details
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crime-details">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="crimeType">Crime Type</Label>
                <Input
                  id="crimeType"
                  placeholder="Enter crime type"
                  value={formData.crimeType || ""}
                  onChange={(e) => handleChange("crimeType", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="crimeDate">Crime Date</Label>
                <Input
                  id="crimeDate"
                  type="date"
                  value={formData.crimeDate?.toISOString().split("T")[0] || ""}
                  onChange={(e) =>
                    handleDateChange("crimeDate", e.target.value)
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="crimeLocation">Crime Location</Label>
                <Input
                  id="crimeLocation"
                  placeholder="Enter crime location"
                  value={formData.crimeLocation || ""}
                  onChange={(e) =>
                    handleChange("crimeLocation", e.target.value)
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="arrestingOfficer">Arresting Officer</Label>
                <Input
                  id="arrestingOfficer"
                  placeholder="Enter officer name"
                  value={formData.arrestingOfficer || ""}
                  onChange={(e) =>
                    handleChange("arrestingOfficer", e.target.value)
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="arrestDate">Arrest Date</Label>
                <Input
                  id="arrestDate"
                  type="date"
                  value={formData.arrestDate?.toISOString().split("T")[0] || ""}
                  onChange={(e) =>
                    handleDateChange("arrestDate", e.target.value)
                  }
                />
              </div>

              <div className="mt-4 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("defendant")}
                >
                  Back
                </Button>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Case"}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
