import { Sidebar } from "@/components/dashboard/sidebar";
import { UserNav } from "@/components/user-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "judge" | "lawyer" | "registrar";
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  console.log(role);
  return (
    <div className="flex h-screen overflow-hidden bg-muted/40">
      <Sidebar role={role} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
          <div className="flex-1">
            <h1 className="text-lg font-semibold">
              Judiciary Information System
            </h1>
          </div>
          <UserNav />
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
