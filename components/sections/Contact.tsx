'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { normalizePhoneNumber } from '@/lib/sanity/image';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';

interface ContactProps {
  data: SanityDocument | null;
}

const defaultWorkingHours = [
  'Luni - Vineri: 09:00 - 19:00',
  'Sâmbătă-Duminică: Urgențe la numărul de telefon afișat',
];

const defaultMapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.753102888468!2d23.60365607696606!3d46.75005017112406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490db5e542e849%3A0xbe0afe6ff1884101!2sc1%2C%20Strada%20Bun%C4%83%20Ziua%2082%2C%20Cluj-Napoca!5e0!3m2!1sro!2sro!4v1744477263261!5m2!1sro!2sro';

export function Contact({ data }: ContactProps) {
  const contactInfo = [
    {
      icon: <MapPin className='h-6 w-6 text-[#0080ff]' />,
      title: 'Adresă',
      content: data?.address || 'Bună Ziua nr 82, C1, Cluj-Napoca, Cluj',
    },
    {
      icon: <Clock className='h-6 w-6 text-[#00bf80]' />,
      title: 'Program',
      content: data?.workingHours || defaultWorkingHours,
    },
  ];

  return (
    <motion.section
      id='contact'
      className='py-20 bg-gray-50'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
          <motion.div variants={fadeIn}>
            <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'>{data?.title || 'Contactează-ne'}</h2>
            <div className='space-y-4 md:space-y-6'>
              <motion.div
                className='flex items-center gap-3 md:gap-4'
                variants={fadeIn}
                whileHover={{ x: 10 }}
              >
                <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0080ff]/10 flex items-center justify-center flex-shrink-0'>
                  <Phone className='h-6 w-6 text-[#0080ff]' />
                </div>
                <a
                  href={`tel:${data?.phone ? normalizePhoneNumber(data.phone) : '+40771376927'}`}
                  className='hover:underline'
                >
                  <h3 className='font-semibold'>Telefon</h3>
                  <p className='text-gray-600'>{data?.phone || '+40 (771) 376 927'}</p>
                </a>
              </motion.div>
              <motion.div
                className='flex items-center gap-3 md:gap-4'
                variants={fadeIn}
                whileHover={{ x: 10 }}
              >
                <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0080ff]/10 flex items-center justify-center flex-shrink-0'>
                  <Mail className='h-6 w-6 text-[#00bf80]' />
                </div>
                <a
                  href={`mailto:${data?.email || 'inayab_mo@yahoo.com'}`}
                  className='hover:underline'
                >
                  <h3 className='font-semibold'>Email</h3>
                  <p className='text-gray-600'>{data?.email || 'inayab_mo@yahoo.com'}</p>
                </a>
              </motion.div>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className='flex items-center gap-3 md:gap-4'
                  variants={fadeIn}
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-${index % 2 === 0 ? '[#0080ff]' : '[#00bf80]'}/10 flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='font-semibold'>{item.title}</h3>
                    {Array.isArray(item.content) ? (
                      item.content.map((line, i) => (
                        <p
                          key={i}
                          className='text-gray-600'
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className='text-gray-600'>{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className='h-[250px] md:h-[400px] rounded-lg overflow-hidden'
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src={data?.mapEmbedUrl || defaultMapUrl}
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
