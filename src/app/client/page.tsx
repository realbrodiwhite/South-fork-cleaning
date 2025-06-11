import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarPlus, History, UserCircle, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const clientFeatures = [
  { name: "Request New Service", icon: <CalendarPlus className="w-8 h-8 text-primary" />, description: "Easily book your next cleaning or resupply service.", link: "/request-service" },
  { name: "View Booking History", icon: <History className="w-8 h-8 text-primary" />, description: "Access details of your past and upcoming appointments.", link: "#" },
  { name: "Manage Account Details", icon: <UserCircle className="w-8 h-8 text-primary" />, description: "Update your contact information, address, and preferences.", link: "#" },
  { name: "Payment Information", icon: <CreditCard className="w-8 h-8 text-primary" />, description: "Manage your payment methods and view invoices.", link: "#" },
];

export default function ClientDashboardPage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">Client Dashboard</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Welcome back! Manage your services, view booking history, and update your account details.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {clientFeatures.map((feature) => (
          <Card key={feature.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="mb-3">{feature.icon}</div>
              <CardTitle className="font-headline">{feature.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
             <CardContent className="mt-auto">
               <Button asChild variant="outline" className="w-full">
                  <Link href={feature.link}>Go to {feature.name}</Link>
               </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
