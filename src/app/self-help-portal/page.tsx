import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import SelfHelpPortalForm from '@/components/forms/SelfHelpPortalForm';

export default function SelfHelpPortalPage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">Self-Help Pricing Portal</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Get an instant, accurate quote for your cleaning and resupply needs. 
        Provide details about your property and select the services you require.
      </p>
      <div className="max-w-4xl mx-auto">
        <SelfHelpPortalForm />
      </div>
    </PageContainer>
  );
}
