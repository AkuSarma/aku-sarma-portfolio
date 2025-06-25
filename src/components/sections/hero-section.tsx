
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { akuSarmaData } from '@/lib/resume-data';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30 rounded-xl shadow-inner overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Hi, I'm <span className="text-primary">{akuSarmaData.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            {akuSarmaData.title}
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {akuSarmaData.briefAbout}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg transition-transform duration-200 hover:scale-105">
              {/* Placeholder for actual resume link */}
              <a href="/Aku_Sarma_Resume.pdf" download="Aku_Sarma_Resume.pdf"> 
                Download Resume <Download className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
        <div className="animate-fadeIn md:block hidden [animation-delay:0.2s]">
          <Image 
            src="/AkuSarma.png" 
            alt="Aku Sarma - Developer Portrait" 
            width={600} 
            height={600}
            className="rounded-full shadow-2xl object-cover aspect-square border-4 border-primary/20"
            data-ai-hint="developer portrait"
            priority
          />
        </div>
      </div>
    </section>
  );
}
