import SubHeading from '@/app/components/ui/sub-heading';
import FeatureCards from '@/app/components/ui/feature-cards';

export default function Features() {
  return (
    <section id="vorteile" className="container mx-auto px-4 flex flex-col gap-24">
      <SubHeading 
        as="h2"
        title={<>Denn Besa macht's besser.</>}
        text="Wir planen, packen und transportieren. Vom Single-Haushalt bis zum großen Firmenbüro sorgen wir für einen reibungslosen Ablauf."
      />
      <FeatureCards />
    </section>
  );
}
