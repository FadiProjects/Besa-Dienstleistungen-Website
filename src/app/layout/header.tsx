'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/ui/button';
import { Phone } from 'lucide-react';
import { RevealText } from '@/app/components/animation/text-reveal';
import { RevealElement } from '@/app/components/animation/reveal-element';

export default function Header() {
    return (
        <header className="relative min-h-screen w-screen flex items-center justify-center lg:justify-start overflow-hidden landscape:pt-28">
            
            <Image
                src="/img/entruempelung-wohnung-berlin.jpg"
                alt="Wohnung während der Entrümpelung von Besa Dienstleistungen in Berlin"
                fill
                priority
                quality={90}
                className="object-cover object-center z-0"
                sizes="100vw"
            />

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/100 via-white/90 to-white/20 lg:bg-gradient-to-r lg:from-white/100 lg:via-white/90 lg:via-50% lg:to-transparent lg:to-100%"></div>

            <div className="container mx-auto px-4 z-20 landscape:py-8">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[4.25rem] h-min w-full lg:w-max max-w-full">
                    
                    <div className="flex flex-col gap-[2.375rem] h-min w-full">
                        <RevealText type="words" delay={0.1} stagger={0.1}>
                            <h1>
                                Ihr Berliner Partner für<span className="line-break"></span> Umzug & Entrümpelung 
                            </h1>
                        </RevealText>
                        
                        <RevealText type="words" delay={0.1}>
                            <p className="font-medium">
                                Professionell, zuverlässig und fair. Wir kümmern uns um <span className="line-break"></span> Ihre Entrümpelung und Ihren Umzug in allen Berliner <span className="line-break"></span> Bezirken - schnell und unkompliziert.
                            </p>
                        </RevealText>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full lg:w-auto">
                        <RevealElement delay={1.5}>
                            <Button 
                                href="tel:+4917641693078" 
                                variant="primary" 
                                title="Rufen Sie uns jetzt an und erhalten Sie ein unverbindliches Angebot" 
                                icon={<Phone size={20} />}
                                className="w-full sm:w-auto"
                            >
                                Jetzt Angebot anfordern
                            </Button>
                        </RevealElement>
                    </div>
                </div>
            </div>

        </header>
    )
}