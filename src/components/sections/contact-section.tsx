
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { akuSarmaData } from '@/lib/resume-data';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 animate-fadeIn [animation-delay:0.8s]">
      <Card className="overflow-hidden shadow-xl text-center bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-3xl">
            <MessageSquare className="mr-3 h-8 w-8" />
            Let's Connect
          </CardTitle>
          <CardDescription className="text-primary-foreground/80 text-lg mt-2">
            Interested in collaborating or have a question? Feel free to reach out!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            {akuSarmaData.socialLinks.map((link) => (
              <Button key={link.label} variant="outline" size="lg" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200 hover:scale-105 shadow-md">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="mr-2 h-5 w-5" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
          <p className="text-primary-foreground/90 text-lg">
            Or drop me an email at: <a href={`mailto:${akuSarmaData.email}`} className="font-semibold underline hover:text-background transition-colors">{akuSarmaData.email}</a>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
