// src/ai/flows/resume-skills-analyzer.ts
'use server';

/**
 * @fileOverview A resume skills analyzer AI agent.
 *
 * - analyzeResumeSkills - A function that handles the resume skills analysis process.
 * - AnalyzeResumeSkillsInput - The input type for the analyzeResumeSkills function.
 * - AnalyzeResumeSkillsOutput - The return type for the analyzeResumeSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeResumeSkillsInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      "The resume to analyze, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  developerSkills: z
    .string()
    .describe('A list of the developer skills, separated by commas.'),
});
export type AnalyzeResumeSkillsInput = z.infer<typeof AnalyzeResumeSkillsInputSchema>;

const AnalyzeResumeSkillsOutputSchema = z.object({
  overlap: z.array(z.string()).describe('Skills that both the resume and the developer have.'),
  gaps: z.array(z.string()).describe('Skills that the developer has but the resume does not.'),
});
export type AnalyzeResumeSkillsOutput = z.infer<typeof AnalyzeResumeSkillsOutputSchema>;

export async function analyzeResumeSkills(input: AnalyzeResumeSkillsInput): Promise<AnalyzeResumeSkillsOutput> {
  return analyzeResumeSkillsFlow(input);
}

const analyzeResumeSkillsPrompt = ai.definePrompt({
  name: 'analyzeResumeSkillsPrompt',
  input: {schema: AnalyzeResumeSkillsInputSchema},
  output: {schema: AnalyzeResumeSkillsOutputSchema},
  prompt: `You are a helpful resume analyzer.  You will analyze a resume and determine how well the skills in the resume match a developer's skillset.

  The resume has been uploaded and the contents are available to you.

  Identify the skills that are present in both the resume and the developer's skillset.  Also identify the skills that the developer has, but are not present in the resume.

  Resume: {{media url=resumeDataUri}}
  Developer Skills: {{{developerSkills}}}
  `,
});

const analyzeResumeSkillsFlow = ai.defineFlow(
  {
    name: 'analyzeResumeSkillsFlow',
    inputSchema: AnalyzeResumeSkillsInputSchema,
    outputSchema: AnalyzeResumeSkillsOutputSchema,
  },
  async input => {
    const {output} = await analyzeResumeSkillsPrompt(input);
    return output!;
  }
);
