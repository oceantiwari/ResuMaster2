
"use client";

import { useParams } from 'next/navigation';
import { templates, ResumeTemplate, ResumeTemplateContent } from '@/lib/resume-templates';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '../../dashboard/layout';
import { Button } from '@/components/ui/button';
import { Download, PlusCircle, Trash2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Generic component for an editable field
function EditableField({ value, onChange, placeholder, as = 'input' }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; placeholder?: string, as?: 'input' | 'textarea' }) {
    const Component = as === 'textarea' ? Textarea : Input;
    return <Component value={value} onChange={onChange} placeholder={placeholder} className="w-full text-sm border-none focus:border focus:ring-1 focus:ring-primary bg-transparent p-0 m-0 h-auto" />;
}

function ResumeEditor({ template }: { template: ResumeTemplate }) {
  const [content, setContent] = useState<ResumeTemplateContent>(template.content);

  const handleFieldChange = (section: keyof ResumeTemplateContent, field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const path = field.split('.');
      const newContent = JSON.parse(JSON.stringify(content));
      let current = newContent[section];
      for (let i = 0; i < path.length - 1; i++) {
          current = current[path[i]];
      }
      current[path[path.length - 1]] = e.target.value;
      setContent(newContent);
  };
  
  const handleListItemChange = (section: 'experience' | 'education', index: number, field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newContent = JSON.parse(JSON.stringify(content));
      newContent[section][index][field] = e.target.value;
      setContent(newContent);
  };

  const handleResponsibilityChange = (expIndex: number, respIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = JSON.parse(JSON.stringify(content));
    newContent.experience[expIndex].responsibilities[respIndex] = e.target.value;
    setContent(newContent);
  }

  const handleSkillChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = JSON.parse(JSON.stringify(content));
    newContent.skills[index] = e.target.value;
    setContent(newContent);
  }

  const addItem = (section: 'experience' | 'education' | 'skills') => {
    const newContent = JSON.parse(JSON.stringify(content));
    if(section === 'experience') {
        newContent.experience.push({ title: '', company: '', date: '', responsibilities: [''] });
    } else if (section === 'education') {
        newContent.education.push({ school: '', degree: '', date: '' });
    } else if (section === 'skills') {
        newContent.skills.push('');
    }
    setContent(newContent);
  }
  
  const removeItem = (section: 'experience' | 'education' | 'skills', index: number) => {
    const newContent = JSON.parse(JSON.stringify(content));
    newContent[section].splice(index, 1);
    setContent(newContent);
  }

  const addResponsibility = (expIndex: number) => {
    const newContent = JSON.parse(JSON.stringify(content));
    newContent.experience[expIndex].responsibilities.push('');
    setContent(newContent);
  }

  const removeResponsibility = (expIndex: number, respIndex: number) => {
    const newContent = JSON.parse(JSON.stringify(content));
    newContent.experience[expIndex].responsibilities.splice(respIndex, 1);
    setContent(newContent);
  }


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
                <Input value={content.header.name} onChange={handleFieldChange('header', 'name')} placeholder="Your Name" className="text-4xl font-bold text-center border-none focus:border focus:ring-1 focus:ring-primary p-0 m-0 h-auto" />
                <div className="flex justify-center items-center gap-2 text-muted-foreground">
                   <EditableField value={content.header.contact.email} onChange={handleFieldChange('header', 'contact.email')} placeholder="Email" /> |
                   <EditableField value={content.header.contact.phone} onChange={handleFieldChange('header', 'contact.phone')} placeholder="Phone" /> |
                   <EditableField value={content.header.contact.linkedin} onChange={handleFieldChange('header', 'contact.linkedin')} placeholder="LinkedIn" />
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-bold border-b pb-2">Summary</h2>
                <EditableField value={content.summary} onChange={handleFieldChange('summary', 'summary')} as="textarea" placeholder="Your professional summary" />
            </div>
             <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                    <h2 className="text-xl font-bold">Experience</h2>
                    <Button variant="ghost" size="icon" onClick={() => addItem('experience')}><PlusCircle className="text-primary" /></Button>
                </div>
                {content.experience.map((job, index) => (
                    <div key={index} className="text-sm relative group">
                        <EditableField value={job.title} onChange={handleListItemChange('experience', index, 'title')} placeholder="Job Title" as="input" />
                        <div className="flex justify-between">
                            <EditableField value={job.company} onChange={handleListItemChange('experience', index, 'company')} placeholder="Company" as="input" />
                            <EditableField value={job.date} onChange={handleListItemChange('experience', index, 'date')} placeholder="Date (e.g., Jan 2020 - Present)" as="input" />
                        </div>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-center gap-2 group/item">
                                <EditableField value={resp} onChange={handleResponsibilityChange(index, i)} placeholder="Responsibility" as="input" />
                                <Button variant="ghost" size="icon" className="h-5 w-5 invisible group-hover/item:visible" onClick={() => removeResponsibility(index, i)}><Trash2 className="text-destructive" /></Button>
                              </li>
                            ))}
                        </ul>
                         <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" className="mt-1" onClick={() => addResponsibility(index)}>Add Responsibility</Button>
                            <Button variant="ghost" size="icon" className="absolute top-0 right-0 h-6 w-6 invisible group-hover:visible" onClick={() => removeItem('experience', index)}><Trash2 className="text-destructive" /></Button>
                         </div>
                    </div>
                ))}
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                    <h2 className="text-xl font-bold">Education</h2>
                    <Button variant="ghost" size="icon" onClick={() => addItem('education')}><PlusCircle className="text-primary" /></Button>
                </div>
                {content.education.map((edu, index) => (
                    <div key={index} className="text-sm relative group">
                        <EditableField value={edu.degree} onChange={handleListItemChange('education', index, 'degree')} placeholder="Degree" as="input" />
                        <div className="flex justify-between">
                            <EditableField value={edu.school} onChange={handleListItemChange('education', index, 'school')} placeholder="School" as="input" />
                            <EditableField value={edu.date} onChange={handleListItemChange('education', index, 'date')} placeholder="Date" as="input" />
                        </div>
                        <Button variant="ghost" size="icon" className="absolute top-0 right-0 h-6 w-6 invisible group-hover:visible" onClick={() => removeItem('education', index)}><Trash2 className="text-destructive" /></Button>
                    </div>
))}
            </div>
             <div className="space-y-2">
                <div className="flex items-center justify-between border-b pb-2">
                    <h2 className="text-xl font-bold">Skills</h2>
                    <Button variant="ghost" size="icon" onClick={() => addItem('skills')}><PlusCircle className="text-primary" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {content.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-1 bg-gray-200 rounded-md px-2 py-1 group">
                           <EditableField value={skill} onChange={handleSkillChange(index)} placeholder="Skill" as="input" />
                           <Button variant="ghost" size="icon" className="h-4 w-4 invisible group-hover:visible" onClick={() => removeItem('skills', index)}><Trash2 className="text-destructive h-3 w-3" /></Button>
                        </div>
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
  const [template, setTemplate] = useState<ResumeTemplate | null>(null);

  useEffect(() => {
    const foundTemplate = templates.find(t => t.id === templateId);
    if (foundTemplate) {
        setTemplate(foundTemplate);
    }
  }, [templateId]);


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
            <ResumeEditor template={template} />
        </div>
    </DashboardLayout>
  );
}
