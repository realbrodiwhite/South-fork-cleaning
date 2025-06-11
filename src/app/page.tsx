import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles, Home, Users, Calendar } from 'lucide-react';

const services = [
  { name: 'Standard Cleaning', description: 'Thorough cleaning of all rooms, dusting, vacuuming, mopping.', icon: <Home className="w-8 h-8 text-primary" /> },
  { name: 'Deep Cleaning', description: 'Intensive cleaning including baseboards, appliances, and windows.', icon: <Sparkles className="w-8 h-8 text-primary" /> },
  { name: 'Resupply Service', description: 'Restocking essentials like toiletries, coffee, and snacks.', icon: <Users className="w-8 h-8 text-primary" /> },
];

export default function HomePage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-12 md:py-20 rounded-xl bg-gradient-to-br from-primary/20 to-background shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-primary sm:text-5xl md:text-6xl">
            South Fork Cleaning &amp; Supply
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground sm:text-xl">
            Your trusted partner for pristine properties and happy guests. We offer comprehensive cleaning and resupply services tailored to your needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
              <Link href="/request-service">Request a Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-md">
              <Link href="/self-help-portal">Get an Instant Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <SectionTitle className="text-center">Why Choose Us?</SectionTitle>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <CardTitle className="font-headline">Reliable &amp; Professional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Our experienced team is dedicated to providing top-quality service every time.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <CardTitle className="font-headline">Customized Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We tailor our services to meet your specific property needs and preferences.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <CardTitle className="font-headline">Flexible Scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Easy online booking and flexible scheduling to fit your busy life.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-card rounded-xl shadow-lg">
        <SectionTitle className="text-center">Our Core Services</SectionTitle>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center text-center p-6 rounded-lg">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold font-headline mb-2">{service.name}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="link" className="text-primary text-lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>
      
      {/* Image Section */}
       <section className="py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <SectionTitle>Clean Spaces, Happy Faces</SectionTitle>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe a clean environment contributes significantly to well-being and productivity. 
              Our team uses eco-friendly products and meticulous methods to ensure your space is not just clean, but healthy too.
            </p>
            <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              <Link href="/ai-recommendations">Get AI Cleaning Tips</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Clean living space" 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
              data-ai-hint="clean living room" 
            />
          </div>
        </div>
      </section>

    </PageContainer>
  );
}
