
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/din-reactivation/Breadcrumb";
import HeroSection from "@/components/din-reactivation/HeroSection";
import DetailsSection from "@/components/din-reactivation/DetailsSection";
import DocumentsSection from "@/components/din-reactivation/DocumentsSection";
import OffersSection from "@/components/din-reactivation/OffersSection";

const DINReactivation = () => {
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

export default DINReactivation;
