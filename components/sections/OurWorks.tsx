'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { urlFor } from '@/lib/sanity/image';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';

interface OurWorksProps {
  data: SanityDocument | null;
}

const defaultWorks = [
  {
    title: 'Dental Implants',
    description: 'Complete smile restoration with dental implants that look and function like natural teeth.',
    treatmentType: 'Implant Dentistry',
    patientName: 'Maria D.',
    beforeImage: null,
    afterImage: null,
  },
  {
    title: 'Smile Makeover',
    description: 'Comprehensive smile transformation using porcelain veneers and professional whitening.',
    treatmentType: 'Cosmetic Dentistry',
    patientName: 'Alexandru P.',
    beforeImage: null,
    afterImage: null,
  },
];

export function OurWorks({ data }: OurWorksProps) {
  const works = data?.works || defaultWorks;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === works.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      id='works'
      className='py-20 bg-white'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className='container mx-auto px-4'>
        <motion.div
          className='max-w-3xl mx-auto text-center mb-10 md:mb-16'
          variants={fadeIn}
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'>{data?.title || 'Our Works'}</h2>
          {data?.subtitle && <p className='text-gray-600'>{data.subtitle}</p>}
        </motion.div>
        <div className='relative max-w-5xl mx-auto'>
          <div className='overflow-hidden rounded-xl shadow-lg'>
            <div className='relative'>
              {works.map((work: any, index: number) => (
                <motion.div
                  key={index}
                  className={`${index === currentSlide ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='relative'>
                      <div className='aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100'>
                        {work.beforeImage ? (
                          <img
                            src={urlFor(work.beforeImage)?.width(600).height(450).url() || ''}
                            alt={`Before - ${work.title}`}
                            className='w-full h-full object-cover'
                          />
                        ) : (
                          <div className='w-full h-full flex items-center justify-center bg-gray-200'>
                            <p className='text-gray-500 font-medium'>Before Image</p>
                          </div>
                        )}
                      </div>
                      <div className='absolute top-4 left-4 bg-[#0080ff] text-white px-3 py-1 rounded-full text-sm font-medium'>
                        Before
                      </div>
                    </div>
                    <div className='relative'>
                      <div className='aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100'>
                        {work.afterImage ? (
                          <img
                            src={urlFor(work.afterImage)?.width(600).height(450).url() || ''}
                            alt={`After - ${work.title}`}
                            className='w-full h-full object-cover'
                          />
                        ) : (
                          <div className='w-full h-full flex items-center justify-center bg-gray-200'>
                            <p className='text-gray-500 font-medium'>After Image</p>
                          </div>
                        )}
                      </div>
                      <div className='absolute top-4 left-4 bg-[#00bf80] text-white px-3 py-1 rounded-full text-sm font-medium'>
                        After
                      </div>
                    </div>
                  </div>
                  <div className='mt-6 p-6 bg-gray-50 rounded-lg'>
                    <h3 className='text-xl md:text-2xl font-bold mb-2'>{work.title}</h3>
                    <p className='text-gray-600 mb-4'>{work.description}</p>
                    <div className='flex flex-wrap gap-4'>
                      <div className='bg-[#0080ff]/10 px-3 py-1 rounded-full'>
                        <span className='text-[#0080ff] font-medium'>{work.treatmentType}</span>
                      </div>
                      {work.patientName && (
                        <div className='bg-[#00bf80]/10 px-3 py-1 rounded-full'>
                          <span className='text-[#00bf80] font-medium'>Patient: {work.patientName}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className='flex justify-between mt-6'>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full bg-white shadow-md hover:bg-gray-100'
              onClick={handlePrevSlide}
              aria-label='Previous slide'
            >
              <ChevronLeft className='h-5 w-5' />
            </Button>
            <div className='flex items-center gap-2'>
              {Array.from({ length: works.length }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${index === currentSlide ? 'w-6 bg-[#0080ff]' : 'w-2.5 bg-gray-300'}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full bg-white shadow-md hover:bg-gray-100'
              onClick={handleNextSlide}
              aria-label='Next slide'
            >
              <ChevronRight className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
