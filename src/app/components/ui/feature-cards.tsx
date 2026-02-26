import { Package, Home, CheckSquare, CalendarClock } from 'lucide-react';
import StaggerWrapper from '@/app/components/animation/stagger-wrapper';

export default function FeaturesCards() {
  const data = [
    {
      icon: <Package className="text-white w-10 h-10" />,
      title: "Faire Preise",
      text: "Transparente Kosten und ein unverbindlicher Kostenvoranschlag sorgen für Klarheit."
    },
    {
      icon: <Home className="text-white w-10 h-10" />,
      title: "Full-Service",
      text: "Von der Planung über das Verpacken bis zum Möbelaufbau – wir bieten alle Leistungen aus einer Hand."
    },
    {
      icon: <CheckSquare className="text-white w-10 h-10" />,
      title: "Zuverlässigkeit",
      text: "Pünktlichkeit und die sichere Handhabung Ihres Eigentums haben bei uns oberste Priorität."
    },
    {
      icon: <CalendarClock className="text-white w-10 h-10" />,
      title: "Schnelle Termine",
      text: "Wir sind sehr kurzfristig einsatzbereit. Rufen Sie uns an & erhalten Sie einen zeitnahen Termin."
    }
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <StaggerWrapper delay={0.2} staggerTime={0.21}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.map((feature, index) => (
              <div 
                key={index} 
                className="reveal-item bg-grey rounded-2xl flex flex-col items-center text-center shadow-lg border border-[#dddddd] py-16 pb-16 pl-12 pr-12"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 shrink-0">
                  {feature.icon}
                </div>

                <p className="text-xl font-bold mb-4 text-dark">
                  {feature.title}
                </p>

                <p className="m-0 text-paragraph">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </StaggerWrapper>
      </div>
    </div>
  );
}