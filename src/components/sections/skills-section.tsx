
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { akuSarmaData } from '@/lib/resume-data';
import { Zap } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section className="py-16 animate-fadeIn [animation-delay:0.6s]">
      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-muted/50">
          <CardTitle className="flex items-center text-3xl text-primary">
            <Zap className="mr-3 h-8 w-8" />
            My Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-8">
          {akuSarmaData.skills.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary cursor-default"
                  >
                    <skill.icon className="mr-2 h-4 w-4 text-accent" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
