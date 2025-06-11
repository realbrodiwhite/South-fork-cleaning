import Link from 'next/link';
import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function BookingConfirmationPage() {
  return (
    <PageContainer className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-lg text-center shadow-xl p-8">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-headline text-primary">Booking Request Received!</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-muted-foreground">
            Thank you for choosing South Fork Cleaning &amp; Supply. Your service request has been successfully submitted. 
            We will contact you within 24 hours to confirm the details and finalize your booking.
          </CardDescription>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/client">View My Bookings</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
