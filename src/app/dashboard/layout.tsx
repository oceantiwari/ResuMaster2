
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Sparkles,
  ListChecks,
  Award,
  Goal,
  PenLine,
  LayoutDashboard,
} from "lucide-react";
import Logo from "@/components/icons/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/summary", label: "Summary", icon: Sparkles },
  { href: "/bullets", label: "Bullets", icon: ListChecks },
  { href: "/skills", label: "Skills", icon: Award },
  { href: "/match", label: "Match", icon: Goal },
  { href: "/rewrite", label: "Rewrite", icon: PenLine },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-full flex">
      <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border">
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline text-primary-foreground">
              ResuMaster
            </span>
          </Link>
        </div>
        <nav className="flex flex-col p-2 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="flex md:hidden items-center justify-between p-4 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold font-headline text-primary-foreground">
                ResuMaster
                </span>
            </Link>
            {/* Mobile Nav Trigger could go here */}
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background/95">
          {children}
        </main>
      </div>
    </div>
  );
}
