import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import ServiceRequestForm from '@/components/forms/ServiceRequestForm';

export default function RequestServicePage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">Request Our Services</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Ready to experience the South Fork difference? Fill out the form below to request cleaning, resupply, or any of our add-on services. We'll get back to you promptly to confirm details.
      </p>
      <div className="max-w-4xl mx-auto">
        <ServiceRequestForm />
      </div>
    </PageContainer>
  );
}
