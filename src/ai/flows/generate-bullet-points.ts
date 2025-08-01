'use server';

/**
 * @fileOverview Flow for generating resume bullet points based on job title and company.
 *
 * - generateBulletPoints - A function that generates resume bullet points.
 * - GenerateBulletPointsInput - The input type for the generateBulletPoints function.
 * - GenerateBulletPointsOutput - The return type for the generateBulletPoints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBulletPointsInputSchema = z.object({
  jobTitle: z.string().describe('The job title for which to generate bullet points.'),
  company: z.string().describe('The company for which the job title is held.'),
});
export type GenerateBulletPointsInput = z.infer<typeof GenerateBulletPointsInputSchema>;

const GenerateBulletPointsOutputSchema = z.object({
  bulletPoints: z.array(z.string()).describe('An array of generated bullet points.'),
});
export type GenerateBulletPointsOutput = z.infer<typeof GenerateBulletPointsOutputSchema>;

export async function generateBulletPoints(input: GenerateBulletPointsInput): Promise<GenerateBulletPointsOutput> {
  return generateBulletPointsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBulletPointsPrompt',
  input: {schema: GenerateBulletPointsInputSchema},
  output: {schema: GenerateBulletPointsOutputSchema},
  prompt: `You are a resume expert. Generate 3-5 professional, results-driven resume bullet points for the following job title and company.

Job Title: {{{jobTitle}}}
Company: {{{company}}}

Bullet Points:
`,
});

const generateBulletPointsFlow = ai.defineFlow(
  {
    name: 'generateBulletPointsFlow',
    inputSchema: GenerateBulletPointsInputSchema,
    outputSchema: GenerateBulletPointsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
