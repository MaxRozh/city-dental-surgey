'use client';

import { Stethoscope, Clock3, ShieldCheck, BadgeEuro } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';

interface WhyChooseUsProps {
  data: SanityDocument | null;
}

const defaultFeatures = [
  {
    icon: 'Stethoscope',
    title: 'Tehnologie Avansată',
    description: 'Echipamente digitale de ultimă generație pentru diagnosticare și tratamente precise',
  },
  {
    icon: 'Clock3',
    title: 'Serviciu în Aceeași Zi',
    description: 'Tratamente complete într-o singură vizită, economisind timpul tău',
  },
  {
    icon: 'ShieldCheck',
    title: 'Echipă de Experți',
    description: '15+ ani de experiență în proceduri dentare avansate',
  },
  {
    icon: 'BadgeEuro',
    title: 'Plată Flexibilă',
    description:
      'Acceptăm numerar și transferuri bancare. De asemenea, lucrăm cu majoritatea companiilor de asigurări dentare.',
  },
];

const iconMap = {
  Stethoscope: Stethoscope,
  Clock3: Clock3,
  ShieldCheck: ShieldCheck,
  BadgeEuro: BadgeEuro,
};

const iconColors = {
  Stethoscope: 'text-[#0080ff]',
  Clock3: 'text-[#00bf80]',
  ShieldCheck: 'text-[#0080ff]',
  BadgeEuro: 'text-[#00bf80]',
};

export function WhyChooseUs({ data }: WhyChooseUsProps) {
  const features = data?.features || defaultFeatures;

  return (
    <motion.section
      id='about'
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
          <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'>
            {data?.title || 'De ce să alegi City Dental Surgery?'}
          </h2>
          <p className='text-gray-600'>
            {data?.description || 'Experimentează diferența cu abordarea noastră modernă în îngrijirea dentară'}
          </p>
        </motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          {features.map((item: any, index: number) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Stethoscope;
            const iconColor = iconColors[item.icon as keyof typeof iconColors] || 'text-[#0080ff]';

            return (
              <motion.div
                key={index}
                className='text-center p-4 md:p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow'
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className='h-14 w-14 md:h-16 md:w-16 bg-[#0080ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6'>
                  <IconComponent className={`h-8 w-8 ${iconColor}`} />
                </div>
                <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3'>{item.title}</h3>
                <p className='text-gray-600'>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
