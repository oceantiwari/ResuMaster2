
"use client";

import { useContext } from "react";
import JobMatch from "@/components/features/job-match";
import { ResumeContext } from "@/context/resume-context";
import DashboardLayout from "../dashboard/layout";

export default function MatchPage() {
  const { resumeText } = useContext(ResumeContext);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Job Match</h1>
      <JobMatch resumeText={resumeText} />
    </DashboardLayout>
  );
}
