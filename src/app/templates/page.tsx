
import { templates } from "@/lib/resume-templates";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import DashboardLayout from "../dashboard/layout";

export default function TemplatesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Choose a Template</h1>
          <p className="text-muted-foreground">
            Select one of our professionally designed templates to get started.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id}>
              <CardContent className="p-4">
                <div className="aspect-[3/4] border rounded-lg overflow-hidden mb-4">
                  <Image
                    data-ai-hint="resume template"
                    src={template.thumbnailUrl}
                    width="300"
                    height="400"
                    alt={template.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                 <h2 className="text-lg font-semibold">{template.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                <Button asChild>
                  <Link href={`/editor/${template.id}`}>Use this Template</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
