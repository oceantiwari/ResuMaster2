import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-skills.ts';
import '@/ai/flows/rewrite-resume-content.ts';
import '@/ai/flows/generate-resume-summary.ts';
import '@/ai/flows/analyze-job-description.ts';
import '@/ai/flows/generate-bullet-points.ts';