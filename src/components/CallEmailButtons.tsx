
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import ContactModal from './ContactModal';

interface CallEmailButtonsProps {
  serviceType?: string;
  className?: string;
}

const CallEmailButtons = ({ serviceType, className = "" }: CallEmailButtonsProps) => {
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: 'call' | 'email' | null;
  }>({ isOpen: false, type: null });

  const handleCallClick = () => {
    setContactModal({ isOpen: true, type: 'call' });
  };

  const handleEmailClick = () => {
    setContactModal({ isOpen: true, type: 'email' });
  };

  const closeModal = () => {
    setContactModal({ isOpen: false, type: null });
  };

  return (
    <>
      <div className={`flex gap-2 ${className}`}>
        <Button
          onClick={handleCallClick}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-green-600 border-green-600 hover:bg-green-50"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Button>
        <Button
          onClick={handleEmailClick}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          <Mail className="h-4 w-4" />
          Get Quote
        </Button>
      </div>

      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={closeModal}
        requestType={contactModal.type!}
        serviceType={serviceType}
      />
    </>
  );
};

export default CallEmailButtons;