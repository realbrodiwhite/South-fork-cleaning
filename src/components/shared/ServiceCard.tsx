import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  price?: number;
  linkTo?: string;
}

export default function ServiceCard({ icon, title, description, price, linkTo = "/request-service" }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto pt-4 border-t">
        {price !== undefined && <p className="text-2xl font-bold text-primary">${price.toFixed(2)}</p>}
        <Button asChild variant="default" size="sm">
          <Link href={linkTo}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
