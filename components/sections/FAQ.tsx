'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { fadeIn } from '@/lib/constants/animations';
import { fallbackFaqs } from '@/lib/constants/fallback-data';

interface FAQProps {
  data: SanityDocument | null;
}

export function FAQ({ data }: FAQProps) {
  const faqItems = data?.faqItems || fallbackFaqs;

  return (
    <motion.section
      id='faq'
      className='py-20 bg-white'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='container mx-auto px-4'>
        <motion.div
          className='max-w-3xl mx-auto'
          variants={fadeIn}
        >
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'>
            {data?.title || 'Întrebări Frecvente'}
          </h2>
          <Accordion
            type='single'
            collapsible
            className='space-y-4'
          >
            {faqItems.map((faqItem: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className='bg-gray-50 rounded-lg px-3 md:px-6'
                >
                  <AccordionTrigger className='text-left py-4 hover:no-underline'>
                    <span className='text-base md:text-lg font-semibold'>{faqItem.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600 text-sm md:text-base pb-4'>
                    {faqItem.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
