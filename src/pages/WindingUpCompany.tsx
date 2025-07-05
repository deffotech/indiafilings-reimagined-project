import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/winding-up-company/Breadcrumb";
import HeroSection from "@/components/winding-up-company/HeroSection";
import DetailsSection from "@/components/winding-up-company/DetailsSection";
import DocumentsSection from "@/components/winding-up-company/DocumentsSection";
import OffersSection from "@/components/winding-up-company/OffersSection";

const WindingUpCompany = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />
      </div>
      <HeroSection />
      <DetailsSection />
      <DocumentsSection />
      <OffersSection />
      <Footer />
    </div>
  );
};

export default WindingUpCompany;