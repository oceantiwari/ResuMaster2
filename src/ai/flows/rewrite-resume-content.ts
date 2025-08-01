'use server';

/**
 * @fileOverview A resume content rewriting AI agent.
 *
 * - rewriteResumeContent - A function that rewrites the resume content.
 * - RewriteResumeContentInput - The input type for the rewriteResumeContent function.
 * - RewriteResumeContentOutput - The return type for the rewriteResumeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteResumeContentInputSchema = z.object({
  resumeSection: z
    .string()
    .describe('The section of the resume to rewrite.'),
  tone: z.enum(['professional', 'dynamic', 'concise']).describe('The desired tone for the rewritten content.'),
});
export type RewriteResumeContentInput = z.infer<typeof RewriteResumeContentInputSchema>;

const RewriteResumeContentOutputSchema = z.object({
  rewrittenSection: z.string().describe('The rewritten section of the resume.'),
});
export type RewriteResumeContentOutput = z.infer<typeof RewriteResumeContentOutputSchema>;

export async function rewriteResumeContent(input: RewriteResumeContentInput): Promise<RewriteResumeContentOutput> {
  return rewriteResumeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteResumeContentPrompt',
  input: {schema: RewriteResumeContentInputSchema},
  output: {schema: RewriteResumeContentOutputSchema},
  prompt: `You are an expert resume writer. Please rewrite the following resume section to be more {{{tone}}} in tone.\n\nResume Section: {{{resumeSection}}}`,
});

const rewriteResumeContentFlow = ai.defineFlow(
  {
    name: 'rewriteResumeContentFlow',
    inputSchema: RewriteResumeContentInputSchema,
    outputSchema: RewriteResumeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
