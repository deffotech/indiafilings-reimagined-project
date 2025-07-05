import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/authorized-capital-increase/Breadcrumb";
import HeroSection from "@/components/authorized-capital-increase/HeroSection";
import DetailsSection from "@/components/authorized-capital-increase/DetailsSection";
import DocumentsSection from "@/components/authorized-capital-increase/DocumentsSection";
import OffersSection from "@/components/authorized-capital-increase/OffersSection";

const AuthorizedCapitalIncrease = () => {
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

export default AuthorizedCapitalIncrease;