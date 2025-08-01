
import SkillsSuggester from "@/components/features/skills-suggester";
import DashboardLayout from "../dashboard/layout";

export default function SkillsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Skills Suggester</h1>
      <SkillsSuggester />
    </DashboardLayout>
  );
}
