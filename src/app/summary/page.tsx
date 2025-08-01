
"use client";

import { useContext } from "react";
import SmartSummary from "@/components/features/smart-summary";
import { ResumeContext } from "@/context/resume-context";
import DashboardLayout from "../dashboard/layout";

export default function SummaryPage() {
  const { resumeText } = useContext(ResumeContext);

  return (
    <DashboardLayout>
        <h1 className="text-2xl font-bold mb-4">Smart Summary</h1>
        <SmartSummary resumeText={resumeText} />
    </DashboardLayout>
  );
}
