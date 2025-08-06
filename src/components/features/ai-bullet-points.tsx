
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, ListChecks } from "lucide-react";
import {
  generateBulletPoints,
  type GenerateBulletPointsOutput,
} from "@/ai/flows/generate-bullet-points";
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
import { Input } from "@/components/ui/input";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  jobTitle: z.string().min(2, "Job title must be at least 2 characters."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiBulletPoints() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateBulletPointsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      company: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    try {
      const res = await generateBulletPoints(values);
      setResult(res);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to generate bullet points. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border-secondary">
      <CardHeader>
        <CardTitle>AI-Generated Bullet Points</CardTitle>
        <CardDescription>
          Overcome writer's block. Get professional, results-driven bullet
          points based on your job title and company.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Bullet Points
            </Button>
            {loading && (
              <div className="w-full space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
              </div>
            )}
            {result && result.bulletPoints.length > 0 && (
              <div className="w-full rounded-md border border-dashed border-primary p-4 animate-in fade-in-0 duration-500">
                 <h3 className="font-semibold mb-2 text-primary-foreground">Suggestions:</h3>
                <ul className="list-disc space-y-2 pl-5">
                  {result.bulletPoints.map((point, index) => (
                    <li key={index} className="text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
