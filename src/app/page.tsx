
import Link from "next/link";
import { ArrowRight, Bot, DraftingCompass, FileText, Goal, Github, Twitter, Linkedin, Sparkles, Target } from "lucide-react";
import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">ResuMaster AI</span>
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

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the AI help me build my resume?</AccordionTrigger>
                  <AccordionContent>
                    Our platform uses advanced AI models to help you at every step. It can generate professional summaries from your work history, create impactful bullet points for your job experiences, suggest relevant skills for your target role, and even analyze your resume against a job description to identify what's missing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my data secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, your data is secure. The resume content you paste is stored only in your browser's local storage and is not saved on our servers. When you use an AI feature, only the relevant text is sent to the AI model for processing, and we don't store it after the fact.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I download my resume?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Once you select a template and use the editor to fill in your details, you'll have an option to download your finished resume as a print-ready PDF file.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is this service free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all the core features of ResuMaster AI, including the AI-powered tools and resume templates, are currently free to use.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-secondary/50 text-foreground">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-12 md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold font-headline text-foreground">ResuMaster AI</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your AI-powered partner for creating the perfect resume.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/summary" className="hover:text-primary">Smart Summary</Link>
              <Link href="/bullets" className="hover:text-primary">AI Bullet Points</Link>
              <Link href="/match" className="hover:text-primary">Job Match</Link>
              <Link href="/rewrite" className="hover:text-primary">Content Rewriter</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">About Us</Link>
              <Link href="#" className="hover:text-primary">Blog</Link>
              <Link href="#" className="hover:text-primary">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">Terms of Service</Link>
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            </nav>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 md:px-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 ResuMaster AI. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
