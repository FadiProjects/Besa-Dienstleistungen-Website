'use client';

import React from 'react';
import Image from 'next/image';
import { ProcessList } from '@/app/components/ui/process-list';
import SubHeading from '@/app/components/ui/sub-heading';
import Button from '@/app/components/ui/button';
import { Phone } from 'lucide-react';
import StaggerWrapper from '@/app/components/animation/stagger-wrapper';

const stepsData = [
  {
    number: "01",
    text: "Rufen Sie uns an oder nutzen Sie unser Formular für eine kostenlose und unverbindliche Erstberatung."
  },
  {
    number: "02",
    text: "Wir erstellen ein detailliertes Festpreisangebot, das genau auf Ihre Bedürfnisse zugeschnitten ist."
  },
  {
    number: "03",
    text: "Unser geschultes Team führt den Umzug oder die Entrümpelung termingerecht und sorgfältig durch."
  }
];

export default function Process() {
  return (
    <section id="ablauf" className="container mx-auto px-4">
      <div className="flex flex-col gap-12">
        <SubHeading 
          as="h4"
          title={<>Unkomplizierter Ablauf</>}
          text="Mit einem engagierten Team sorgen wir dafür, dass Ihr Umzug oder Ihre Entrümpelung reibungslos verläuft."
          titleClassName="h2"
        />

        <StaggerWrapper delay={0.2} staggerTime={0.3} startPoint="100%">
          <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 gap-8 2xl:gap-12 items-stretch">
            
            <div className="reveal-item relative w-full h-[300px] sm:h-[500px] 2xl:h-auto rounded-[8px] overflow-hidden order-first 2xl:order-last shadow-xl">
              <Image
                src="/img/services/umzugkartons-raum-wohnung.jpg"
                alt="Professioneller Umzugsservice in Berlin durch Besa Dienstleistungen"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="reveal-item mb-12 2xl:mb-[96px]">
                <ProcessList steps={stepsData} />
              </div>

              <div className="reveal-item space-y-6 mt-auto">
                <p className="leading-relaxed">
                  Wir von <span className="font-bold">Besa Dienstleistungen</span> sind Ihr zuverlässiger Partner, wenn es um stressfreie Umzüge und fachgerechte Entrümpelungen geht. Kontaktieren Sie uns jetzt, um ein unverbindliches Preisangebot zu erhalten.
                </p>
                
                <Button 
                    href="tel:+4917641693078" 
                    variant="primary" 
                    title="Jetzt Angebot anfordern" 
                    icon={<Phone size={20} />}
                    className="w-full sm:w-auto"
                >
                    Jetzt Angebot anfordern
                </Button>
              </div>
            </div>
            
          </div>
        </StaggerWrapper>
      </div>
    </section>
  );
}