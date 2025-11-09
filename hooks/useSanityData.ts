import { useEffect, useState } from 'react';
import type { SanityDocument } from 'next-sanity';
import { client } from '@/lib/sanity';
import {
  HERO_SECTION_QUERY,
  WHY_CHOOSE_US_QUERY,
  PROBLEMS_SOLUTIONS_QUERY,
  OUR_WORKS_QUERY,
  SERVICES_QUERY,
  PRICE_LIST_QUERY,
  FAQ_QUERY,
  CONTACT_QUERY,
  CTA_QUERY,
  FOOTER_QUERY,
} from '@/lib/constants/sanity-queries';

const options = { next: { revalidate: 30 } };

export interface SanityData {
  heroSection: SanityDocument | null;
  whyChooseUs: SanityDocument | null;
  problemsSolutions: SanityDocument | null;
  ourWorks: SanityDocument | null;
  services: SanityDocument | null;
  priceList: SanityDocument | null;
  faq: SanityDocument | null;
  contact: SanityDocument | null;
  cta: SanityDocument | null;
  footer: SanityDocument | null;
}

export function useSanityData() {
  const [data, setData] = useState<SanityData>({
    heroSection: null,
    whyChooseUs: null,
    problemsSolutions: null,
    ourWorks: null,
    services: null,
    priceList: null,
    faq: null,
    contact: null,
    cta: null,
    footer: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        const [
          heroData,
          whyChooseUsData,
          problemsSolutionsData,
          ourWorksData,
          servicesData,
          priceListData,
          faqData,
          contactData,
          ctaData,
          footerData,
        ] = await Promise.all([
          client.fetch<SanityDocument>(HERO_SECTION_QUERY, {}, options),
          client.fetch<SanityDocument>(WHY_CHOOSE_US_QUERY, {}, options),
          client.fetch<SanityDocument>(PROBLEMS_SOLUTIONS_QUERY, {}, options),
          client.fetch<SanityDocument>(OUR_WORKS_QUERY, {}, options),
          client.fetch<SanityDocument>(SERVICES_QUERY, {}, options),
          client.fetch<SanityDocument>(PRICE_LIST_QUERY, {}, options),
          client.fetch<SanityDocument>(FAQ_QUERY, {}, options),
          client.fetch<SanityDocument>(CONTACT_QUERY, {}, options),
          client.fetch<SanityDocument>(CTA_QUERY, {}, options),
          client.fetch<SanityDocument>(FOOTER_QUERY, {}, options),
        ]);

        setData({
          heroSection: heroData,
          whyChooseUs: whyChooseUsData,
          problemsSolutions: problemsSolutionsData,
          ourWorks: ourWorksData,
          services: servicesData,
          priceList: priceListData,
          faq: faqData,
          contact: contactData,
          cta: ctaData,
          footer: footerData,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return { data, isLoading };
}
