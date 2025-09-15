// components/structured-data.tsx
interface StructuredDataProps {
  data: object; // o puedes definir una interfaz más específica para el schema
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}