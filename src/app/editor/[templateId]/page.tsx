
"use client";

import { useParams } from 'next/navigation';
import { templates, ResumeTemplate } from '@/lib/resume-templates';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '../../dashboard/layout';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import React from 'react';

// A simple component to render the resume for now
function ResumePreview({ template }: { template: ResumeTemplate }) {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Editing: {template.name}</CardTitle>
            <Button variant="outline" size="sm">
                <Download className="mr-2" />
                Download PDF
            </Button>
        </CardHeader>
      <CardContent className="p-8 bg-white text-black aspect-[8.5/11] ">
        <div className="space-y-6">
            <div className="text-center border-b pb-4">
                <h1 className="text-4xl font-bold">{template.content.header.name}</h1>
                <p className="text-muted-foreground">{template.content.header.contact.email} | {template.content.header.contact.phone} | {template.content.header.contact.linkedin}</p>
            </div>
            <div className="space-y-4">
                <h2 className="text-xl font-bold border-b pb-2">Summary</h2>
                <p className="text-sm">{template.content.summary}</p>
            </div>
             <div className="space-y-4">
                <h2 className="text-xl font-bold border-b pb-2">Experience</h2>
                {template.content.experience.map((job, index) => (
                    <div key={index} className="text-sm">
                        <h3 className="font-bold">{job.title}</h3>
                        <div className="flex justify-between">
                            <p className="font-semibold">{job.company}</p>
                            <p className="text-muted-foreground">{job.date}</p>
                        </div>
                        <ul className="list-disc list-inside mt-1">
                            {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="space-y-4">
                <h2 className="text-xl font-bold border-b pb-2">Education</h2>
                {template.content.education.map((edu, index) => (
                    <div key={index} className="text-sm">
                        <h3 className="font-bold">{edu.degree}</h3>
                        <div className="flex justify-between">
                            <p className="font-semibold">{edu.school}</p>
                            <p className="text-muted-foreground">{edu.date}</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="space-y-4">
                <h2 className="text-xl font-bold border-b pb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {template.content.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}


export default function EditorPage() {
  const params = useParams();
  const templateId = params.templateId as string;
  const template = templates.find(t => t.id === templateId);

  if (!template) {
    return (
        <DashboardLayout>
             <div className="flex items-center justify-center h-full">
                <p>Template not found.</p>
            </div>
        </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
        <div className="w-full">
            <ResumePreview template={template} />
        </div>
    </DashboardLayout>
  );
}
