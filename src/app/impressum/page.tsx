import Navbar from '@/app/layout/navigation';
import Contact from '@/app/components/sections/contact';
import Footer from '@/app/layout/footer';
import WhatsAppButton from '@/app/components/ui/whatsapp';
import ImpressumData from '@/app/components/sections/impressum'

export default function Impressum() {
  return (
    <div>
      <Navbar />
      <main id="main-content">
        <ImpressumData />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}