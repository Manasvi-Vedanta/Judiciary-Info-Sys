import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Scale, GavelIcon, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="bg-primary text-primary-foreground px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Judiciary Information System</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome to the Judiciary Information System
          </h2>
          <p className="text-muted-foreground mt-2">
            Select your role to access the appropriate dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="bg-card text-card-foreground pb-2">
              <CardTitle className="flex items-center gap-2">
                <GavelIcon className="h-5 w-5" />
                Judges Portal
              </CardTitle>
              <CardDescription>
                Access case information, hearings, and documents
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4 text-sm text-muted-foreground">
                Manage your cases, review documents, and track hearings from a
                single dashboard.
              </p>
              <Button asChild className="w-full">
                <Link href="/dashboard/judges">Enter Portal</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="bg-card text-card-foreground pb-2">
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Lawyers Portal
              </CardTitle>
              <CardDescription>
                Manage cases, hearings, and legal documents
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4 text-sm text-muted-foreground">
                View your assigned cases, manage documents, and track upcoming
                hearings.
              </p>
              <Button asChild className="w-full">
                <Link href="/dashboard/lawyers">Enter Portal</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="bg-card text-card-foreground pb-2">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Registrars Portal
              </CardTitle>
              <CardDescription>
                Submit case data, manage documents, and schedule hearings
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4 text-sm text-muted-foreground">
                Update case information, manage court schedules, and generate
                reports.
              </p>
              <Button asChild className="w-full">
                <Link href="/dashboard/registrar">Enter Portal</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t bg-background px-6 py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Judiciary Information System. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
