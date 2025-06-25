
import { akuSarmaData } from '@/lib/resume-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Briefcase, Award, LinkIcon } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: "About Me | Aku's Digital Nexus",
  description: "Learn more about Aku Sarma's background, education, work experience, and achievements.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 py-8">
      <header className="text-center space-y-6 animate-fadeIn">
         <Image 
            src="/AkuSarma.png" 
            alt={akuSarmaData.name}
            width={150} 
            height={150}
            className="rounded-full shadow-xl object-cover aspect-square border-4 border-primary/30 mx-auto"
            data-ai-hint="profile picture"
            priority
          />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
          {akuSarmaData.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {akuSarmaData.about}
        </p>
      </header>

      <Separator />

      {/* Work Experience Section */ }
      <section className="animate-fadeIn [animation-delay:0.4s]">
        <h2 className="text-3xl font-semibold text-foreground mb-6 flex items-center">
          <Briefcase className="mr-3 h-8 w-8 text-accent" /> Work Experience
        </h2>
        <div className="space-y-6">
          {akuSarmaData.workExperience.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{exp.role}</CardTitle>
                <CardDescription className="text-md">{exp.company} <span className="text-sm text-muted-foreground">({exp.duration})</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {exp.certificateLink && exp.certificateLink !== "#" && (
                  <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-accent hover:underline mt-3">
                    <LinkIcon className="mr-1 h-4 w-4" /> View Certificate
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Education Section */}
      <section className="animate-fadeIn [animation-delay:0.2s]">
        <h2 className="text-3xl font-semibold text-foreground mb-6 flex items-center">
          <GraduationCap className="mr-3 h-8 w-8 text-accent" /> Education
        </h2>
        <div className="space-y-6">
          {akuSarmaData.education.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{edu.institution}</CardTitle>
                <CardDescription className="text-md">{edu.degree}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
                <p className="text-sm font-medium text-foreground mt-1">{edu.cgpa}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Awards Section */}
      <section className="animate-fadeIn [animation-delay:0.6s]">
        <h2 className="text-3xl font-semibold text-foreground mb-6 flex items-center">
          <Award className="mr-3 h-8 w-8 text-accent" /> Awards & Recognition
        </h2>
        <div className="space-y-6">
          {akuSarmaData.awards.map((award, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{award.title}</CardTitle>
                <CardDescription className="text-md">{award.organization} <span className="text-sm text-muted-foreground">({award.date})</span></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{award.description}</p>
                {award.link && award.link !== "#" && (
                   <a href={award.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-accent hover:underline mt-3">
                    <LinkIcon className="mr-1 h-4 w-4" /> View Details
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
