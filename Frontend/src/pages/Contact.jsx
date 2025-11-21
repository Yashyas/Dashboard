import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";

export default function ContactBento() {
  return (
    <div className="min-h-screen bg-background py-12 px-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

        {/* Email */}
        <Card className="rounded-none border-2 border-primary bg-card p-4 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Mail className="w-5 h-5" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Reach out anytime for collaboration or queries.</p>
            <Button
              variant="outline"
              className="mt-4 rounded-none  text-primary border-2 border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:border-0 hover:shadow-secondary-foreground"
            >
              Ym130602@gmail.com
            </Button>
          </CardContent>
        </Card>

        {/* GitHub */}
        <Card className="rounded-none border-2 border-primary bg-card p-4 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Github className="w-5 h-5" />
              GitHub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">View my projects, code samples and open-source work.</p>
            <a
              href="https://github.com/Yashyas"
              target="_blank"
              className="inline-block mt-4"
            >
              <Button
              variant="outline"
                className="rounded-none text-primary border-2 border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:border-0 hover:shadow-secondary-foreground"
              >
                Visit GitHub
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* LinkedIn */}
        <Card className="rounded-none border-2 border-primary bg-card p-4 shadow-[6px_6px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Connect professionally and view experience.</p>
            <a
              href="https://www.linkedin.com/in/yash-mishra-078050225/"
              target="_blank"
              className="inline-block mt-4"
            >
              <Button
              variant="outline"
                className="rounded-none  text-primary border-2 border-primary shadow-[4px_4px_0_theme(colors.primary)] hover:border-0 hover:shadow-secondary-foreground"
              >
                View LinkedIn
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Bento Large Card */}
        <Card className="md:col-span-3 rounded-none border-2 border-primary bg-card p-6 shadow-[8px_8px_0_theme(colors.primary)] hover:border-accent-foreground hover:shadow-accent-foreground">
          <CardHeader>
            <CardTitle className="text-primary text-2xl">Live Project Showcase</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Explore one of my recent full-stack builds featuring clean UI, realtime features,
              and optimized architecture with MERN.
            </p>

            <a
              href="https://united-ui-library.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2"
            >
              <Button
              variant="outline"
                className="rounded-none text-primary border-2 hover:border-0 hover:shadow-secondary-foreground border-primary shadow-[4px_4px_0_theme(colors.primary)]"
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
