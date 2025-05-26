
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image?: string;
  aiHint?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg bg-card">
      <CardHeader className="relative pt-8 pb-4">
        <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/30" aria-hidden="true" />
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-lg italic text-foreground/80 leading-relaxed">"{testimonial.quote}"</p>
      </CardContent>
      <CardFooter className="flex items-center space-x-4 pt-4 mt-auto bg-muted/30 p-4">
        {testimonial.image && (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full object-cover"
            data-ai-hint={testimonial.aiHint || "person portrait"}
          />
        )}
        <div>
          <p className="font-semibold text-primary">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
