
import TestimonialCard from '@/components/testimonial-card';
import { akuSarmaData } from '@/lib/resume-data';
import { Star } from 'lucide-react';

export const metadata = {
  title: "Testimonials | Aku's Digital Nexus",
  description: "Read what colleagues and mentors say about Aku Sarma's skills and contributions.",
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-12 py-8">
      <header className="text-center space-y-4 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary flex items-center justify-center">
          <Star className="mr-4 h-10 w-10" />
          Testimonials
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Words from colleagues, mentors, and collaborators who've experienced my work firsthand.
        </p>
      </header>

      {akuSarmaData.testimonials && akuSarmaData.testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {akuSarmaData.testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-fadeIn [animation-delay:0.2s]">
          <p className="text-lg text-muted-foreground">No testimonials available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
