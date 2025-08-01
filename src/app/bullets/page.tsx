
import AiBulletPoints from "@/components/features/ai-bullet-points";
import DashboardLayout from "../dashboard/layout";

export default function BulletsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">AI Bullet Points</h1>
      <AiBulletPoints />
    </DashboardLayout>
  );
}
