'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';
import { fallbackServices } from '@/lib/constants/fallback-data';

interface ServicesProps {
  data: SanityDocument | null;
}

export function Services({ data }: ServicesProps) {
  const services = data?.servicesList || fallbackServices;

  return (
    <motion.section
      id='services'
      className='py-20 bg-white'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'
          variants={fadeIn}
        >
          {data?.title || 'Serviciile Noastre'}
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
          {services.map((service: any, index: number) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
            >
              <Card className='p-4 md:p-6 hover:shadow-lg transition-shadow h-full'>
                <h3 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>{service.title}</h3>
                <p className='text-gray-600 text-sm md:text-base mb-4'>{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
