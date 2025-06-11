import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import AiRecommendationsForm from '@/components/forms/AiRecommendationsForm';

export default function AiRecommendationsPage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">AI Cleaning &amp; Resupply Advisor</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Let our AI help you determine the best cleaning and resupply strategy for your property. 
        Just provide a few details below.
      </p>
      <div className="max-w-2xl mx-auto">
        <AiRecommendationsForm />
      </div>
    </PageContainer>
  );
}
