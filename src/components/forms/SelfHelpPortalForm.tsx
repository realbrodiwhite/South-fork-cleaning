"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { propertyTypes, usageFrequencies, cleaningServicesList, resupplyItemsList, addOnServicesList } from "@/lib/constants";
import type { GenerateSelfHelpPricingInput, GenerateSelfHelpPricingOutput } from "@/ai/flows/generate-self-help-pricing";
import { generateSelfHelpPricing } from "@/ai/flows/generate-self-help-pricing";
import { useState } from "react";
import { Loader2, DollarSign, FileText, Gift } from "lucide-react";

const formSchema = z.object({
  propertyType: z.string().min(1, "Property type is required"),
  propertySize: z.string().min(1, "Property size is required (e.g., 1200 sq ft)"),
  bedroomCount: z.coerce.number().min(0, "Number of bedrooms is required").max(10),
  bathroomCount: z.coerce.number().min(1, "Number of bathrooms is required").max(10),
  commonAreas: z.string().min(1, "Description of common areas is required"),
  usageFrequency: z.string().min(1, "Usage frequency is required"),
  cleaningServices: z.array(z.string()).optional(),
  resupplyItems: z.array(z.string()).optional(),
  addOns: z.array(z.string()).optional(),
});

const allPricingServices = [
  { id: 'cleaningServices', label: 'Cleaning Services', items: cleaningServicesList },
  { id: 'resupplyItems', label: 'Resupply Items', items: resupplyItemsList },
  { id: 'addOns', label: 'Add-on Services', items: addOnServicesList },
];

export default function SelfHelpPortalForm() {
  const [pricingResult, setPricingResult] = useState<GenerateSelfHelpPricingOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: "",
      propertySize: "",
      bedroomCount: 1,
      bathroomCount: 1,
      commonAreas: "",
      usageFrequency: "",
      cleaningServices: [],
      resupplyItems: [],
      addOns: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setPricingResult(null);
    try {
      const input: GenerateSelfHelpPricingInput = {
        ...values,
        cleaningServices: values.cleaningServices || [],
        resupplyItems: values.resupplyItems || [],
        addOns: values.addOns || [],
      };
      const result = await generateSelfHelpPricing(input);
      setPricingResult(result);
    } catch (e) {
      console.error(e);
      setError("Failed to generate quote. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Get an Instant Price Quote</CardTitle>
          <CardDescription>Fill in your property details and select desired services for an accurate estimate.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="propertyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select property type" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {propertyTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
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
                      <FormLabel>Property Size (sq ft)</FormLabel>
                      <FormControl><Input type="text" placeholder="e.g., 1500" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bedroomCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Bedrooms</FormLabel>
                      <FormControl><Input type="number" min="0" max="10" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bathroomCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Bathrooms</FormLabel>
                      <FormControl><Input type="number" min="1" max="10" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="commonAreas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Common Areas Description</FormLabel>
                    <FormControl><Textarea placeholder="e.g., Living room, kitchen, dining area, hallway" {...field} /></FormControl>
                    <FormDescription>Describe the common areas that need cleaning.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="usageFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Usage Frequency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select usage frequency" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {usageFrequencies.map((freq) => (
                          <SelectItem key={freq.value} value={freq.value}>{freq.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {allPricingServices.map(serviceCategory => (
                <FormField
                  key={serviceCategory.id}
                  control={form.control}
                  name={serviceCategory.id as "cleaningServices" | "resupplyItems" | "addOns"}
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold font-headline">{serviceCategory.label}</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                        {serviceCategory.items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name={serviceCategory.id as "cleaningServices" | "resupplyItems" | "addOns"}
                            render={({ field }) => {
                              return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), item.id])
                                          : field.onChange(
                                              (field.value || []).filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel>{item.name} (+${item.price})</FormLabel>
                                    <FormDescription>{item.description}</FormDescription>
                                  </div>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Calculate My Quote"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10 shadow-lg">
          <CardHeader><CardTitle className="text-destructive font-headline">Error</CardTitle></CardHeader>
          <CardContent><p className="text-destructive">{error}</p></CardContent>
        </Card>
      )}

      {pricingResult && (
        <Card className="shadow-xl border-2 border-primary">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Your Personalized Quote</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3 p-4 bg-primary/10 rounded-lg">
              <DollarSign className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Estimated Price</p>
                <p className="text-3xl font-bold text-primary">${pricingResult.estimatedPrice.toFixed(2)}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold font-headline flex items-center"><FileText className="w-5 h-5 mr-2 text-primary" />Price Breakdown:</h4>
              <Textarea readOnly value={pricingResult.priceBreakdown} className="mt-2 min-h-[100px] bg-muted/50" />
            </div>
            
            <div>
              <h4 className="font-semibold font-headline flex items-center"><Gift className="w-5 h-5 mr-2 text-primary" />Recommendations:</h4>
              <Textarea readOnly value={pricingResult.recommendations} className="mt-2 min-h-[150px] bg-muted/50" />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <a href="/request-service">Proceed to Book Service</a>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
