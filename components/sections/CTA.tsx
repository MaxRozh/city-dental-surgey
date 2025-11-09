'use client';

import { MessageSquare, Phone, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';

interface CTAProps {
  data: SanityDocument | null;
}

const defaultContactOptions = [
  {
    type: 'whatsapp',
    icon: 'MessageSquare',
    title: 'WhatsApp',
    description: 'Trimite-ne un mesaj pentru programări rapide și întrebări',
    contactValue: '+40 (771) 376 927',
    url: 'https://wa.me/40771376927',
  },
  {
    type: 'phone',
    icon: 'Phone',
    title: 'Sună Acum',
    description: 'Vorbește direct cu recepția noastră pentru programări urgente',
    contactValue: '+40 (771) 376 927',
    url: 'tel:+40771376927',
  },
];

const iconMap = {
  MessageSquare: MessageSquare,
  Phone: Phone,
  Send: Send,
};

export function CTA({ data }: CTAProps) {
  const contactOptions = data?.contactOptions || defaultContactOptions;

  return (
    <motion.section
      className='py-12 md:py-16 bg-gradient-to-r from-[#0080ff] to-[#00bf80] text-white'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            className='text-center mb-10'
            variants={fadeIn}
          >
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4'>
              {data?.title || 'Programează o Consultație Gratuită'}
            </h2>
            <p className='text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto'>
              {data?.description ||
                'Fă primul pas către zâmbetul perfect. Echipa noastră de specialiști te așteaptă pentru o evaluare completă.'}
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10'>
            {contactOptions.map((option: any, index: number) => {
              const IconComponent = iconMap[option.icon as keyof typeof iconMap] || MessageSquare;

              return (
                <motion.a
                  key={index}
                  href={option.url}
                  className='bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300 border border-white/20 hover:border-white/40 group'
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  target={option.type === 'whatsapp' ? '_blank' : undefined}
                  rel={option.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                >
                  <div className='h-14 w-14 md:h-16 md:w-16 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <IconComponent className='h-8 w-8' />
                  </div>
                  <h3 className='text-lg md:text-xl font-semibold mb-1 md:mb-2'>{option.title}</h3>
                  <p className='opacity-80 mb-3 md:mb-4 text-sm md:text-base'>{option.description}</p>
                  <span className='flex items-center text-sm font-medium'>
                    <span>{option.contactValue}</span>
                    <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
