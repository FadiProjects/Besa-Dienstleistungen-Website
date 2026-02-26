import React from 'react';
import { FAQList } from '@/app/components/ui/faq-list';
import StaggerWrapper from '@/app/components/animation/stagger-wrapper';

const faqData = [
  {
    question: "Wie kurzfristig kann ich einen Umzug buchen?",
    answer: "Je nach Auslastung sind kurzfristige Buchungen innerhalb von 48 Stunden möglich. Kontaktieren Sie uns am besten direkt telefonisch."
  },
  {
    question: "Wie hoch sind die Kosten für einen Umzug oder eine Entrümpelung?",
    answer: "Die Kosten hängen vom Volumen und Aufwand ab. Wir bieten Ihnen jedoch immer ein faires Festpreisangebot nach einer Besichtigung an."
  },
  {
    question: "In welchen Gebieten von Berlin bietet Besa Dienstleistungen Entrümpelungen und Umzüge an?",
    answer: "Wir sind für Sie in ganz Berlin im Einsatz. Unser Team übernimmt Facharbeiten in allen 12 Bezirken - von Reinickendorf, Pankow und Spandau über Mitte (inkl. Wedding, Moabit & Tiergarten) bis hin zu Neukölln, Steglitz-Zehlendorf und Treptow-Köpenick. Auch in Ortsteilen wie dem Prenzlauer Berg, Weißensee oder Hohenschönhausen sind wir Ihr zuverlässiger Partner für schnelle Entrümpelungen und sichere Umzüge."
  },
  {
    question: "Bieten Sie auch einen De- und Montageservice für Möbel an?",
    answer: "Absolut! Unser Team übernimmt den fachgerechten Abbau und Aufbau Ihrer Möbel."
  },{
    question: " Wird der Müll bei einer Entrümpelung fachgerecht entsorgt?",
    answer: "Ja, absolut. Als Profi für Entrümpelungen in Berlin achten wir strikt auf Nachhaltigkeit. Unbrauchbarer Sperrmüll, Elektroaltgeräte oder Problemstoffe ausschließlich bei zertifizierten Berliner Recyclinghöfen fachgerecht entsorgt werden."
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4">
      <StaggerWrapper delay={0.2} staggerTime={0.3}>
        <div className="flex flex-col lg:flex-row gap-4">
          
          <div className="reveal-item lg:w-2/5 bg-primary p-10 md:p-14 rounded-[8px] text-white flex flex-col justify-center relative min-h-full overflow-hidden">
            <div className="relative z-10 space-y-6">
                <p className="h3 text-white">Häufig gestellte Fragen</p>
                <p className="leading-relaxed opacity-90 text-grey/85">
                  Unsere Leistungen im Überblick. Wir planen, packen und transportieren. 
                  Wir sind gerne für Sie da und klären all Ihre offenen Fragen. 
                  Zögern Sie nicht und rufen Sie uns an.
                </p>
            </div>
          </div>

          <div className="lg:w-3/5">
            <FAQList items={faqData} />
          </div>
          
        </div>
      </StaggerWrapper>
    </section>
  );
}