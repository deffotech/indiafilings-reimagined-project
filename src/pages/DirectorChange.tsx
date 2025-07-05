import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/director-change/Breadcrumb';
import HeroSection from '@/components/director-change/HeroSection';
import DetailsSection from '@/components/director-change/DetailsSection';
import DocumentsSection from '@/components/director-change/DocumentsSection';
import OffersSection from '@/components/director-change/OffersSection';

const DirectorChange = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Breadcrumb />
        <div className="mt-6 space-y-8">
          <HeroSection />
          <DetailsSection />
          <DocumentsSection />
          <OffersSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DirectorChange;