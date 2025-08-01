
import ContentRewriter from "@/components/features/content-rewriter";
import DashboardLayout from "../dashboard/layout";

export default function RewritePage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Content Rewriter</h1>
      <ContentRewriter />
    </DashboardLayout>
  );
}
