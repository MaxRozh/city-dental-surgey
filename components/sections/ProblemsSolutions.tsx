'use client';

import { Bluetooth as Tooth, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';

interface ProblemsSolutionsProps {
  data: SanityDocument | null;
}

const defaultProblemsContent = `Dinți deteriorați sau lipsă
Zâmbet inestetic
Durere sau disconfort
Frică de dentist
Probleme de aliniere a dinților
Sângerări gingivale
Halena (respirație urât mirositoare)
Dificultăți la mestecat`;

const defaultSolutionsContent = `Restaurări dentare de înaltă calitate (coroane, punți, implanturi)
Servicii complete de estetică dentară (fațete, albire)
Tratamente rapide și eficiente pentru durere
Abordare blândă și prietenoasă pentru pacienții anxioși
Ortodontie modernă pentru aliniere perfectă
Tratamente parodontale pentru gingii sănătoase
Igienizări profesionale pentru respirație proaspătă
Reabilitare orală completă pentru funcționalitate optimă`;

export function ProblemsSolutions({ data }: ProblemsSolutionsProps) {
  return (
    <motion.section
      className='py-20 bg-gray-50'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
          <motion.div
            className='bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow'
            variants={fadeIn}
            whileHover={{ y: -5 }}
          >
            <div className='flex flex-col h-full'>
              <div className='mb-6 flex items-center'>
                <div className='h-12 w-12 bg-[#0080ff]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4'>
                  <Tooth className='h-6 w-6 text-[#0080ff]' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-[#0080ff]'>
                  {data?.problemsTitle || 'Your Problems'}
                </h3>
              </div>
              <p className='text-gray-600 whitespace-pre-line'>{data?.problemsContent || defaultProblemsContent}</p>
            </div>
          </motion.div>
          <motion.div
            className='bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow'
            variants={fadeIn}
            whileHover={{ y: -5 }}
          >
            <div className='flex flex-col h-full'>
              <div className='mb-6 flex items-center'>
                <div className='h-12 w-12 bg-[#00bf80]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4'>
                  <Smile className='h-6 w-6 text-[#00bf80]' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-[#00bf80]'>
                  {data?.solutionsTitle || 'Our Solutions'}
                </h3>
              </div>
              <p className='text-gray-600 whitespace-pre-line'>{data?.solutionsContent || defaultSolutionsContent}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
