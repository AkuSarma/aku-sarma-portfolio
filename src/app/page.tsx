
import HeroSection from '@/components/sections/hero-section';
import AboutSnippetSection from '@/components/sections/about-snippet-section';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <Separator />
      <AboutSnippetSection />
      <Separator />
      <SkillsSection />
      <Separator />
      {/* Resume Skills Analyzer section removed */}
      <ContactSection />
    </div>
  );
}
