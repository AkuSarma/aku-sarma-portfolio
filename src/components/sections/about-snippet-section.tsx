
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { akuSarmaData } from '@/lib/resume-data';
import { UserCircle2 } from 'lucide-react';

export default function AboutSnippetSection() {
  return (
    <section className="py-16 animate-fadeIn [animation-delay:0.4s]">
      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-muted/50">
          <CardTitle className="flex items-center text-3xl text-primary">
            <UserCircle2 className="mr-3 h-8 w-8" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            {akuSarmaData.about.split('. ').slice(0, 3).join('. ') + '.'} 
          </p>
          <Button asChild variant="link" className="text-accent hover:text-accent/90 p-0 text-lg">
            <Link href="/about">
              Learn more about my journey &rarr;
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
