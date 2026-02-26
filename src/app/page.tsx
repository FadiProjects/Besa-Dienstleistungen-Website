import Navbar from '@/app/layout/navigation';
import Header from '@/app/layout/header';
import Features from '@/app/components/sections/features';
import Services from '@/app/components/sections/services';
import Process from '@/app/components/sections/process';
import Faq from '@/app/components/sections/faq';
import Contact from '@/app/components/sections/contact';
import Footer from '@/app/layout/footer';
import WhatsAppButton from '@/app/components/ui/whatsapp';
import ScrollSmootherWrapper from '@/app/components/animation/scroll-smoother'

export default function Home() {
  return (
    <div>
      <Navbar />
      <ScrollSmootherWrapper>
        <main id="main-content">
          <Header />
          <Features />
          <Services />
          <Process />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </ScrollSmootherWrapper>
      <WhatsAppButton />
    </div>
  );
}
