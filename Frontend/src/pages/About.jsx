import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Target, Layers, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-12 px-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

        {/* Who Am I */}
        <Card className="rounded-none border-2 border-primary bg-card p-6 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <User className="w-5 h-5" />
              Who Am I
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Full-stack MERN developer focused on building clean, scalable, and modern digital experiences using React, shadcn UI, Tailwind, and Node.
            </p>
          </CardContent>
        </Card>

        {/* Skills & Stack */}
        <Card className="rounded-none border-2 border-primary bg-card p-6 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Layers className="w-5 h-5" />
              Tech Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              Specializing in MERN stack + modern UI frameworks.
            </p>

            <ul className="text-muted-foreground space-y-1">
              <li>• React + Zustand</li>
              <li>• Node + Express</li>
              <li>• MongoDB</li>
              <li>• Shadcn UI + Tailwind CSS</li>
              <li>• JWT Auth, WebSockets</li>
            </ul>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="rounded-none border-2 border-primary bg-card p-6 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Target className="w-5 h-5" />
              Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I aim to build user-focused digital products with excellent UX, optimized performance, and modern tooling.
            </p>
          </CardContent>
        </Card>

        {/* Large Story Section */}
        <Card className="md:col-span-3 rounded-none border-2 border-primary bg-card p-8 shadow-[8px_8px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="text-primary text-2xl flex items-center gap-2">
              <Rocket className="w-6 h-6" />
              My Journey
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground max-w-4xl leading-relaxed mb-6">
              I began as a passionate self-taught developer experimenting with MERN applications. 
              Over time I mastered modern frontend systems like Zustand, shadcn UI, Tailwind, and component-driven architecture.  
              Today I build full-stack apps, dashboards, real-time tools, and scalable backend systems with clean craftsmanship and speed.
            </p>
<a href="https://github.com/Yashyas">
            <Button
              variant="outline"
              className="rounded-none text-primary border-2 border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:border-0 hover:shadow-secondary-foreground"
            >
              View Portfolio
            </Button>
            </a>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
