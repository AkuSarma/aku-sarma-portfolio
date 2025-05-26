
import ResumeAnalyzerForm from '@/components/resume-analyzer-form';
import { Lightbulb } from 'lucide-react';

export const metadata = {
  title: "Resume Skills Analyzer | Aku's Digital Nexus",
  description: "Analyze a resume's skills against Aku Sarma's skillset using AI.",
};

export default function ResumeAnalyzerPage() {
  return (
    <div className="space-y-12 py-8">
      <header className="text-center space-y-4 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary flex items-center justify-center">
          <Lightbulb className="mr-4 h-10 w-10" />
          Resume Skills Analyzer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Leverage generative AI to compare skills from an uploaded resume with my own.
          This tool helps identify common ground and potential areas for development.
        </p>
      </header>

      <div className="animate-fadeIn [animation-delay:0.2s]">
        <ResumeAnalyzerForm />
      </div>

      <section className="mt-12 p-6 bg-muted/50 rounded-lg animate-fadeIn [animation-delay:0.4s]">
        <h2 className="text-2xl font-semibold text-foreground mb-3">How it Works</h2>
        <p className="text-foreground/80 mb-2">
          This tool uses a Generative AI model to process the text content of your uploaded resume. It then compares the skills identified in your resume against a predefined list of my core competencies as a Full Stack Developer and Data Scientist.
        </p>
        <ul className="list-disc list-inside text-foreground/80 space-y-1 text-sm">
          <li><strong>Overlap:</strong> Skills that are present in both your resume and my skillset.</li>
          <li><strong>Gaps:</strong> Skills from my skillset that were not prominently identified in your resume.</li>
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          Privacy Note: Uploaded resumes are processed for analysis and are not stored long-term. The analysis is based on textual content extraction.
        </p>
      </section>
    </div>
  );
}
