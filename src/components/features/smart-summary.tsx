
"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import Link from 'next/link';
import {
  generateResumeSummary,
  type GenerateResumeSummaryOutput,
} from "@/ai/flows/generate-resume-summary";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import React from "react";

interface SmartSummaryProps {
  resumeText: string;
}

export default function SmartSummary({ resumeText }: SmartSummaryProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateResumeSummaryOutput | null>(
    null
  );
  const { toast } = useToast();

  async function handleGenerate() {
    if (!resumeText || resumeText.length < 50) {
      toast({
        title: "Missing Resume",
        description:
          "Please go to the 'Resume' tab and paste your resume content first (at least 50 characters).",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);
    try {
      const res = await generateResumeSummary({ resumeText });
      setResult(res);
    } catch (error)
     {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (!resumeText) {
    return (
      <Card className="border-secondary">
        <CardHeader>
          <CardTitle>Smart Summary Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Please import your resume first to use this feature.</p>
          <Button asChild variant="link" className="px-0">
            <Link href="/resume">Go to Resume Importer</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-secondary">
      <CardHeader>
        <CardTitle>Smart Summary Generator</CardTitle>
        <CardDescription>
          Generate a concise, high-impact professional summary from your resume
          content, highlighting your key qualifications and skills.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This tool uses the content from the 'Resume' tab. Make sure your
          resume is pasted there before generating a summary.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <Button onClick={handleGenerate} disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Generate Summary
        </Button>
        {loading && <Skeleton className="h-24 w-full" />}
        {result && (
          <div className="w-full rounded-md border border-dashed border-primary p-4">
            <h3 className="font-semibold mb-2 text-primary-foreground">Generated Summary:</h3>
            <p className="text-muted-foreground">{result.summary}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
