
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import {
  rewriteResumeContent,
  type RewriteResumeContentOutput,
} from "@/ai/flows/rewrite-resume-content";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const tones = ["professional", "dynamic", "concise"] as const;

const formSchema = z.object({
  resumeSection: z.string().min(10, "Text must be at least 10 characters."),
  tone: z.enum(tones),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContentRewriter() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RewriteResumeContentOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeSection: "",
      tone: "professional",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    try {
      const res = await rewriteResumeContent(values);
      setResult(res);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to rewrite content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border-secondary">
      <CardHeader>
        <CardTitle>AI-Powered Rewriter & Tone Adjustment</CardTitle>
        <CardDescription>
          Refine your resume's language. Get alternative phrasing and adjust the
          tone to be more professional, dynamic, or concise.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="resumeSection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content to Rewrite</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste a summary, bullet point, or any section here..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Select a Tone</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                    >
                      {tones.map((tone) => (
                        <FormItem
                          key={tone}
                          className="flex items-center space-x-2 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={tone} />
                          </FormControl>
                          <FormLabel className="font-normal capitalize">
                            {tone}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Rewrite Content
            </Button>
            {loading && <Skeleton className="h-24 w-full" />}
            {result && (
               <div className="w-full rounded-md border border-dashed border-primary p-4">
                <h3 className="font-semibold mb-2 text-primary-foreground">Rewritten Content:</h3>
                <p className="text-muted-foreground">{result.rewrittenSection}</p>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
