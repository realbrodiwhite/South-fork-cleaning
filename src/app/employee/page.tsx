import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarCheck, ClipboardList, CheckSquare, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const employeeFeatures = [
  { name: "View Schedule", icon: <CalendarCheck className="w-8 h-8 text-primary" />, description: "Check your upcoming cleaning assignments and appointments.", link: "#" },
  { name: "Manage Tasks", icon: <ClipboardList className="w-8 h-8 text-primary" />, description: "View task details, checklists, and special instructions for each job.", link: "#" },
  { name: "Update Service Status", icon: <CheckSquare className="w-8 h-8 text-primary" />, description: "Mark tasks as started, in-progress, or completed.", link: "#" },
  { name: "Communication Hub", icon: <MessageSquare className="w-8 h-8 text-primary" />, description: "Communicate with admins or clients if needed.", link: "#" },
];

export default function EmployeeDashboardPage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">Employee Dashboard</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Hello! Here you can view your schedule, manage assigned tasks, and update service statuses.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {employeeFeatures.map((feature) => (
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
                  <Link href={feature.link}>Access {feature.name}</Link>
               </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
