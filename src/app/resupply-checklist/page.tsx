import PageContainer from '@/components/shared/PageContainer';
import SectionTitle from '@/components/shared/SectionTitle';
import ResupplyChecklistClient from '@/components/ResupplyChecklistClient';

export default function ResupplyChecklistPage() {
  return (
    <PageContainer>
      <SectionTitle className="text-center">Resupply Checklist</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Use this checklist to ensure all necessary items are resupplied for your property. 
        Your selections are saved locally in your browser.
      </p>
      <ResupplyChecklistClient />
    </PageContainer>
  );
}
