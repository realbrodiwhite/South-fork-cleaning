import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecks, Users, CalendarDays, Settings, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const adminFeatures = [
  { name: "Manage Services", icon: <ListChecks className="w-8 h-8 text-primary" />, description: "Add, edit, or remove cleaning and resupply services.", link: "#" },
  { name: "User Management", icon: <Users className="w-8 h-8 text-primary" />, description: "View and manage client and employee accounts.", link: "#" },
  { name: "Booking Management", icon: <CalendarDays className="w-8 h-8 text-primary" />, description: "Oversee all bookings, assign tasks, and manage schedules.", link: "#" },
  { name: "Reporting &amp; Analytics", icon: <BarChart3 className="w-8 h-8 text-primary" />, description: "View key metrics and generate reports.", link: "#"},
  { name: "Platform Settings", icon: <Settings className="w-8 h-8 text-primary" />, description: "Configure overall platform settings and preferences.", link: "#" },
];

export default function AdminDashboardPage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">Admin Dashboard</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Welcome, Administrator. Manage platform operations, services, users, and bookings from here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {adminFeatures.map((feature) => (
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
