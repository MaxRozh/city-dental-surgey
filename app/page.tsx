'use client';

import { useSanityData } from '@/hooks/useSanityData';
import {
  HeroSection,
  WhyChooseUs,
  ProblemsSolutions,
  OurWorks,
  Services,
  PriceList,
  FAQ,
  Contact,
  CTA,
  Footer,
} from '@/components/sections';

export default function Home() {
  const { data, isLoading } = useSanityData();

  if (isLoading) {
    return (
      <main className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0080ff] border-r-transparent'></div>
          <p className='mt-4 text-gray-600'>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen overflow-x-hidden'>
      <HeroSection data={data.heroSection} />
      <WhyChooseUs data={data.whyChooseUs} />
      <ProblemsSolutions data={data.problemsSolutions} />
      <OurWorks data={data.ourWorks} />
      <Services data={data.services} />
      <PriceList data={data.priceList} />
      <FAQ data={data.faq} />
      <Contact data={data.contact} />
      <CTA data={data.cta} />
      <Footer data={data.footer} />
    </main>
  );
}
