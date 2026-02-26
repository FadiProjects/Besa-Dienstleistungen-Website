'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.querySelector(".nav-container");

    if (!nav) return;

    const showAnim = gsap
      .from(nav, {
        yPercent: -150,
        paused: true,
        duration: 0.35,
        ease: "power2.out"
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === 1
          ? showAnim.reverse()
          : showAnim.play();
      },
    });
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const isHome = pathname === "/";

    if (href.includes("#") && isHome) {
      e.preventDefault();

      const id = href.split("#")[1];
      const smoother = ScrollSmoother.get();

      if (smoother && id) {
        setIsOpen(false);
         // @ts-ignore
        smoother.scrollTo(`#${id}`, {
          duration: 1,
          ease: "power2.out"
        });
      }
    }
  };

  const navLinks = [
    { name: 'Vorteile', href: '/#vorteile', title: 'Zu den Vorteilen von Besa Dienstleistungen Berlin' },
    { name: 'Leistungen', href: '/#leistungen', title: 'Zu den Leistungen von Besa Dienstleistungen Berlin' },
    { name: 'Ablauf', href: '/#ablauf', title: 'Zu den Abläufen von Besa Dienstleistungen Berlin' },
    { name: 'FAQ', href: '/#faq', title: 'Zu den Fragen und Antworten von Besa Dienstleistungen Berlin' },
    { name: 'Kontakt', href: '/#kontakt', title: 'Kontaktieren Sie Besa Dienstleistungen Berlin' },
  ];

  return (
    <div className="nav-container fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="container mx-auto bg-white rounded-[16px] shadow-sm border-b-[3px] border-primary overflow-hidden">
        
        <div className="flex justify-between items-center h-20 px-6 lg:px-10">
          
          <Link href="/" scroll={false} title="Besa Dienstleistungen in Berlin">
            <div className="relative h-10 w-44 lg:h-12 lg:w-52">
              <Image
                src="/img/branding/branding.png"
                alt="Besa Dienstleistungen Berlin - Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  scroll={false}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[16px] font-medium text-paragraph hover:text-primary transition-colors"
                  title={link.title}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-5">
            <a href="https://www.facebook.com/profile.php?id=61581314251429&mibextid=wwXIfr&rdid=USkmFkeJ8JBdDXsR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RaUXSk18M%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie Besa Dienstleistungen Berlin auf Facebook" title="Besuchen Sie Besa Dienstleistungen Berlin auf Facebook">
              <Image src="/img/social-media/facebook.png" alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://wa.me/4917641693078" target="_blank" rel="noopener noreferrer" title="Kontaktieren Sie Besa Dienstleistungen Berlin auf WhatsApp">
              <Image src="/img/social-media/whatsapp.svg" alt="WhatsApp" aria-label="Kontaktieren Sie uns auf WhatsApp"
            title="Kontaktieren Sie uns auf WhatsApp" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/besa.dienstleistungen?utm_source=qr&igsh=MTNoazVjZW9zcjVzMg==" target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie Besa Dienstleistungen Berlin auf Instagram"
            title="Besuchen Sie Besa Dienstleistungen Berlin auf Instagram">
              <Image src="/img/social-media/instagram.png" alt="Instagram" width={20} height={20} />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white px-6 pb-8 space-y-4">
            <div className="h-[1px] bg-grey mb-4" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                scroll={false}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-lg font-medium text-paragraph py-2 border-b border-grey/30 last:border-0"
                title={link.title}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-8 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61581314251429&mibextid=wwXIfr&rdid=USkmFkeJ8JBdDXsR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RaUXSk18M%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie Besa Dienstleistungen Berlin auf Facebook" title="Besuchen Sie Besa Dienstleistungen Berlin auf Facebook">
                <Image src="/img/social-media/facebook.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://wa.me/4917641693078" target="_blank" rel="noopener noreferrer" title="Kontaktieren Sie Besa Dienstleistungen Berlin auf WhatsApp">
                <Image src="/img/social-media/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/besa.dienstleistungen?utm_source=qr&igsh=MTNoazVjZW9zcjVzMg==" target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie Besa Dienstleistungen Berlin auf Instagram"
              title="Besuchen Sie Besa Dienstleistungen Berlin auf Instagram">
                <Image src="/img/social-media/instagram.png" alt="Instagram" width={24} height={24} />
             </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;