import SubHeading from '@/app/components/ui/sub-heading';
import { ImageCard } from '@/app/components/ui/image-card';
import StaggerWrapper from '@/app/components/animation/stagger-wrapper';

const services = [
  { title: 'Haushaltsauflösung', src: '/img/services/hausumzuege-berlin.jpg', alt: 'Professionelle Haushaltsauflösung und Wohnungsauflösung in Berlin durch Besa Dienstleistungen' },
  { title: 'Entrümpelung', src: '/img/services/apartment-umzugkartons-entruempelung.jpg', alt: 'Fachgerechte Entrümpelung von Wohnungen und Häusern in ganz Berlin zum besten Preis' },
  { title: 'Gewerbeauflösung', src: '/img/services/bueroaufloesung-berlin.jpg', alt: 'Büro- und Gewerbeauflösung in Berlin - zuverlässige Räumung für Firmenkunden' },
  { title: 'Reinigung', src: '/img/services/reinigungsarbeiten.jpg', alt: 'Reinigunsservice von Besa Dienstleistungen in Berlin' },
  { title: 'Transporte', src: '/img/services/transportwagen-umzug.jpg', alt: 'Transporte in ganz Berlin durch Besa Dienstleistungen' },
  { title: 'Umzugsservice', src: '/img/services/stadtansicht-von-berlin.jpg', alt: 'Sicherer Umzugsservice für Privatumzüge und Firmenumzüge in Berlin und Umgebung' },
];

export default function Services() {
  return (
    <section id="leistungen" className="container mx-auto px-4">
      <div className="flex flex-col gap-12">
        <SubHeading 
          as="h3"
          title={<>Wir sind für Sie da</>}
          text="Egal ob privater Haushaltsumzug oder Gewerbeauflösung - Wir sind Ihr kompetenter Ansprechpartner."
          titleClassName="h2"
        />

      <StaggerWrapper delay={0.2} staggerTime={0.21}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="reveal-item">
              <ImageCard title={s.title} imageSrc={s.src} alt={s.alt}/>
            </div>
          ))}
        </div>
      </StaggerWrapper>

      </div>
    </section>
  );
}