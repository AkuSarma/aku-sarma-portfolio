
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testimonials | Aku's Digital Nexus",
  description: "This section has been removed.",
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center space-y-6 animate-fadeIn">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
        Testimonials
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        This section is no longer available.
      </p>
    </div>
  );
}
