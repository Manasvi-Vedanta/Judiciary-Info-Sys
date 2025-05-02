export interface Document {
  id: string;
  title: string;
  description?: string;
  fileType: string;
  fileSize: string;
  uploadDate: Date;
  category: string;
  tags?: string[];
  caseId?: string;
  uploadedBy?: string;
}