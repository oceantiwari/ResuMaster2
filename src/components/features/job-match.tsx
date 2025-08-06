
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import {
  analyzeJobDescription,
  type AnalyzeJobDescriptionOutput,
} from "@/ai/flows/analyze-job-description";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import Link from "next/link";

const formSchema = z.object({
  jobDescriptionText: z
    .string()
    .min(50, "Job description must be at least 50 characters."),
});

type FormValues = z.infer<typeof formSchema>;

interface JobMatchProps {
  resumeText: string;
}

export default function JobMatch({ resumeText }: JobMatchProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeJobDescriptionOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescriptionText: "",
    },
  });

  async function onSubmit(values: FormValues) {
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
      const res = await analyzeJobDescription({
        ...values,
        resumeText,
      });
      setResult(res);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to analyze job description. Please try again.",
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
          <CardTitle>Job Description Match & Keyword Analysis</CardTitle>
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
        <CardTitle>Job Description Match & Keyword Analysis</CardTitle>
        <CardDescription>
          Analyze a job description against your resume to find missing
          keywords and get suggestions for improvement.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="jobDescriptionText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the full job description here..."
                      rows={8}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analyze & Match
            </Button>

            {loading && (
              <div className="w-full space-y-4">
                <Skeleton className="h-8 w-1/3" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-16 w-full" />
              </div>
            )}
            
            {result && (
              <div className="w-full space-y-4 animate-in fade-in-0 duration-500">
                <div className="rounded-md border border-dashed border-primary p-4">
                  <h3 className="font-semibold mb-2 text-primary-foreground">Missing Keywords:</h3>
                  {result.missingKeywords.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {result.missingKeywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No significant missing keywords found. Great job!
                    </p>
                  )}
                </div>
                <div className="rounded-md border border-dashed border-primary p-4">
                  <h3 className="font-semibold mb-2 text-primary-foreground">Suggestions:</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {result.suggestions}
                  </p>
                </div>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
