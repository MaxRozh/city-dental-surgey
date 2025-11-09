'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';

interface PriceListProps {
  data: SanityDocument | null;
}

const defaultCategories = [
  {
    name: 'Stomatologie Generală',
    services: [
      { name: 'Consultație inițială', price: 100, popular: true },
      { name: 'Detartraj și periaj profesional', price: 250 },
      { name: 'Obturație simplă', price: 300 },
      { name: 'Obturație complexă', price: 450 },
      { name: 'Tratament canal monoradicular', price: 500 },
      { name: 'Tratament canal pluriradicular', price: 800 },
      { name: 'Extracție simplă', price: 300 },
      { name: 'Extracție complexă', price: 500 },
    ],
  },
  { name: 'Stomatologie Cosmetică', services: [] },
  { name: 'Implanturi Dentare', services: [] },
];

export function PriceList({ data }: PriceListProps) {
  const categories = data?.categories || defaultCategories;
  const [activeCategory, setActiveCategory] = useState(0);

  // Reset active category if it's out of bounds when data changes
  useEffect(() => {
    if (categories && activeCategory >= categories.length) {
      setActiveCategory(0);
    }
  }, [categories, activeCategory]);

  const currentServices = categories[activeCategory]?.services || defaultCategories[0].services;

  return (
    <motion.section
      id='pricing'
      className='py-20 bg-gray-50'
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
          <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'>{data?.title || 'Lista de Prețuri'}</h2>
          {data?.subtitle && <p className='text-gray-600'>{data.subtitle}</p>}
        </motion.div>
        <div className='max-w-5xl mx-auto'>
          <div className='flex flex-wrap justify-center mb-8 gap-2'>
            {categories.map((category: any, index: number) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-[#0080ff] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(index)}
                variants={fadeIn}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          <motion.div
            className='bg-white rounded-xl shadow-md overflow-hidden'
            variants={fadeIn}
          >
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gray-50 border-b'>
                  <tr>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Serviciu</th>
                    <th className='px-6 py-4 text-right text-sm font-semibold text-gray-700'>Preț</th>
                  </tr>
                </thead>
                <tbody className='divide-y'>
                  {currentServices.map((service: any, index: number) => (
                    <tr
                      key={index}
                      className={`${service.popular ? 'bg-[#0080ff]/5' : 'hover:bg-gray-50'} transition-colors`}
                    >
                      <td className='px-6 py-4'>
                        <div className='flex items-start'>
                          <div>
                            <div className='flex items-center'>
                              <span className='font-medium text-gray-900'>{service.name}</span>
                              {service.popular && (
                                <span className='ml-2 px-2 py-0.5 text-xs bg-[#0080ff] text-white rounded-full'>
                                  Popular
                                </span>
                              )}
                            </div>
                            {service.description && <p className='mt-1 text-sm text-gray-500'>{service.description}</p>}
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-right'>
                        {service.discountedPrice ? (
                          <div>
                            <span className='text-gray-400 line-through mr-2'>{service.price} RON</span>
                            <span className='font-semibold text-[#00bf80]'>{service.discountedPrice} RON</span>
                          </div>
                        ) : (
                          <span className='font-semibold'>{service.price} RON</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          {data?.disclaimer && (
            <motion.p
              className='mt-6 text-sm text-gray-500 text-center'
              variants={fadeIn}
            >
              {data.disclaimer}
            </motion.p>
          )}
        </div>
      </div>
    </motion.section>
  );
}
