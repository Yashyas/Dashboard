import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code2, LayoutDashboard, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-12 px-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Hero */}
        <Card className="md:col-span-3 rounded-none border-2 border-primary bg-card p-10 shadow-[8px_8px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="text-primary text-3xl flex items-center gap-3">
              <Rocket className="w-7 h-7" />
              Welcome to My Developer Space
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground max-w-3xl mb-6">
              Building modern full-stack applications with MERN, Zustand, shadcn
              UI, and Tailwind. Focused on clean UI, performance, and scalable
              architecture.
            </p>
<a href="https://github.com/Yashyas">
            <Button
              variant="outline"
              className="rounded-none text-primary border-2 border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:border-0 hover:shadow-secondary-foreground"
            >
              Explore My Work
            </Button>
            </a>
          </CardContent>
        </Card>

        {/* Feature 1 */}
        <Card className="rounded-none border-2 border-primary bg-card p-6 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Code2 className="w-5 h-5" />
              Full-Stack Development
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Modern MERN applications built with clean APIs, modular structure,
              and fast UI powered by shadcn + Tailwind.
            </p>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className="rounded-none border-2 border-primary bg-card p-6 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <LayoutDashboard className="w-5 h-5" />
              UI / UX Systems
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Responsive, consistent design systems with brutalist themes,
              custom components, and dashboard-ready layouts.
            </p>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className="rounded-none border-2 border-primary bg-card p-6 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Zap className="w-5 h-5" />
              Realtime & Performance
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              WebSockets, optimized state management, and fast APIs enabling
              realtime and scalable interactions.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="md:col-span-3 rounded-none border-2 border-primary bg-card p-8 shadow-[8px_8px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="text-primary text-2xl">
              Ready to Collaborate?
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground mb-4 max-w-3xl">
              I’m open to freelance work, collaborations, and full-stack
              engineering roles. Let’s build something exceptional together.
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                className="rounded-none text-primary border-2 border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:border-0 hover:shadow-secondary-foreground"
              >
                Contact Me
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
