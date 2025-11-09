'use client';

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { urlFor } from '@/lib/sanity/image';
import { fadeIn } from '@/lib/constants/animations';

interface HeroSectionProps {
  data: SanityDocument | null;
}

export function HeroSection({ data }: HeroSectionProps) {
  const imageUrl = data?.image ? urlFor(data.image)?.url() : null;

  return (
    <section className='relative bg-gradient-to-r from-[#0080ff]/10 to-[#00bf80]/10'>
      <div className='container mx-auto px-4 py-8 md:py-16'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center gap-2 mb-4 md:mb-6'>
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='h-8 w-8 overflow-hidden rounded-full'
              >
                <img
                  src='/images/logo.jpg'
                  alt='City Dental Surgery Logo'
                  className='w-full h-full object-cover'
                />
              </motion.div>
              <h1 className='text-2xl md:text-3xl font-bold'>{data?.companyName ?? 'City Dental Surgery'}</h1>
            </div>
            <h2 className='text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#0080ff] to-[#00bf80] bg-clip-text text-transparent'>
              {data?.title ?? 'Obține zâmbetul perfect într-o singură vizită'}
            </h2>
            <p className='text-lg md:text-xl text-gray-600 mb-3 md:mb-4'>
              {data?.description ??
                'Folosind tehnologia dentară digitală avansată, oferim tratamente în aceeași zi cu o rată de satisfacție de 98% din partea pacienților.'}
            </p>
            <motion.div
              className='flex items-center gap-3 md:gap-4 mb-6 md:mb-8'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className='flex -space-x-1 sm:-space-x-2'>
                {[1, 2, 3].map(i => (
                  <motion.img
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    src={`https://api.dicebear.com/7.x/micah/svg?seed=patient${i}&backgroundColor=0080ff,00bf80,f5a623`}
                    alt='Pacient Fericit'
                    className='w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white'
                  />
                ))}
              </div>
              <p className='text-xs sm:text-sm text-gray-600'>
                <span className='font-bold'>{data?.countOfPatients || '120'}+</span> pacienți mulțumiți anul acesta
              </p>
            </motion.div>
            <motion.div
              className='flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  className='w-full sm:w-auto bg-[#0080ff] hover:bg-[#0080ff]/90 mb-2 sm:mb-0'
                  onClick={() => window.open('https://wa.me/40771376927', '_blank')}
                >
                  {data?.buttonText ?? 'Contactează-ne'}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={imageUrl ?? '/images/first.JPG'}
              alt='Rezultat Zâmbet Frumos'
              className='rounded-lg shadow-2xl w-full h-auto'
            />
            <motion.div
              className='absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <div className='flex items-center gap-2'>
                <Star className='h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400' />
                <span className='text-sm md:text-base font-bold'>{data?.rating ?? '4.8'}/5</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
