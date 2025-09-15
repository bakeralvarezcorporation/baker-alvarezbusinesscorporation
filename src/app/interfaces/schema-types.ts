// lib/schema-types.ts
// Definiciones de tipos para Schema.org

export interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string; // Opcional
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

export interface ContactPoint {
  "@type": "ContactPoint";
  telephone: string;
  contactType: string;
  email?: string;
  areaServed?: string | string[];
}

export interface CorporationSchema {
  "@context": "https://schema.org";
  "@type": "Corporation" | "ProfessionalService" | "Organization";
  name: string;
  description: string;
  url: string;
  logo?: string;
  address: PostalAddress;
  contactPoint: ContactPoint;
  sameAs: string[];
  // Puedes añadir más propiedades según necesites
  // https://schema.org/Corporation
}