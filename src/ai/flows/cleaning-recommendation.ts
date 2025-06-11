'use server';

/**
 * @fileOverview Provides tailored cleaning and resupply recommendations based on property details.
 *
 * - cleaningRecommendation - A function that generates cleaning and resupply recommendations.
 * - CleaningRecommendationInput - The input type for the cleaningRecommendation function.
 * - CleaningRecommendationOutput - The return type for the cleaningRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CleaningRecommendationInputSchema = z.object({
  propertyType: z
    .string()
    .describe('The type of property (e.g., house, apartment, condo).'),
  propertySize: z.string().describe('The size of the property in square feet.'),
  guestUsage: z
    .string()
    .describe(
      'Typical guest usage of the property (e.g., frequent, occasional, light).' // Shorten example
    ),
});
export type CleaningRecommendationInput = z.infer<typeof CleaningRecommendationInputSchema>;

const CleaningRecommendationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'Tailored cleaning and resupply recommendations based on the property details.'
    ),
});
export type CleaningRecommendationOutput = z.infer<typeof CleaningRecommendationOutputSchema>;

export async function cleaningRecommendation(
  input: CleaningRecommendationInput
): Promise<CleaningRecommendationOutput> {
  return cleaningRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cleaningRecommendationPrompt',
  input: {schema: CleaningRecommendationInputSchema},
  output: {schema: CleaningRecommendationOutputSchema},
  prompt: `You are a cleaning and resupply expert. Based on the following property details, provide tailored cleaning and resupply recommendations.

Property Type: {{{propertyType}}}
Property Size: {{{propertySize}}} square feet
Guest Usage: {{{guestUsage}}}

Consider different use cases for each area (kitchen, bedroom, bathroom, common areas) when making recommendations.
`, // Shorten prompt instructions
});

const cleaningRecommendationFlow = ai.defineFlow(
  {
    name: 'cleaningRecommendationFlow',
    inputSchema: CleaningRecommendationInputSchema,
    outputSchema: CleaningRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
