
"use client";

import { useState } from "react";
import {
  FileText,
  Sparkles,
  ListChecks,
  Award,
  Goal,
  PenLine,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AiBulletPoints from "@/components/features/ai-bullet-points";
import ContentRewriter from "@/components/features/content-rewriter";
import JobMatch from "@/components/features/job-match";
import ResumeImporter from "@/components/features/resume-importer";
import SkillsSuggester from "@/components/features/skills-suggester";
import SmartSummary from "@/components/features/smart-summary";
import Logo from "@/components/icons/logo";

export default function Home() {
  const [resumeText, setResumeText] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-5xl mb-8 flex items-center gap-4">
        <Logo className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-3xl font-bold font-headline text-primary-foreground">
            ResuMaster AI
          </h1>
          <p className="text-muted-foreground">
            Your AI-powered partner for creating the perfect resume.
          </p>
        </div>
      </header>

      <main className="w-full max-w-5xl">
        <Tabs defaultValue="resume" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-4">
            <TabsTrigger value="resume"><FileText className="mr-2"/>Resume</TabsTrigger>
            <TabsTrigger value="summary"><Sparkles className="mr-2"/>Summary</TabsTrigger>
            <TabsTrigger value="bullets"><ListChecks className="mr-2"/>Bullets</TabsTrigger>
            <TabsTrigger value="skills"><Award className="mr-2"/>Skills</TabsTrigger>
            <TabsTrigger value="match"><Goal className="mr-2"/>Match</TabsTrigger>
            <TabsTrigger value="rewrite"><PenLine className="mr-2"/>Rewrite</TabsTrigger>
          </TabsList>

          <TabsContent value="resume">
            <ResumeImporter resumeText={resumeText} setResumeText={setResumeText} />
          </TabsContent>
          <TabsContent value="summary">
            <SmartSummary resumeText={resumeText} />
          </TabsContent>
          <TabsContent value="bullets">
            <AiBulletPoints />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsSuggester />
          </TabsContent>
          <TabsContent value="match">
            <JobMatch resumeText={resumeText} />
          </TabsContent>
          <TabsContent value="rewrite">
            <ContentRewriter />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
