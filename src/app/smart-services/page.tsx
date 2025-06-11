
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, DollarSign, Sparkles, Package, ShoppingCart, Edit3, ThumbsUp, PiggyBank, ConciergeBell, Smile } from 'lucide-react';

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
    cta: 'Select This Package'
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
    cta: 'Upgrade to Plus'
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
    cta: 'Request Ultimate Care'
  },
];

export default function SmartServicesPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-16 md:py-24 rounded-xl bg-gradient-to-br from-primary/10 to-background shadow-xl mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-primary sm:text-5xl md:text-6xl">
            Transform Your Property Management with Smart Cleaning & Resupply
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground sm:text-xl md:text-2xl">
            South Fork Cleaning & Supply offers intelligent solutions to keep your property pristine, your guests delighted, and your operations effortless. Save time, reduce costs, and elevate your rental experience.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transform hover:scale-105 transition-transform">
              <Link href="/request-service">Book a Service Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-md transform hover:scale-105 transition-transform">
              <Link href="/self-help-portal">Get an Instant Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Smart Resupply Section */}
      <section className="py-16">
        <SectionTitle className="text-center">Intelligent Resupply: Never Run Low, Never Overpay</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Our smart resupply service anticipates your needs, delivering essentials at competitive prices and handling the small details that make a big difference.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <PiggyBank className="w-7 h-7" />
              </div>
              <CardTitle className="font-headline text-xl">Smart Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Leverage our bulk purchasing power for essentials like toiletries, coffee, and paper goods. Enjoy prices often better than local stores, directly saving you money.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <ConciergeBell className="w-7 h-7" />
              </div>
              <CardTitle className="font-headline text-xl">Effortless Convenience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We manage it all: restocking toilet paper, refilling condiments, ensuring toiletries are fresh, and even discarding expired items. Free up your time for what matters most.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Smile className="w-7 h-7" />
              </div>
              <CardTitle className="font-headline text-xl">Guest Delight Guaranteed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Ensure your guests always find a well-stocked, welcoming space. Small touches, like full salt shakers and fresh coffee, elevate their stay and your reviews.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Well-stocked kitchen and bathroom supplies" 
            width={800} 
            height={400} 
            className="w-full max-w-4xl mx-auto h-auto object-cover rounded-lg shadow-xl"
            data-ai-hint="organized supplies shelf"
          />
        </div>
      </section>

      {/* Comprehensive Cleaning Section */}
      <section className="py-16 bg-card rounded-xl shadow-xl my-16">
        <SectionTitle className="text-center">Sparkling Clean, Every Single Time</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Our meticulous cleaning services ensure your property is not just clean, but hygienically prepared and inviting for every arrival.
        </p>
        <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                src="https://placehold.co/600x450.png" 
                alt="Immaculately clean living room" 
                width={600} 
                height={450} 
                className="w-full h-auto object-cover"
                data-ai-hint="spotless modern interior"
                />
            </div>
            <div className="space-y-6">
                <Card className="bg-background/50 shadow-md">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Sparkles className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline text-xl">Tailored Cleaning Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">From standard turn-over cleans to deep seasonal refreshers, we offer a suite of services adaptable to your property&apos;s unique needs.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-background/50 shadow-md">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <CheckCircle className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline text-xl">Trusted Professionals, Quality Assured</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Our vetted, trained, and insured team uses eco-friendly products and proven methods for consistently exceptional results.</p>
                    </CardContent>
                </Card>
                <div className="text-left mt-8">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-transform">
                        <Link href="/services">Explore All Cleaning Services</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-16">
        <SectionTitle className="text-center">Choose Your Perfect Care Package</SectionTitle>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Select a package designed for common needs or contact us to customize a solution that perfectly fits your property.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => (
            <Card key={pkg.name} className="shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-card transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center">{pkg.icon}</div>
                <CardTitle className="font-headline text-2xl text-center">{pkg.name}</CardTitle>
                <CardDescription className="text-center text-accent font-semibold">{pkg.priceInfo}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 pt-0">
                <p className="text-sm text-muted-foreground text-center">{pkg.description}</p>
                <ul className="space-y-2 pt-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-transform">
                  <Link href={`/request-service?package=${encodeURIComponent(pkg.name)}`}>{pkg.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-primary/5 to-accent/5 mt-16 rounded-xl shadow-inner">
        <SectionTitle>Elevate Your Property Experience Today!</SectionTitle>
        <p className="mt-4 mb-8 max-w-xl mx-auto text-lg text-foreground">
          Stop juggling endless tasks. Let South Fork Cleaning & Supply bring efficiency, quality, and peace of mind to your property management. Get a quote or book your service now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
            <Link href="/self-help-portal">Get My Instant Quote</Link>
          </Button>
          <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
            <Link href="/request-service">Contact Us & Book Service</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}
