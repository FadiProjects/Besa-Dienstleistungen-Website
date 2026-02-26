import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 lg:py-8 bg-grey border-t border-[#dddddd]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-1">
          <div className="flex items-center">
            <div className="relative h-10 w-40 lg:h-12 lg:w-48"> 
              <Image 
                src="/img/branding/branding.png" 
                alt="Besa Dienstleistungen Logo" 
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>
          </div>
          
          <span className="text-grey hidden lg:block opacity-20">|</span>
          
          <p className="text-xs opacity-60 text-center lg:text-left font-medium">
            © {currentYear} Besa Dienstleistungen. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-8 lg:gap-6">
          <a 
            href="https://www.facebook.com/profile.php?id=61581314251429&mibextid=wwXIfr&rdid=USkmFkeJ8JBdDXsR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RaUXSk18M%2F%3Fmibextid%3DwwXIfr#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-110 focus:scale-110 transition-transform block"
            aria-label="Besuchen Sie Besa Dienstleistungen Berlin auf Facebook"
            title="Besuchen Sie Besa Dienstleistungen Berlin auf Facebook"
          >
            <Image 
              src="/img/social-media/facebook.png" 
              alt="Facebook Logo" 
              width={24} 
              height={24}
              className="lg:w-5 lg:h-5 object-contain"
            />
          </a>
          <a 
            href="https://wa.me/4917641693078" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-110 focus:scale-110 transition-transform block"
            aria-label="Kontaktieren Sie uns auf WhatsApp"
            title="Kontaktieren Sie uns auf WhatsApp"
          >
            <Image 
              src="/img/social-media/whatsapp.svg" 
              alt="WhatsApp Logo" 
              width={24} 
              height={24}
              className="lg:w-5 lg:h-5 object-contain"
            />
          </a>
          <a 
            href="https://www.instagram.com/besa.dienstleistungen?utm_source=qr&igsh=MTNoazVjZW9zcjVzMg==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-110 focus:scale-110 transition-transform block"
            aria-label="Besuchen Sie Besa Dienstleistungen Berlin auf Instagram"
            title="Besuchen Sie Besa Dienstleistungen Berlin auf Instagram"
          >
            <Image 
              src="/img/social-media/instagram.png" 
              alt="Instagram Logo" 
              width={24} 
              height={24}
              className="lg:w-5 lg:h-5 object-contain"
            />
          </a>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link 
            title="Zum Impressum von Besa Dienstleistungen Berlin" href="/impressum" 
            className="text-paragraph hover:text-primary focus:text-primary transition-colors"
          >
            Impressum
          </Link>
          <Link 
            title="Zur Datenschutzerklärung von Besa Dienstleistungen Berlin" href="/datenschutz" 
            className="text-paragraph hover:text-primary focus:text-primary transition-colors"
          >
            Datenschutzerklärung
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;