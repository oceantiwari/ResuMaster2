
"use client";

import { useContext } from "react";
import ResumeImporter from "@/components/features/resume-importer";
import { ResumeContext } from "@/context/resume-context";
import DashboardLayout from "../dashboard/layout";


export default function ResumePage() {
  const { resumeText, setResumeText } = useContext(ResumeContext);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Resume</h1>
      <ResumeImporter resumeText={resumeText} setResumeText={setResumeText} />
    </DashboardLayout>
  );
}
