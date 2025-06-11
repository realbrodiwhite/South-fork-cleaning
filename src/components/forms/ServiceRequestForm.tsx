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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { propertyTypes, cleaningServicesList, resupplyItemsList, addOnServicesList } from "@/lib/constants";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is required"),
  propertyType: z.string().min(1, "Property type is required"),
  propertySize: z.string().min(1, "Property size is required (e.g., 1200 sq ft)"),
  bedroomCount: z.coerce.number().min(0).max(10),
  bathroomCount: z.coerce.number().min(1).max(10),
  commonAreas: z.string().optional(),
  preferredDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Preferred date is required",
  }),
  preferredTime: z.string().optional(),
  cleaningServices: z.array(z.string()).optional(),
  resupplyItems: z.array(z.string()).optional(),
  addOns: z.array(z.string()).optional(),
  specialInstructions: z.string().optional(),
});

const allRequestServices = [
  { id: 'cleaningServices', label: 'Cleaning Services', items: cleaningServicesList },
  { id: 'resupplyItems', label: 'Resupply Items', items: resupplyItemsList },
  { id: 'addOns', label: 'Add-on Services', items: addOnServicesList },
];

export default function ServiceRequestForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      propertyType: "",
      propertySize: "",
      bedroomCount: 1,
      bathroomCount: 1,
      commonAreas: "",
      preferredDate: "",
      preferredTime: "Any",
      cleaningServices: [],
      resupplyItems: [],
      addOns: [],
      specialInstructions: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Here you would typically send the data to your backend
    console.log("Service Request Submitted:", values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    toast({
      title: "Booking Request Sent!",
      description: "We've received your request and will contact you shortly to confirm.",
      variant: "default",
    });
    router.push("/booking-confirmation");
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Request Cleaning &amp; Resupply Services</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h3 className="text-xl font-semibold font-headline border-b pb-2">Client Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input type="tel" placeholder="(555) 123-4567" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="address" render={({ field }) => (<FormItem><FormLabel>Property Address</FormLabel><FormControl><Input placeholder="123 Main St, Anytown, USA" {...field} /></FormControl><FormMessage /></FormItem>)} />
            </div>

            <h3 className="text-xl font-semibold font-headline border-b pb-2 pt-4">Property Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField control={form.control} name="propertyType" render={({ field }) => (<FormItem><FormLabel>Property Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select property type" /></SelectTrigger></FormControl><SelectContent>{propertyTypes.map(type => (<SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="propertySize" render={({ field }) => (<FormItem><FormLabel>Property Size (sq ft)</FormLabel><FormControl><Input placeholder="e.g., 1500" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="bedroomCount" render={({ field }) => (<FormItem><FormLabel>Number of Bedrooms</FormLabel><FormControl><Input type="number" min="0" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="bathroomCount" render={({ field }) => (<FormItem><FormLabel>Number of Bathrooms</FormLabel><FormControl><Input type="number" min="1" {...field} /></FormControl><FormMessage /></FormItem>)} />
            </div>
            <FormField control={form.control} name="commonAreas" render={({ field }) => (<FormItem><FormLabel>Common Areas (optional)</FormLabel><FormControl><Textarea placeholder="e.g., Living room, kitchen, patio" {...field} /></FormControl><FormMessage /></FormItem>)} />
            
            <h3 className="text-xl font-semibold font-headline border-b pb-2 pt-4">Service Date &amp; Time</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField control={form.control} name="preferredDate" render={({ field }) => (<FormItem><FormLabel>Preferred Date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="preferredTime" render={({ field }) => (<FormItem><FormLabel>Preferred Time (optional)</FormLabel><FormControl><Input placeholder="e.g., Morning, 2 PM" {...field} /></FormControl></FormItem>)} />
            </div>

            <h3 className="text-xl font-semibold font-headline border-b pb-2 pt-4">Select Services</h3>
            {allRequestServices.map(serviceCategory => (
              <FormField
                key={serviceCategory.id}
                control={form.control}
                name={serviceCategory.id as "cleaningServices" | "resupplyItems" | "addOns"}
                render={() => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">{serviceCategory.label}</FormLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                      {serviceCategory.items.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name={serviceCategory.id as "cleaningServices" | "resupplyItems" | "addOns"}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), item.id])
                                      : field.onChange(
                                          (field.value || []).filter(value => value !== item.id)
                                        );
                                  }}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>{item.name}</FormLabel>
                                <FormDescription>{item.description}</FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            
            <FormField control={form.control} name="specialInstructions" render={({ field }) => (<FormItem><FormLabel>Special Instructions (optional)</FormLabel><FormControl><Textarea placeholder="e.g., Pets in home, specific areas to focus on, entry instructions" {...field} /></FormControl><FormMessage /></FormItem>)} />

            <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
              {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Submit Service Request"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
