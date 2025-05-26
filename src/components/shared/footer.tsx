
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { akuSarmaData } from '@/lib/resume-data';
import { Code2Icon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center text-xl font-bold text-primary hover:text-accent transition-colors duration-200 mb-2">
                <Code2Icon className="mr-2 h-7 w-7" />
                Aku's Digital Nexus
              </a>
            </Link>
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} {akuSarmaData.name}. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            {akuSarmaData.socialLinks.map((link) => (
              <Button key={link.label} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>
          
          <div className="text-center md:text-right text-sm">
            <p>Crafted with <span role="img" aria-label="love">❤️</span> and Next.js</p>
            <p>Designed for clarity and impact.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
