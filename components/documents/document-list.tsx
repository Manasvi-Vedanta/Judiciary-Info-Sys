"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import Link from "next/link";
import { DocumentUploadButton } from "@/components/documents/document-upload-button";
import { DocumentFilters } from "@/components/documents/document-filters";
import { useState } from "react";
import { Cases, Documents } from "@/lib/generated/prisma";

interface DocumentListProps {
  documents: Documents[] | [];
  cases: Cases[];
  userRole: "judge" | "lawyer" | "registrar";
}

export function DocumentList({
  documents,
  userRole,
  cases,
}: DocumentListProps) {
  const [filteredDocuments, setFilteredDocuments] = useState(documents);
  const canUpload = userRole === "lawyer" || userRole === "registrar";

  const handleFilterChange = (filters: {
    search: string;
    category: string;
    dateRange: string;
  }) => {
    let filtered = [...documents];

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(
        (doc) =>
          doc.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          doc.description?.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category !== "all") {
      filtered = filtered.filter(
        (doc) => doc.category.toLowerCase() === filters.category
      );
    }

    // Apply date range filter
    if (filters.dateRange !== "all") {
      const now = new Date();
      const today = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      ).getTime();
      const docDate = (doc: Documents) => new Date(doc.createdAt).getTime();

      switch (filters.dateRange) {
        case "today":
          filtered = filtered.filter((doc) => docDate(doc) >= today);
          break;
        case "week":
          filtered = filtered.filter(
            (doc) => docDate(doc) >= today - 7 * 24 * 60 * 60 * 1000
          );
          break;
        case "month":
          filtered = filtered.filter(
            (doc) => docDate(doc) >= today - 30 * 24 * 60 * 60 * 1000
          );
          break;
        case "year":
          filtered = filtered.filter(
            (doc) => docDate(doc) >= today - 365 * 24 * 60 * 60 * 1000
          );
          break;
      }
    }

    setFilteredDocuments(filtered);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Documents</CardTitle>
          {canUpload && <DocumentUploadButton cases={cases} />}
        </div>
      </CardHeader>
      <CardContent>
        <DocumentFilters onFilterChange={handleFilterChange} />
        <div className="mt-6 grid gap-4">
          {filteredDocuments.map((document) => (
            <div
              key={document.id}
              className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">{document.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>
                      Uploaded on {new Date(document.createdAt).toDateString()}
                    </span>
                    <span>•</span>
                    <span>{document.fileSize}</span>
                    <Badge variant="outline" className="ml-1">
                      {document.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={document.fileUrl} target="_blank">
                    View
                  </Link>
                </Button>
                <Button variant="secondary" size="sm">
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
