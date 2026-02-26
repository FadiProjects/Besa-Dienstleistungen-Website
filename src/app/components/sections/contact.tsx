import React from 'react';
import { ContactForm } from '@/app/components/ui/contact-form';
import { AccentBox } from '@/app/components/ui/accent-box';
import SubHeading from '@/app/components/ui/sub-heading';
import StaggerWrapper from '@/app/components/animation/stagger-wrapper';

export default function Contact() {
  return (
    <section id="kontakt" className="container mx-auto px-4">
      <div className="mb-12 md:mb-16">
        <SubHeading 
          as="h4"
          title={<>Jetzt Kontakt aufnehmen</>}
          text="Gerne beantworten wir Ihre Fragen und erstellen Ihnen ein individuelles Angebot. Kontaktieren Sie uns am Besten telefonisch für eine schnellere Kontaktaufnahme."
          titleClassName="h2"
        />
      </div>
      
      <StaggerWrapper delay={0.2}>
        <div className="flex flex-col-reverse lg:flex-row gap-6 relative items-stretch">
            <div className="reveal-item w-full lg:w-[35%] bg-grey/55 p-8 rounded-[8px] border-1 border-[#D9D9D9]">
              <ContactForm />
            </div>

            <div className="reveal-item hidden lg:flex absolute left-[35%] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-grey border-1 border-[#D6D6D6] items-center justify-center rounded-full text-sm font-medium text-paragraph uppercase tracking-wider">
              Oder
            </div>

            <div className="reveal-item w-full lg:w-[65%]">
              <AccentBox />
            </div>
        </div>
      </StaggerWrapper>
    </section>
  );
}