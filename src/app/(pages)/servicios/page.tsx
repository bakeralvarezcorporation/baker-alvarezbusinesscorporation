// app/servicios/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ServicesSection from '../../ui/components/ServicesSection';
import { getSiteInfo } from '../../lib/wordpress';
import HeroSection from '../../ui/components/HeroSection';

import * as motion from "motion/react-client";

const siteInfo = await getSiteInfo();
export const metadata: Metadata = {
  title: `Servicios - ${siteInfo.name}`,
  description: 'Firma especializada en soluciones jurídicas y fiduciarias de alta gama para clientes internacionales. Protección patrimonial, planificación sucesoria y asesoría legal especializada.',
  keywords: ["Derecho comercial", "Servicios fiduciarios", "Protección de activos"]
};

export default async function Servicios() {
  return (
    <>
    <motion.div 
      layout 
      initial={{opacity: 0}}
      animate={{ opacity: 1 }} 
      transition={{
        default: { ease: "linear" },
        layout: { duration: 0.3 }
      }}>
      <HeroSection pageTitle="Servicios"/>
      <ServicesSection />
    </motion.div>
    </>
  );
}