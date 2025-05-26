
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import type { Project } from '@/lib/resume-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      {project.image && (
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.aiHint || "project technology"}
          />
        </div>
      )}
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        {project.description.map((desc, index) => (
          <p key={index} className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
        ))}
        <div className="pt-2">
          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="transition-colors hover:bg-primary/10 hover:text-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group border-accent text-accent hover:bg-accent/10 hover:text-accent">
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> View Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
