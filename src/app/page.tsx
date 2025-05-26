
import HeroSection from '@/components/sections/hero-section';
import AboutSnippetSection from '@/components/sections/about-snippet-section';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LightbulbIcon } from 'lucide-react';


export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <Separator />
      <AboutSnippetSection />
      <Separator />
      <SkillsSection />
      <Separator />
       <section className="py-16 animate-fadeIn [animation-delay:0.7s]">
        <Card className="overflow-hidden shadow-xl text-center bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-3xl text-primary">
              <LightbulbIcon className="mr-3 h-8 w-8" />
              Resume Skills Analyzer
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Got a resume? Let my AI-powered tool analyze its skills against mine. 
              Discover overlaps and identify potential gaps.
            </p>
            <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform duration-200 hover:scale-105">
              <Link href="/resume-analyzer">
                Analyze Resume <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
      <Separator />
      <ContactSection />
    </div>
  );
}
