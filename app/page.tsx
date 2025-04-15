import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, FileJson, Bot, Globe2 } from "lucide-react";
import Link from "next/link";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-background animate-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
              Transform Your Resume with AI
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Upload your PDF resume and let our AI extract structured data for better job matching. Built for developers, by developers.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Zap className="mr-2" /> Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                View API Docs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-colors">
              <FileJson className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Structured Data</h3>
              <p className="text-muted-foreground">
                Convert your PDF resume into clean, structured JSON data ready for API consumption.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur border-secondary/10 hover:border-secondary/20 transition-colors">
              <Bot className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                Advanced AI extracts and categorizes your experience, skills, and achievements.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-colors">
              <Globe2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate with platforms like DIO, Udemy, and job boards.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <Pricing />

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Supercharge Your Resume?
          </h2>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}