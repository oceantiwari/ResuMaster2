
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import {
  suggestSkills,
  type SuggestSkillsOutput,
} from "@/ai/flows/suggest-skills";
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
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  jobTitle: z.string().min(2, "Job title must be at least 2 characters."),
  industry: z.string().min(2, "Industry must be at least 2 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function SkillsSuggester() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestSkillsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      industry: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    try {
      const res = await suggestSkills(values);
      setResult(res);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to suggest skills. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border-secondary">
      <CardHeader>
        <CardTitle>Skills Suggestion Engine</CardTitle>
        <CardDescription>
          Get AI-powered suggestions for hard and soft skills based on your job
          title and industry to pass through ATS systems.
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
                    <Input placeholder="e.g., Product Manager" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Technology" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Suggest Skills
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
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-28" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
            )}
            {result && (
              <div className="w-full grid gap-4 sm:grid-cols-2 animate-in fade-in-0 duration-500">
                <div className="rounded-md border border-dashed border-primary p-4">
                  <h3 className="font-semibold mb-2 text-primary-foreground">Hard Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.hardSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-md border border-dashed border-primary p-4">
                  <h3 className="font-semibold mb-2 text-primary-foreground">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.softSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
