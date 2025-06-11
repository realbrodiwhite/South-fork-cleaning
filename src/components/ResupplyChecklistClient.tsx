"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { resupplyChecklistItems } from '@/lib/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Kitchen, Bath, Bed, Package } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type CheckedItems = {
  [key: string]: boolean;
};

export default function ResupplyChecklistClient() {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    // Load saved checklist from localStorage if available
    const savedChecklist = localStorage.getItem('resupplyChecklist');
    if (savedChecklist) {
      setCheckedItems(JSON.parse(savedChecklist));
    }
  }, []);

  const handleCheckboxChange = (itemId: string) => {
    setCheckedItems(prev => {
      const newCheckedItems = { ...prev, [itemId]: !prev[itemId] };
      if (isClient) {
        localStorage.setItem('resupplyChecklist', JSON.stringify(newCheckedItems));
      }
      return newCheckedItems;
    });
  };
  
  const handleSaveChecklist = () => {
    if (isClient) {
      localStorage.setItem('resupplyChecklist', JSON.stringify(checkedItems));
      toast({
        title: "Checklist Saved!",
        description: "Your resupply checklist has been saved locally.",
      });
    }
  };

  const handleClearChecklist = () => {
    setCheckedItems({});
    if (isClient) {
      localStorage.removeItem('resupplyChecklist');
      toast({
        title: "Checklist Cleared!",
        description: "Your resupply checklist has been cleared.",
      });
    }
  };

  if (!isClient) {
    // Render a loading state or null during server-side rendering
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Loading checklist...</p>
      </div>
    );
  }

  const categoryIcons = {
    kitchen: <Kitchen className="w-5 h-5 mr-2" />,
    bathroom: <Bath className="w-5 h-5 mr-2" />,
    bedroom: <Bed className="w-5 h-5 mr-2" />,
    general: <Package className="w-5 h-5 mr-2" />,
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="kitchen" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
          {Object.keys(resupplyChecklistItems).map((categoryKey) => (
            <TabsTrigger key={categoryKey} value={categoryKey} className="capitalize flex items-center">
              {categoryIcons[categoryKey as keyof typeof categoryIcons]}
              {categoryKey}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(resupplyChecklistItems).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="capitalize font-headline flex items-center">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                  {category} Resupply Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                      <Checkbox
                        id={`${category}-${item.id}`}
                        checked={!!checkedItems[item.id]}
                        onCheckedChange={() => handleCheckboxChange(item.id)}
                        aria-labelledby={`label-${category}-${item.id}`}
                      />
                      <Label htmlFor={`${category}-${item.id}`} id={`label-${category}-${item.id}`} className="text-base cursor-pointer flex-grow">
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
       <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
          <Button onClick={handleSaveChecklist} variant="default">
            Save Checklist
          </Button>
          <Button onClick={handleClearChecklist} variant="outline">
            Clear All Checks
          </Button>
        </div>
    </div>
  );
}
