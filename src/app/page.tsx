
import Link from "next/link";
import { ArrowRight, Bot, DraftingCompass, FileText, Goal, Sparkles, Target } from "lucide-react";
import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary-foreground">ResuMaster AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/resume"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Create Resume
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Dashboard
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                    Build Your Best Resume with AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our AI-powered tools help you craft a professional resume that stands out. From smart summaries to keyword matching, we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/resume">
                      Get Started <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                data-ai-hint="resume builder"
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Everything You Need to Succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Leverage our suite of AI-driven tools to optimize every section of your resume for your dream job.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <div className="grid gap-1 text-center">
                <Sparkles className="h-8 w-8 mx-auto text-primary"/>
                <h3 className="text-lg font-bold">Smart Summary</h3>
                <p className="text-sm text-muted-foreground">
                  Generate a concise, high-impact professional summary from your resume content.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <FileText className="h-8 w-8 mx-auto text-primary"/>
                <h3 className="text-lg font-bold">AI Bullet Points</h3>
                <p className="text-sm text-muted-foreground">
                  Create professional, results-driven bullet points based on your job title.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Target className="h-8 w-8 mx-auto text-primary"/>
                <h3 className="text-lg font-bold">Job Match Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze a job description to find missing keywords and tailor your resume.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <DraftingCompass className="h-8 w-8 mx-auto text-primary"/>
                <h3 className="text-lg font-bold">Content Rewriter</h3>
                <p className="text-sm text-muted-foreground">
                  Refine your resume's language and adjust the tone to be more professional or dynamic.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Goal className="h-8 w-8 mx-auto text-primary"/>
                <h3 className="text-lg font-bold">Skills Suggester</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered suggestions for hard and soft skills based on your desired role.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Bot className="h-8 w-8 mx-auto text-primary"/>
                <h3 className="text-lg font-bold">Resume Importing</h3>
                <p className="text-sm text-muted-foreground">
                  Easily import your existing resume to get started with our AI tools in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 ResuMaster AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
