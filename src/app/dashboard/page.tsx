
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Sparkles, ListChecks, Award, Goal, PenLine } from 'lucide-react';

const features = [
  {
    href: '/resume',
    icon: FileText,
    title: 'Resume Importer',
    description: 'Start by importing or pasting your current resume content.',
  },
  {
    href: '/summary',
    icon: Sparkles,
    title: 'Smart Summary',
    description: 'Generate a high-impact professional summary with AI.',
  },
  {
    href: '/bullets',
    icon: ListChecks,
    title: 'AI Bullet Points',
    description: 'Create results-driven bullet points for your experience.',
  },
  {
    href: '/skills',
    icon: Award,
    title: 'Skills Suggester',
    description: 'Find the most relevant skills for your job target.',
  },
  {
    href: '/match',
    icon: Goal,
    title: 'Job Match Analysis',
    description: 'Analyze how well your resume matches a job description.',
  },
  {
    href: '/rewrite',
    icon: PenLine,
    title: 'Content Rewriter',
    description: 'Refine and rephrase any part of your resume content.',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to ResuMaster AI. Select a tool to optimize your resume.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.href}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{feature.title}</CardTitle>
              <feature.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-4">{feature.description}</p>
              <Button asChild variant="outline" size="sm">
                <Link href={feature.href}>Go to {feature.title.split(' ')[0]}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
