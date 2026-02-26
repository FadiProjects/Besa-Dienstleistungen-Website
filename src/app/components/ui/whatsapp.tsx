'use client';
import React from 'react';
import WhatsAppIcon from '@/app/components/social-media/whatsapp-icon';

const WhatsAppButton = () => {
  const phoneNumber = "4917641693078";
  const message = encodeURIComponent("Hallo Besa-Team, ich möchte hiermit eine Anfrage stellen.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Kontaktieren Sie uns auf WhatsApp"
  title="Kontaktieren Sie uns auf WhatsApp"
  className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 rounded-full shadow-2xl bg-[#25D366] transition-transform hover:scale-110 active:scale-95 group p-4"
>
  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
  
  <WhatsAppIcon className="w-8 h-8 relative z-99999" />

  <span className="absolute bottom-full right-0 mb-4 bg-white text-paragraph text-xs py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-grey/20 translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
    Jetzt Anfrage stellen
  </span>
</a>


  );
};

export default WhatsAppButton;
