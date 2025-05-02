"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GavelIcon,
  Scale,
  FileText,
  Calendar,
  LayoutDashboard,
  FileStack,
  Users,
  Clock,
  BarChart4,
  Upload,
} from "lucide-react";

interface SidebarProps {
  role: "judge" | "lawyer" | "registrar";
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const roleIcon = {
    judge: <GavelIcon className="h-6 w-6" />,
    lawyer: <Scale className="h-6 w-6" />,
    registrar: <FileText className="h-6 w-6" />,
  };

  const roleTitle = {
    judge: "Judge",
    lawyer: "Lawyer",
    registrar: "Registrar",
  };

  const navItems = {
    judge: [
      {
        href: `/dashboard/${role}`,
        label: "Dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/hearings`,
        label: "Hearings",
        icon: <Calendar className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/cases`,
        label: "Cases",
        icon: <FileStack className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/documents`,
        label: "Documents",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
    lawyer: [
      {
        href: `/dashboard/${role}`,
        label: "Dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/hearings`,
        label: "Hearings",
        icon: <Calendar className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/cases`,
        label: "Cases",
        icon: <FileStack className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/documents`,
        label: "Documents",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
    registrar: [
      {
        href: `/dashboard/${role}`,
        label: "Dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/cases`,
        label: "Manage Cases",
        icon: <FileStack className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/documents`,
        label: "Documents",
        icon: <FileText className="h-5 w-5" />,
      },
      // {
      //   href: `/dashboard/${role}/parties`,
      //   label: "Parties",
      //   icon: <Users className="h-5 w-5" />,
      // },
      {
        href: `/dashboard/${role}/schedule`,
        label: "Schedule",
        icon: <Clock className="h-5 w-5" />,
      },
      {
        href: `/dashboard/${role}/reports`,
        label: "Reports",
        icon: <BarChart4 className="h-5 w-5" />,
      },
    ],
  };

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2 font-semibold">
          {roleIcon[role]}
          <span>{roleTitle[role]} Portal</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems[role].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-3 rounded-md bg-muted px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-sm font-medium">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">
              Senior {roleTitle[role]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
