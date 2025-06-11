import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import ServiceCard from '@/components/shared/ServiceCard';
import { cleaningServicesList, resupplyItemsList, addOnServicesList } from '@/lib/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageSearch, ShoppingBasket, SparklesIcon, Wand2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">Our Services</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore our range of cleaning and resupply services designed to keep your property immaculate and well-stocked.
      </p>

      <Tabs defaultValue="cleaning" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 max-w-lg mx-auto">
          <TabsTrigger value="cleaning" className="flex items-center gap-2"><SparklesIcon className="w-4 h-4" /> Cleaning Services</TabsTrigger>
          <TabsTrigger value="resupply" className="flex items-center gap-2"><ShoppingBasket className="w-4 h-4" /> Resupply Items</TabsTrigger>
          <TabsTrigger value="addons" className="flex items-center gap-2"><Wand2 className="w-4 h-4" /> Add-On Services</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cleaning">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningServicesList.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.description}
                price={service.price}
                icon={<PackageSearch className="w-10 h-10 text-primary mb-4" />}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="resupply">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resupplyItemsList.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.description}
                price={service.price}
                icon={<ShoppingBasket className="w-10 h-10 text-primary mb-4" />}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="addons">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServicesList.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.description}
                price={service.price}
                icon={<Wand2 className="w-10 h-10 text-primary mb-4" />}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
