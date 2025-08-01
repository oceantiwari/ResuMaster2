'use server';
/**
 * @fileOverview This file contains a Genkit flow that suggests relevant hard and soft skills based on the user's job title and industry.
 *
 * - suggestSkills - A function that suggests skills based on job title and industry.
 * - SuggestSkillsInput - The input type for the suggestSkills function.
 * - SuggestSkillsOutput - The return type for the suggestSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillsInputSchema = z.object({
  jobTitle: z.string().describe('The job title of the user.'),
  industry: z.string().describe('The industry of the user.'),
});
export type SuggestSkillsInput = z.infer<typeof SuggestSkillsInputSchema>;

const SuggestSkillsOutputSchema = z.object({
  hardSkills: z.array(z.string()).describe('An array of suggested hard skills.'),
  softSkills: z.array(z.string()).describe('An array of suggested soft skills.'),
});
export type SuggestSkillsOutput = z.infer<typeof SuggestSkillsOutputSchema>;

export async function suggestSkills(input: SuggestSkillsInput): Promise<SuggestSkillsOutput> {
  return suggestSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSkillsPrompt',
  input: {schema: SuggestSkillsInputSchema},
  output: {schema: SuggestSkillsOutputSchema},
  prompt: `You are an expert career advisor specializing in resume optimization. Given a job title and industry, suggest relevant hard and soft skills to include in a resume.

Job Title: {{{jobTitle}}}
Industry: {{{industry}}}

Format your response as a JSON object with "hardSkills" and "softSkills" keys. Each key should contain an array of strings.
`,
});

const suggestSkillsFlow = ai.defineFlow(
  {
    name: 'suggestSkillsFlow',
    inputSchema: SuggestSkillsInputSchema,
    outputSchema: SuggestSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
