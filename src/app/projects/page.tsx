
import ProjectCard from '@/components/project-card';
import { akuSarmaData } from '@/lib/resume-data';
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: "Projects | Aku's Digital Nexus",
  description: "A showcase of projects by Aku Sarma, demonstrating skills in full stack development and data science.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12 py-8">
      <header className="text-center space-y-4 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary flex items-center justify-center">
          <Briefcase className="mr-4 h-10 w-10" />
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Here's a collection of my work, showcasing my journey through various technologies and problem-solving challenges.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {akuSarmaData.projects.map((project, index) => (
          <div key={project.title} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
