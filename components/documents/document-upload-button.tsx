"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Cases } from "@/lib/generated/prisma";
import axios from "axios";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

interface DocumentUploadProps {
  cases: Cases[];
}

const supabase = createClient();

export function DocumentUploadButton({ cases }: DocumentUploadProps) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [relatedCase, setRelatedCase] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const uploadToSupabase = async (): Promise<string> => {
    if (!file) throw new Error("No file selected");

    const fileExt = file.name.split(".").pop();
    const fileName = `${file.name.split(".")[0]}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from("documents")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("documents").getPublicUrl(fileName);

    return publicUrl;
  };

  const handleUpload = async () => {
    console.log("Working");

    try {
      setIsUploading(true);

      const fileUrl = await uploadToSupabase();

      const fileData = {
        title,
        category,
        caseId: relatedCase,
        fileUrl: fileUrl,
        fileType: file?.type,
        fileSize: file?.size,
      };

      const response = await axios.post("/api/documents", {
        fileData,
      });

      setOpen(false);
      setFile(null);
      setTitle("");
      setCategory("");
      setRelatedCase("");
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.error("Upload error:", error);
      // toast({
      //   title: "Upload failed",
      //   description: "There was an error uploading your document. Please try again.",
      //   variant: "destructive"
      // });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Upload className="h-4 w-4" /> Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
          <DialogDescription>
            Upload case-related documents to the system.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Document Title</Label>
            <Input
              id="title"
              placeholder="Enter document title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pleading">Pleading</SelectItem>
                <SelectItem value="evidence">Evidence</SelectItem>
                <SelectItem value="order">Court Order</SelectItem>
                <SelectItem value="judgment">Judgment</SelectItem>
                <SelectItem value="correspondence">Correspondence</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="case">Related Case</Label>
            <Select value={relatedCase} onValueChange={setRelatedCase}>
              <SelectTrigger id="case">
                <SelectValue placeholder="Select case" />
              </SelectTrigger>
              <SelectContent>
                {cases.map((caseItem) => (
                  <SelectItem
                    value={caseItem.id.toString()}
                    key={caseItem.caseNumber}
                  >
                    {caseItem.caseNumber || `CASE-${caseItem.id}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="file">File</Label>
            <Input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            {file && (
              <p className="text-sm text-muted-foreground mt-1">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)}{" "}
                MB)
              </p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isUploading}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleUpload()}
            disabled={!file || isUploading}
          >
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
