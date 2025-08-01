// The AI analyzes a job description against a resume to identify missing keywords and suggest areas for improvement.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeJobDescriptionInputSchema = z.object({
  resumeText: z.string().describe('The text content of the user\'s resume.'),
  jobDescriptionText: z.string().describe('The text content of the job description.'),
});

export type AnalyzeJobDescriptionInput = z.infer<typeof AnalyzeJobDescriptionInputSchema>;

const AnalyzeJobDescriptionOutputSchema = z.object({
  missingKeywords: z.array(z.string()).describe('Keywords from the job description that are missing from the resume.'),
  suggestions: z.string().describe('Suggestions for improving the resume based on the job description.'),
});

export type AnalyzeJobDescriptionOutput = z.infer<typeof AnalyzeJobDescriptionOutputSchema>;

export async function analyzeJobDescription(input: AnalyzeJobDescriptionInput): Promise<AnalyzeJobDescriptionOutput> {
  return analyzeJobDescriptionFlow(input);
}

const analyzeJobDescriptionPrompt = ai.definePrompt({
  name: 'analyzeJobDescriptionPrompt',
  input: {schema: AnalyzeJobDescriptionInputSchema},
  output: {schema: AnalyzeJobDescriptionOutputSchema},
  prompt: `You are a resume expert. Analyze the following job description and resume to identify missing keywords and suggest areas for improvement.

Job Description:
{{{jobDescriptionText}}}

Resume:
{{{resumeText}}}

Missing Keywords: List the keywords from the job description that are not present in the resume.

Suggestions: Provide specific suggestions on how to improve the resume to better match the job description.`, // VERY IMPORTANT: newlines and spacing are meaningful in prompts!
});

const analyzeJobDescriptionFlow = ai.defineFlow(
  {
    name: 'analyzeJobDescriptionFlow',
    inputSchema: AnalyzeJobDescriptionInputSchema,
    outputSchema: AnalyzeJobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await analyzeJobDescriptionPrompt(input);
    return output!;
  }
);
