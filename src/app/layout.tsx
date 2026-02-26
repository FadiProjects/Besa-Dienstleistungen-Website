import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.besa-dienstleistungen.de"),
  title: {
    default: "Besa Dienstleistungen Berlin: Ihr Profi für Entrümpelungen & Umzüge",
    template: "%s | Besa Dienstleistungen Berlin" 
  },
  description: "Besa Dienstleistungen: Fachgerechte Entrümpelung mit Festpreis, Haushaltsauflösung & sichere Umzüge in Berlin. Pünktlich, sauber & preiswert. Jetzt kostenloses Angebot für Ihren Umzug oder Ihre Entrümpelung anfordern!",
  
  alternates: {
    canonical: "/",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: "Besa Dienstleistungen Berlin | Entrümpelung & Umzug",
    description: "Professionelle Hilfe bei Entrümpelungen und Umzügen in Berlin. Erhalten Sie jetzt Ihr kostenloses Angebot!",
    url: "https://www.besa-dienstleistungen.de",
    siteName: "Besa Dienstleistungen",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Besa Dienstleistungen Berlin - Entrümpelung und Umzüge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Besa Dienstleistungen Berlin",
    description: "Ihr Profi für Entrümpelungen & Umzüge in Berlin.",
    images: ["/img/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Besa Dienstleistungen Berlin",
    "description": "Besa Dienstleistungen: Fachgerechte Entrümpelung mit Festpreis, Haushaltsauflösung & sichere Umzüge in Berlin. Pünktlich, sauber & preiswert.",
    "url": "https://www.besa-dienstleistungen.de",
    "logo": "https://www.besa-dienstleistungen.de/img/branding/branding.png",
    "image": "https://www.besa-dienstleistungen.de/img/branding/branding.png",
    "telephone": "+4917641693078",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Amendestraße 19",
      "addressLocality": "Berlin",
      "postalCode": "13409",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.5694",
      "longitude": "13.3592"
    },
    "areaServed": [
      { "@type": "City", "name": "Berlin" },
      { "@type": "AdministrativeArea", "name": "Mitte" },
      { "@type": "AdministrativeArea", "name": "Friedrichshain-Kreuzberg" },
      { "@type": "AdministrativeArea", "name": "Pankow" },
      { "@type": "AdministrativeArea", "name": "Charlottenburg-Wilmersdorf" },
      { "@type": "AdministrativeArea", "name": "Spandau" },
      { "@type": "AdministrativeArea", "name": "Steglitz-Zehlendorf" },
      { "@type": "AdministrativeArea", "name": "Tempelhof-Schöneberg" },
      { "@type": "AdministrativeArea", "name": "Neukölln" },
      { "@type": "AdministrativeArea", "name": "Treptow-Köpenick" },
      { "@type": "AdministrativeArea", "name": "Marzahn-Hellersdorf" },
      { "@type": "AdministrativeArea", "name": "Lichtenberg" },
      { "@type": "AdministrativeArea", "name": "Reinickendorf" },
      { "@type": "AdministrativeArea", "name": "Tiergarten" },
      { "@type": "AdministrativeArea", "name": "Moabit" },
      { "@type": "AdministrativeArea", "name": "Wedding" },
      { "@type": "AdministrativeArea", "name": "Weißensee" },
      { "@type": "AdministrativeArea", "name": "Prenzlauer Berg" },
      { "@type": "AdministrativeArea", "name": "Hohenschönhausen" },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "52.5694",
          "longitude": "13.3592"
        },
        "geoRadius": "50000"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  return (
    <html lang="de">
      <body>
        <a 
          href="#main-content" title="Zum Hauptinhalt springen"
          className="fixed left-1/2 -translate-x-1/2 -top-[200px] focus:top-10 
                    z-[9999] flex items-center justify-center 
                    bg-[#e31e24] text-white text-base font-bold 
                    px-10 py-5 rounded-full border-2 border-black 
                    shadow-2xl transition-all duration-300 ease-in-out"
        >
          Zum Hauptinhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}