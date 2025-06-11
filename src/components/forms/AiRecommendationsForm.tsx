"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { propertyTypes, guestUsageLevels } from "@/lib/constants";
import type { CleaningRecommendationInput, CleaningRecommendationOutput } from "@/ai/flows/cleaning-recommendation";
import { cleaningRecommendation } from "@/ai/flows/cleaning-recommendation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  propertyType: z.string().min(1, "Property type is required"),
  propertySize: z.string().min(1, "Property size is required (e.g., 1200 sq ft)"),
  guestUsage: z.string().min(1, "Guest usage level is required"),
});

export default function AiRecommendationsForm() {
  const [recommendationResult, setRecommendationResult] = useState<CleaningRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: "",
      propertySize: "",
      guestUsage: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setRecommendationResult(null);
    try {
      const input: CleaningRecommendationInput = {
        propertyType: values.propertyType,
        propertySize: values.propertySize,
        guestUsage: values.guestUsage,
      };
      const result = await cleaningRecommendation(input);
      setRecommendationResult(result);
    } catch (e) {
      console.error(e);
      setError("Failed to get recommendations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Get AI-Powered Cleaning Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Size (e.g., 1200 sq ft)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter property size" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guestUsage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Typical Guest Usage</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guest usage level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {guestUsageLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Get Recommendations"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-destructive font-headline">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {recommendationResult && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-primary">Your Tailored Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              readOnly
              value={recommendationResult.recommendations}
              className="min-h-[200px] bg-muted/50"
              aria-label="AI Recommendations"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
