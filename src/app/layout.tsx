// app/layout.tsx
import './globals.css'; // Ajustado para la ubicación real en Next.js

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './ui/components/Header';
import Navigation from './ui/components/Navigation';
import Footer from './ui/components/Footer';
import ThemeSelector from './ui/components/ThemeSelector';
import WhatsAppButton from './ui/components/WhatsappButton';
import { CursorContextProvider } from './ui/motion/CustomCursorContext';
import CustomCursor from './ui/motion/CustomCursor';
import { getSiteInfo } from './lib/wordpress';


import StructuredData from './ui/components/StructedData';
import { CorporationSchema } from './interfaces/schema-types';

const corporationSchema: CorporationSchema = {
  "@context": "https://schema.org",
  "@type": "SociedadOffshore", // Más específico para una firma de servicios
  "name": "Baker & Álvarez Business Corporation",
  "description": "Baker & Alvarez Business Corporation: Firma especializada en soluciones jurídicas y fiduciarias de alta gama para clientes internacionales. Expertos en protección patrimonial, planificación sucesoria y asesoría legal. Experto en sociedades offshore",
  "url": "https://bufetedeabogadosyarquitectosbaker-alvarez.com", // Dominio real
  "logo": "https://bufetedeabogadosyarquitectosbaker-alvarez.com/_next/image?url=https%3A%2F%2Fbakerandalvarez.site%2Fwp-content%2Fuploads%2F2025%2F08%2Fcropped-LOGO-DE-BUFETE-DE-ABOGADOS_page-0001.jpg&w=1920&q=75",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PH Plaza 2000, frente a Plaza New York ",
    "addressLocality": "Panamá",
    "addressRegion": "PA",
    "postalCode": "",
    "addressCountry": "PA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+507 6917-7402", // Teléfono real
    "contactType": "customer service",
    "email": "bufete.letradosyarquitectos@gmail.com" // Email real
  },
  "sameAs": [
    "https://www.linkedin.com/in/baker-%C3%A1lvarez-business-corporation/",
    "https://www.instagram.com/bakeralvarezcorporation/",
    // Añade todas las redes sociales relevantes
  ]
};

import ChatwayDesktop from './ui/components/ChatWay';
const inter = Inter({ subsets: ['latin'] });
const siteInfo = await getSiteInfo();
export const metadata: Metadata = {
  title: `${siteInfo.name}`,
  description: 'Especialistas en Sociedades Offshore y Protección de Activos',
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <CursorContextProvider>
            <CustomCursor />
            <div className="min-h-screen flex flex-col">
              <Header />
              <div className="container mx-auto px-4">
                <ThemeSelector />
              </div>
              <div className='relative z-50 md:mb-8'>
                <Navigation />
              </div>
              <main className="flex-grow">
              <WhatsAppButton phone='50769177402' />
                {children}
              </main>
              <ChatwayDesktop />

              {/* Schema org */}
              <StructuredData data={corporationSchema} />

              <Footer />
            </div>
          </CursorContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}