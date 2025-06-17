import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://city-dental-surgery.com/#organization",
        "name": "City Dental Surgery",
        "url": "https://city-dental-surgery.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://city-dental-surgery.com/images/logo.jpg",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+40-771-376-927",
          "contactType": "customer service",
          "availableLanguage": ["Romanian", "English"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bună Ziua nr 82, C1",
          "addressLocality": "Cluj-Napoca",
          "addressRegion": "Cluj",
          "addressCountry": "RO"
        },
        "sameAs": [
          "https://www.facebook.com/share/1SW8t2tVeb/?mibextid=wwXIfr"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://city-dental-surgery.com/#website",
        "url": "https://city-dental-surgery.com",
        "name": "City Dental Surgery",
        "description": "Îngrijire dentară profesională în Cluj-Napoca cu tehnologie avansată și echipă de experți",
        "publisher": {
          "@id": "https://city-dental-surgery.com/#organization"
        },
        "inLanguage": "ro-RO"
      },
      {
        "@type": "WebPage",
        "@id": "https://city-dental-surgery.com/#webpage",
        "url": "https://city-dental-surgery.com",
        "name": "City Dental Surgery | Îngrijire Dentară Profesională în Cluj-Napoca",
        "isPartOf": {
          "@id": "https://city-dental-surgery.com/#website"
        },
        "about": {
          "@id": "https://city-dental-surgery.com/#organization"
        },
        "description": "Experimentează îngrijirea dentară excepțională la City Dental Surgery în Cluj-Napoca. Facilități moderne, profesioniști cu experiență și tratamente confortabile.",
        "inLanguage": "ro-RO"
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://city-dental-surgery.com/#medicalbusiness",
        "name": "City Dental Surgery",
        "image": "https://city-dental-surgery.com/images/logo.jpg",
        "telephone": "+40-771-376-927",
        "email": "inayab_mo@yahoo.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bună Ziua nr 82, C1",
          "addressLocality": "Cluj-Napoca",
          "addressRegion": "Cluj",
          "postalCode": "400000",
          "addressCountry": "RO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 46.7500501,
          "longitude": 23.6036560
        },
        "url": "https://city-dental-surgery.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "medicalSpecialty": [
          "Dentistry",
          "Oral Surgery",
          "Orthodontics",
          "Cosmetic Dentistry",
          "Dental Implants"
        ],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "120"
        }
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
