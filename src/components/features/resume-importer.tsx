
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface ResumeImporterProps {
  resumeText: string;
  setResumeText: (text: string) => void;
}

export default function ResumeImporter({
  resumeText,
  setResumeText,
}: ResumeImporterProps) {
  return (
    <Card className="border-secondary">
      <CardHeader>
        <CardTitle>Import Your Resume</CardTitle>
        <CardDescription>
          Paste your entire resume content here to get started. This text will
          be used by the AI tools to generate summaries and perform analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Paste your resume content here... (e.g., from a PDF, DOCX, or LinkedIn profile)"
          className="min-h-[50vh] font-code text-sm"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          aria-label="Resume Content Input"
        />
      </CardContent>
    </Card>
  );
}
