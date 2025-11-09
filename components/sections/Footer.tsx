'use client';

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SanityDocument } from 'next-sanity';
import { urlFor } from '@/lib/sanity/image';
import { fadeIn, staggerChildren } from '@/lib/constants/animations';

interface FooterProps {
  data: SanityDocument | null;
}

const defaultSocialLinks = [{ platform: 'facebook', url: 'https://www.facebook.com/share/1SW8t2tVeb/?mibextid=wwXIfr' }];

const defaultServices = [
  'Stomatologie Generală',
  'Implanturi Dentare',
  'Ortodonție',
  'Estetică Dentară',
  'Chirurgie Orală',
];

const defaultWorkingHours = [
  'Luni - Vineri 09:00-19:00',
  'Sâmbătă - Duminică: Urgențe la numărul de telefon afișat',
];

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export function Footer({ data }: FooterProps) {
  const socialLinks = data?.socialLinks || defaultSocialLinks;
  const services = data?.services || defaultServices;
  const workingHours = data?.contactInfo?.workingHours || defaultWorkingHours;

  return (
    <motion.footer
      className='bg-gray-900 text-white pt-16 pb-8'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12'>
          <motion.div variants={fadeIn}>
            <div className='flex items-center gap-2 mb-4 md:mb-6'>
              <div className='h-8 w-8 overflow-hidden rounded-full'>
                <img
                  src={data?.logo ? urlFor(data.logo)?.url() : '/images/logo.jpg'}
                  alt={`${data?.companyName || 'City Dental Surgery'} Logo`}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-bold'>{data?.companyName || 'City Dental Surgery'}</h3>
            </div>
            <p className='text-gray-400 mb-4 md:mb-6 text-sm md:text-base'>
              {data?.description ||
                'Oferim servicii stomatologice de înaltă calitate în Cluj-Napoca, folosind tehnologie de ultimă generație și tehnici moderne de tratament.'}
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social: any, index: number) => {
                const IconComponent = socialIconMap[social.platform as keyof typeof socialIconMap] || Facebook;

                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    className='hover:text-[#0080ff] transition-colors'
                    whileHover={{ scale: 1.2 }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <IconComponent className='h-6 w-6' />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <h3 className='text-lg font-semibold mb-4 md:mb-6'>Servicii</h3>
            <ul className='space-y-2 md:space-y-3 text-sm md:text-base'>
              {services.map((service: any, index: number) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                >
                  <span className='text-gray-400 hover:text-white transition-colors'>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeIn}>
            <h3 className='text-lg font-semibold mb-4 md:mb-6'>Contact</h3>
            <ul className='space-y-3 md:space-y-4 text-sm md:text-base'>
              <motion.li
                className='flex items-start gap-3'
                whileHover={{ x: 10 }}
              >
                <MapPin className='h-5 w-5 text-[#0080ff] mt-1' />
                <span className='text-gray-400'>
                  {data?.contactInfo?.address || 'Bună Ziua nr 82, C1, Cluj-Napoca, Cluj'}
                </span>
              </motion.li>
              <motion.li
                className='flex items-center gap-3'
                whileHover={{ x: 10 }}
              >
                <Phone className='h-5 w-5 text-[#0080ff]' />
                <span className='text-gray-400'>{data?.contactInfo?.phone || '+40 (771) 376 927'}</span>
              </motion.li>
              <motion.li
                className='flex items-center gap-3'
                whileHover={{ x: 10 }}
              >
                <Mail className='h-5 w-5 text-[#0080ff]' />
                <span className='text-gray-400'>{data?.contactInfo?.email || 'inayab_mo@yahoo.com'}</span>
              </motion.li>
              {workingHours.map((hours: string, index: number) => (
                <motion.li
                  key={index}
                  className='flex items-center gap-3'
                  whileHover={{ x: 10 }}
                >
                  {index === 0 && <Clock className='h-5 w-5 text-[#0080ff]' />}
                  <span className='text-gray-400'>{hours}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          className='pt-8 border-t border-gray-800'
          variants={fadeIn}
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4'>
            <p className='text-gray-400 text-sm'>
              {data?.copyright
                ? data.copyright.replace('{year}', new Date().getFullYear().toString())
                : `© ${new Date().getFullYear()} City Dental Surgery. Toate drepturile rezervate.`}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
