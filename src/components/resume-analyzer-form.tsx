
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { analyzeResumeSkills, type AnalyzeResumeSkillsOutput } from '@/ai/flows/resume-skills-analyzer';
import { CheckCircle, AlertCircle, UploadCloud, Loader2, ListChecks, ListX } from 'lucide-react';
import { getAllSkillsFlat } from '@/lib/resume-data';

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];

const formSchema = z.object({
  resumeFile: z
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, 'Resume file is required.')
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE_BYTES, `Max file size is ${MAX_FILE_SIZE_MB}MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      '.pdf, .docx, .txt files are accepted.'
    ),
});

type ResumeAnalyzerFormValues = z.infer<typeof formSchema>;

export default function ResumeAnalyzerForm() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeResumeSkillsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const akuSkills = getAllSkillsFlat().join(', ');

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<ResumeAnalyzerFormValues>({
    resolver: zodResolver(formSchema),
  });

  const resumeFile = watch("resumeFile");
  const fileName = resumeFile && resumeFile.length > 0 ? resumeFile[0].name : "No file selected";

  const onSubmit: SubmitHandler<ResumeAnalyzerFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    const file = data.resumeFile[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const resumeDataUri = e.target?.result as string;
        const result = await analyzeResumeSkills({
          resumeDataUri,
          developerSkills: akuSkills,
        });
        setAnalysisResult(result);
        toast({
          title: "Analysis Complete",
          description: "Resume skills analysis finished successfully.",
          variant: "default",
        });
      } catch (err) {
        console.error("Analysis error:", err);
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred during analysis.";
        setError(errorMessage);
        toast({
          title: "Analysis Failed",
          description: errorMessage,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
      setError("Failed to read the file.");
      toast({
        title: "File Read Error",
        description: "Could not read the selected file.",
        variant: "destructive",
      });
      setIsLoading(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-primary flex items-center">
          <UploadCloud className="mr-3 h-7 w-7" />
          Resume Skills Analyzer
        </CardTitle>
        <CardDescription>
          Upload a resume (PDF, DOCX, TXT - max {MAX_FILE_SIZE_MB}MB) to compare its skills against mine.
          My skills are: {akuSkills.split(',').map(s => s.trim()).filter(s => s.length > 0).slice(0,5).join(', ')}...
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="resumeFile" className="text-base">Upload Resume</Label>
            <div className="mt-2 flex items-center justify-center w-full">
                <label htmlFor="resumeFile" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PDF, DOCX, TXT (MAX. {MAX_FILE_SIZE_MB}MB)</p>
                    </div>
                    <Input id="resumeFile" type="file" className="hidden" {...register("resumeFile")} accept=".pdf,.docx,.txt" />
                </label>
            </div>
            {fileName !== "No file selected" && <p className="mt-2 text-sm text-muted-foreground">Selected file: {fileName}</p>}
            {errors.resumeFile && <p className="mt-2 text-sm text-destructive">{errors.resumeFile.message}</p>}
          </div>

          {isLoading && (
            <div className="space-y-2">
              <Progress value={undefined} className="w-full h-2 [&>div]:bg-accent" /> {/* Indeterminate */}
              <p className="text-sm text-accent flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing your resume... this may take a moment.
              </p>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="reset" variant="outline" onClick={() => { reset(); setAnalysisResult(null); setError(null); }} className="mr-2" disabled={isLoading}>
            Clear
          </Button>
          <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ListChecks className="mr-2 h-4 w-4" />}
            Analyze Skills
          </Button>
        </CardFooter>
      </form>

      {analysisResult && !isLoading && (
        <div className="p-6 border-t">
          <h3 className="text-xl font-semibold mb-4 text-primary">Analysis Results:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-green-50 dark:bg-green-900/30 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Skill Overlap
                </CardTitle>
              </CardHeader>
              <CardContent>
                {analysisResult.overlap.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1 text-sm text-green-600 dark:text-green-300">
                    {analysisResult.overlap.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-green-600 dark:text-green-300">No direct skill overlaps found.</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-orange-900/30 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700 dark:text-orange-400">
                  <ListX className="mr-2 h-6 w-6" />
                  My Skills Not Found in Resume (Gaps)
                </CardTitle>
              </CardHeader>
              <CardContent>
                {analysisResult.gaps.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1 text-sm text-orange-600 dark:text-orange-300">
                    {analysisResult.gaps.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-orange-600 dark:text-orange-300">All my listed skills seem to be present or implied in the resume!</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </Card>
  );
}
