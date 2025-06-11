
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, DollarSign, Sparkles, Package, ShoppingCart, Edit3, ThumbsUp } from 'lucide-react';

const servicePackages = [
  {
    name: 'Turnover Essential',
    description: 'Our popular package for quick turnovers. Includes standard cleaning and essential resupply to get your property guest-ready fast.',
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    priceInfo: 'Most Popular',
    features: [
      'Standard Cleaning of all rooms',
      'Restock Toilet Paper & Paper Towels',
      'Refill Hand Soap',
      'Trash Removal',
    ],
  },
  {
    name: 'Guest Ready Plus',
    description: 'Comprehensive care for a premium guest experience. Includes deep cleaning and a full resupply of amenities.',
    icon: <Package className="w-10 h-10 text-primary" />,
    priceInfo: 'Best Value',
    features: [
      'Deep Cleaning (incl. appliances)',
      'Full Toiletries Resupply (shampoo, conditioner, body wash)',
      'Kitchen Staples (coffee, tea, sugar)',
      'Fresh Linens & Towels Service Coordination (if separate)',
      'Check & Discard Expired Items (e.g., old condiments)',
    ],
  },
  {
    name: 'Ultimate Property Care',
    description: 'The all-inclusive solution for hands-off property management. Regular cleaning, proactive resupply, and peace of mind.',
    icon: <ThumbsUp className="w-10 h-10 text-primary" />,
    priceInfo: 'Total Peace of Mind',
    features: [
      'Scheduled Standard Cleanings (weekly/bi-weekly)',
      'Proactive Full Resupply Management',
      'Seasonal Deep Cleaning Included',
      'Minor Maintenance Checks (e.g., refilling salt/pepper shakers)',
      'Customizable Add-ons',
    ],
  },
];

export default function SmartServicesPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-12 md:py-20 rounded-xl bg-gradient-to-br from-primary/20 to-background shadow-xl mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-primary sm:text-5xl md:text-6xl">
            Effortless Property Management: Always Sparkling & Stocked
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground sm:text-xl">
            Discover our premium cleaning and intelligent resupply services. Save time, delight your guests, and maximize your property&apos;s potential with South Fork Cleaning & Supply.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
              <Link href="/request-service">Book a Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-md">
              <Link href="/self-help-portal">Get an Instant Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Smart Resupply Section */}
      <section className="py-16">
        <SectionTitle className="text-center">Smarter Resupply, Happier Stays</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Stop overpaying at the local grocery store and wasting time on tedious errands. Our resupply service is designed for your convenience and budget.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <CardTitle className="font-headline">Cost-Effective Essentials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Thanks to bulk purchasing, we offer common resupply items like toilet paper, paper towels, and coffee at prices often lower than local stores. Save money without sacrificing quality!</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <CardTitle className="font-headline">Ultimate Convenience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We handle the small but crucial tasks: replacing TP, refilling salt & pepper shakers, ensuring toiletries are stocked, and even discarding expired items like old BBQ sauce. It&apos;s all part of the service.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Edit3 className="w-6 h-6" />
              </div>
              <CardTitle className="font-headline">Time-Saving Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Reclaim your valuable time. Let us manage the inventory and restocking of essentials, so you can focus on guest communication, bookings, or simply relaxing.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Well-stocked kitchen and bathroom" 
            width={800} 
            height={400} 
            className="w-full max-w-3xl mx-auto h-auto object-cover rounded-lg shadow-xl"
            data-ai-hint="stocked supplies shelf"
          />
        </div>
      </section>

      {/* Comprehensive Cleaning Section */}
      <section className="py-16 bg-card rounded-xl shadow-lg">
        <SectionTitle className="text-center">Impeccable Clean, Every Time</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our professional cleaning team ensures your property is spotless, hygienic, and welcoming for every guest.
        </p>
        <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                src="https://placehold.co/600x450.png" 
                alt="Sparkling clean room" 
                width={600} 
                height={450} 
                className="w-full h-auto object-cover"
                data-ai-hint="clean hotel room"
                />
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Sparkles className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline">Standard & Deep Cleaning</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">From regular upkeep with our Standard Clean to intensive attention to detail in our Deep Clean service, we cover all your cleaning needs.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <CheckCircle className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline">Reliable & Professional</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Our vetted and trained staff use quality products and proven methods to deliver consistent, high-quality results.</p>
                    </CardContent>
                </Card>
                <div className="text-left mt-6">
                    <Button asChild size="lg">
                        <Link href="/services">Explore Cleaning Services</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-16">
        <SectionTitle className="text-center">Our Service Packages</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose a package that suits your needs or contact us to create a custom solution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => (
            <Card key={pkg.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="mb-3">{pkg.icon}</div>
                <CardTitle className="font-headline">{pkg.name}</CardTitle>
                <CardDescription>{pkg.priceInfo}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
                <ul className="space-y-1.5">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/request-service?package=">{pkg.name === "Ultimate Property Care" ? "Request Consultation" : "Select Package"}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 text-center">
        <SectionTitle>Ready to Simplify Your Property Management?</SectionTitle>
        <p className="mt-4 mb-8 max-w-xl mx-auto text-lg text-muted-foreground">
          Let South Fork Cleaning & Supply take the hassle out of property upkeep. Get started today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
            <Link href="/self-help-portal">Get an Instant Quote</Link>
          </Button>
          <Button asChild size="lg" variant="default">
            <Link href="/request-service">Contact Us & Book</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}

    