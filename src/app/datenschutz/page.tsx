import Navbar from '@/app/layout/navigation';
import Contact from '@/app/components/sections/contact';
import Footer from '@/app/layout/footer';
import WhatsAppButton from '@/app/components/ui/whatsapp';
import DatenschutzData from '@/app/components/sections/datenschutz'

export default function Datenschutz() {
  return (
    <div>
      <Navbar />
      <main id="main-content">
        <DatenschutzData />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}