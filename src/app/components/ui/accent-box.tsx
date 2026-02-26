import React from 'react';
import Button from '@/app/components/ui/button';
import { Phone } from 'lucide-react';

export const AccentBox = () => {
  return (
    <div className="bg-primary p-10 md:p-14 rounded-[8px] text-white h-full flex flex-col justify-center relative overflow-hidden">
      <div className="relative z-10 space-y-6 max-w-2xl">
        <h5 className="h3 text-white font-bold leading-[1.15]">
          Jetzt anrufen und kostenlos Angebot erhalten!
        </h5>
        <p className="leading-relaxed opacity-90 text-grey/85">
          Ein Anruf genügt, um den ersten Schritt in ein stressfreies Umzugserlebnis zu machen. 
          Kontaktieren Sie uns noch heute für eine kostenlose Beratung und ihr persönliches, 
          kostenfreies Angebot. Wir sind bereit, wann Sie es sind.
        </p>
        
        <Button 
            href="tel:+4917641693078" 
            variant="white" 
            title="Jetzt Angebot anfordern" 
            icon={<Phone size={20} />}
            className="w-full sm:w-auto"
        >
            Jetzt anrufen
        </Button>
      </div>
    </div>
  );
};