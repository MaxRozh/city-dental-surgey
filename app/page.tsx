'use client';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  Bluetooth as Tooth,
  Star,
  ShieldCheck,
  Smile,
  Clock3,
  BadgeEuro,
  Stethoscope,
  Plus,
  Minus,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Send,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PortableText, type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/lib/sanity';
import { useEffect, useState } from 'react';

const HERO_SECTION_QUERY = `*[
  _type == "heroSection"
][0]{_id, companyName, title, description, countOfPatients, rating, buttonText, image}`;

const WHY_CHOOSE_US_QUERY = `*[
  _type == "whyChooseUs"
][0]{_id, title, description, features[]}`;

const PROBLEMS_SOLUTIONS_QUERY = `*[
  _type == "problemsSolutions"
][0]{_id, title, subtitle, problemsTitle, problemsContent, solutionsTitle, solutionsContent}`;

const OUR_WORKS_QUERY = `*[
  _type == "ourWorks"
][0]{_id, title, subtitle, works[]{ title, description, beforeImage, afterImage, patientName, treatmentType }}`;

const SERVICES_QUERY = `*[
  _type == "services"
][0]{_id, title, servicesList[]}`;

const PRICE_LIST_QUERY = `*[
  _type == "priceList"
][0]{_id, title, subtitle, disclaimer, categories[]{ name, services[]{ name, description, price, discountedPrice, popular } }}`;

const FAQ_QUERY = `*[
  _type == "faq"
][0]{_id, title, faqItems[]}`;

const CONTACT_QUERY = `*[
  _type == "contact"
][0]{_id, title, phone, email, address, workingHours, mapEmbedUrl}`;

const CTA_QUERY = `*[
  _type == "cta"
][0]{_id, title, description, contactOptions[]}`;

const FOOTER_QUERY = `*[
  _type == "footer"
][0]{_id, companyName, logo, description, socialLinks[], services[], contactInfo, copyright}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;
const options = { next: { revalidate: 30 } };

function normalizePhoneNumber(phone: string): string {
  return '+' + phone.replace(/\D/g, '').replace(/^40/, '40');
}

export default function Home() {
  const [heroSection, setHeroSection] = useState<SanityDocument | null>(null);
  const [whyChooseUs, setWhyChooseUs] = useState<SanityDocument | null>(null);
  const [problemsSolutions, setProblemsSolutions] = useState<SanityDocument | null>(null);
  const [ourWorks, setOurWorks] = useState<SanityDocument | null>(null);
  const [services, setServices] = useState<SanityDocument | null>(null);
  const [priceList, setPriceList] = useState<SanityDocument | null>(null);
  const [faq, setFaq] = useState<SanityDocument | null>(null);
  const [contact, setContact] = useState<SanityDocument | null>(null);
  const [cta, setCta] = useState<SanityDocument | null>(null);
  const [footer, setFooter] = useState<SanityDocument | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  // Reset active category if it's out of bounds when priceList changes
  useEffect(() => {
    if (priceList?.categories && activeCategory >= priceList.categories.length) {
      setActiveCategory(0);
    }
  }, [priceList, activeCategory]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        const [
          heroData,
          whyChooseUsData,
          problemsSolutionsData,
          ourWorksData,
          servicesData,
          priceListData,
          faqData,
          contactData,
          ctaData,
          footerData,
        ] = await Promise.all([
          client.fetch<SanityDocument>(HERO_SECTION_QUERY, {}, options),
          client.fetch<SanityDocument>(WHY_CHOOSE_US_QUERY, {}, options),
          client.fetch<SanityDocument>(PROBLEMS_SOLUTIONS_QUERY, {}, options),
          client.fetch<SanityDocument>(OUR_WORKS_QUERY, {}, options),
          client.fetch<SanityDocument>(SERVICES_QUERY, {}, options),
          client.fetch<SanityDocument>(PRICE_LIST_QUERY, {}, options),
          client.fetch<SanityDocument>(FAQ_QUERY, {}, options),
          client.fetch<SanityDocument>(CONTACT_QUERY, {}, options),
          client.fetch<SanityDocument>(CTA_QUERY, {}, options),
          client.fetch<SanityDocument>(FOOTER_QUERY, {}, options),
        ]);

        setHeroSection(heroData);
        setWhyChooseUs(whyChooseUsData);
        setProblemsSolutions(problemsSolutionsData);
        setOurWorks(ourWorksData);
        setServices(servicesData);
        setPriceList(priceListData);
        setFaq(faqData);
        setContact(contactData);
        setCta(ctaData);
        setFooter(footerData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const heroSectionImageUrl = heroSection?.image ? urlFor(heroSection.image)?.url() : null;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className='min-h-screen overflow-x-hidden'>
      {/* Hero Section */}
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
                <h1 className='text-2xl md:text-3xl font-bold'>{heroSection?.companyName ?? 'City Dental Surgery'}</h1>
              </div>
              <h2 className='text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#0080ff] to-[#00bf80] bg-clip-text text-transparent'>
                {heroSection?.title ?? 'Obține zâmbetul perfect într-o singură vizită'}
              </h2>
              <p className='text-lg md:text-xl text-gray-600 mb-3 md:mb-4'>
                {heroSection?.description ??
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
                  <span className='font-bold'>{heroSection?.countOfPatients || '120'}+</span> pacienți mulțumiți anul
                  acesta
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
                  {/*<a href="mailto:inayab_mo@yahoo.com" className="hover:underline">*/}
                  {/*  <h3 className="font-semibold">Email</h3>*/}
                  {/*  <p className="text-gray-600">inayab_mo@yahoo.com</p>*/}
                  {/*</a>*/}
                  <Button
                    size='lg'
                    className='w-full sm:w-auto bg-[#0080ff] hover:bg-[#0080ff]/90 mb-2 sm:mb-0'
                    onClick={() => window.open('https://wa.me/40771376927', '_blank')}
                  >
                    {heroSection?.buttonText ?? 'Contactează-ne'}
                  </Button>
                </motion.div>
              </motion.div>
              {/*<motion.div*/}
              {/*  whileHover={{ scale: 1.05 }}*/}
              {/*  whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  <Button*/}
              {/*    size="lg"*/}
              {/*    variant="outline"*/}
              {/*    className="w-full sm:w-auto border-[#00bf80] text-[#00bf80] hover:bg-[#00bf80] hover:text-white"*/}
              {/*  >*/}
              {/*    Vezi Tratamentele*/}
              {/*  </Button>*/}
              {/*</motion.div>*/}
            </motion.div>
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={heroSectionImageUrl ?? '/images/first.JPG'}
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
                  <span className='text-sm md:text-base font-bold'>{heroSection?.rating ?? '4.8'}/5</span>
                  {/*<span className="text-xs md:text-sm text-gray-600">(200+ Recenzii)</span>*/}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        id="about"
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
              {whyChooseUs?.title || 'De ce să alegi City Dental Surgery?'}
            </h2>
            <p className='text-gray-600'>
              {whyChooseUs?.description ||
                'Experimentează diferența cu abordarea noastră modernă în îngrijirea dentară'}
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
            {(
              whyChooseUs?.features || [
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
              ]
            ).map((item: any, index: number) => (
              <motion.div
                key={index}
                className='text-center p-4 md:p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow'
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className='h-14 w-14 md:h-16 md:w-16 bg-[#0080ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6'>
                  {/* Dynamically render the icon based on the icon name */}
                  {item.icon === 'Stethoscope' && <Stethoscope className='h-8 w-8 text-[#0080ff]' />}
                  {item.icon === 'Clock3' && <Clock3 className='h-8 w-8 text-[#00bf80]' />}
                  {item.icon === 'ShieldCheck' && <ShieldCheck className='h-8 w-8 text-[#0080ff]' />}
                  {item.icon === 'BadgeEuro' && <BadgeEuro className='h-8 w-8 text-[#00bf80]' />}
                </div>
                <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3'>{item.title}</h3>
                <p className='text-gray-600'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Problems & Solutions Section */}
      <motion.section
        className='py-20 bg-gray-50'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
            {/* Problems Block */}
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
                    {problemsSolutions?.problemsTitle || 'Your Problems'}
                  </h3>
                </div>
                <p className='text-gray-600 whitespace-pre-line'>
                  {problemsSolutions?.problemsContent ||
                    'Dinți deteriorați sau lipsă\nZâmbet inestetic\nDurere sau disconfort\nFrică de dentist\nProbleme de aliniere a dinților\nSângerări gingivale\nHalena (respirație urât mirositoare)\nDificultăți la mestecat'}
                </p>
              </div>
            </motion.div>

            {/* Solutions Block */}
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
                    {problemsSolutions?.solutionsTitle || 'Our Solutions'}
                  </h3>
                </div>
                <p className='text-gray-600 whitespace-pre-line'>
                  {problemsSolutions?.solutionsContent ||
                    'Restaurări dentare de înaltă calitate (coroane, punți, implanturi)\nServicii complete de estetică dentară (fațete, albire)\nTratamente rapide și eficiente pentru durere\nAbordare blândă și prietenoasă pentru pacienții anxioși\nOrtodontie modernă pentru aliniere perfectă\nTratamente parodontale pentru gingii sănătoase\nIgienizări profesionale pentru respirație proaspătă\nReabilitare orală completă pentru funcționalitate optimă'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Works Section */}
      <motion.section
        id="works"
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
            <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'>{ourWorks?.title || 'Our Works'}</h2>
            {ourWorks?.subtitle && <p className='text-gray-600'>{ourWorks.subtitle}</p>}
          </motion.div>

          <div className='relative max-w-5xl mx-auto'>
            {/* Slider */}
            <div className='overflow-hidden rounded-xl shadow-lg'>
              <div className='relative'>
                {(
                  ourWorks?.works || [
                    {
                      title: 'Dental Implants',
                      description:
                        'Complete smile restoration with dental implants that look and function like natural teeth.',
                      treatmentType: 'Implant Dentistry',
                      patientName: 'Maria D.',
                      // Using placeholder images
                      beforeImage: null,
                      afterImage: null,
                    },
                    {
                      title: 'Smile Makeover',
                      description:
                        'Comprehensive smile transformation using porcelain veneers and professional whitening.',
                      treatmentType: 'Cosmetic Dentistry',
                      patientName: 'Alexandru P.',
                      // Using placeholder images
                      beforeImage: null,
                      afterImage: null,
                    },
                  ]
                ).map((work: any, index: number) => (
                  <motion.div
                    key={index}
                    className={`${index === currentSlide ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {/* Before Image */}
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

                      {/* After Image */}
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

                    {/* Work Details */}
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

            {/* Navigation Buttons */}
            <div className='flex justify-between mt-6'>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full bg-white shadow-md hover:bg-gray-100'
                onClick={() => setCurrentSlide(prev => (prev === 0 ? (ourWorks?.works?.length || 2) - 1 : prev - 1))}
                aria-label='Previous slide'
              >
                <ChevronLeft className='h-5 w-5' />
              </Button>

              {/* Dots */}
              <div className='flex items-center gap-2'>
                {Array.from({ length: ourWorks?.works?.length || 2 }).map((_, index) => (
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
                onClick={() => setCurrentSlide(prev => (prev === (ourWorks?.works?.length || 2) - 1 ? 0 : prev + 1))}
                aria-label='Next slide'
              >
                <ChevronRight className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
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
            {services?.title || 'Serviciile Noastre'}
          </motion.h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
            {(services?.servicesList || fallbackServices).map((service: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <Card className='p-4 md:p-6 hover:shadow-lg transition-shadow h-full'>
                  <h3 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>{service.title}</h3>
                  <p className='text-gray-600 text-sm md:text-base mb-4'>{service.description}</p>
                  {/*<Button variant="link" className="text-[#0080ff] p-0">*/}
                  {/*  Află Mai Multe <ChevronRight className="h-4 w-4 ml-1" />*/}
                  {/*</Button>*/}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Price List Section */}
      <motion.section
        id="pricing"
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
            <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'>{priceList?.title || 'Lista de Prețuri'}</h2>
            {priceList?.subtitle && <p className='text-gray-600'>{priceList.subtitle}</p>}
          </motion.div>

          <div className='max-w-5xl mx-auto'>
            {/* Category Tabs */}
            <div className='flex flex-wrap justify-center mb-8 gap-2'>
              {/* Use Array.from to ensure we're working with a proper array */}
              {Array.from(
                priceList?.categories || [
                  { name: 'Stomatologie Generală', services: [] },
                  { name: 'Stomatologie Cosmetică', services: [] },
                  { name: 'Implanturi Dentare', services: [] },
                ]
              ).map((category: any, index: number) => (
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

            {/* Price List Table */}
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
                    {/* Access services from the active category */}
                    {
                      // Get the active category and its services safely
                      (() => {
                        const categories = Array.from(priceList?.categories || []);
                        const activeCat = categories[activeCategory] as { name: string; services?: any[] };
                        return (
                          activeCat?.services || [
                            // Default services for first category
                            { name: 'Consultație inițială', price: 100, popular: true },
                            { name: 'Detartraj și periaj profesional', price: 250 },
                            { name: 'Obturație simplă', price: 300 },
                            { name: 'Obturație complexă', price: 450 },
                            { name: 'Tratament canal monoradicular', price: 500 },
                            { name: 'Tratament canal pluriradicular', price: 800 },
                            { name: 'Extracție simplă', price: 300 },
                            { name: 'Extracție complexă', price: 500 },
                          ]
                        );
                      })().map((service: any, index: number) => (
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
                                {service.description && (
                                  <p className='mt-1 text-sm text-gray-500'>{service.description}</p>
                                )}
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
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Disclaimer */}
            {priceList?.disclaimer && (
              <motion.p
                className='mt-6 text-sm text-gray-500 text-center'
                variants={fadeIn}
              >
                {priceList.disclaimer}
              </motion.p>
            )}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
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
              {faq?.title || 'Întrebări Frecvente'}
            </h2>
            <Accordion
              type='single'
              collapsible
              className='space-y-4'
            >
              {(faq?.faqItems || fallbackFaqs).map((faqItem: any, index: number) => (
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

      {/* Contact Section */}
      <motion.section
        id="contact"
        className='py-20 bg-gray-50'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            <motion.div variants={fadeIn}>
              <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'>{contact?.title || 'Contactează-ne'}</h2>
              <div className='space-y-4 md:space-y-6'>
                <motion.div
                  className='flex items-center gap-3 md:gap-4'
                  variants={fadeIn}
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0080ff]/10 flex items-center justify-center flex-shrink-0`}
                  >
                    <Phone className='h-6 w-6 text-[#0080ff]' />
                  </div>
                  <a
                    href={`tel:${contact?.phone ? normalizePhoneNumber(contact?.phone) : '+40771376927'}`}
                    className='hover:underline'
                  >
                    <h3 className='font-semibold'>Telefon</h3>
                    <p className='text-gray-600'>{contact?.phone || '+40 (771) 376 927'}</p>
                  </a>
                </motion.div>
                <motion.div
                  className='flex items-center gap-3 md:gap-4'
                  variants={fadeIn}
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0080ff]/10 flex items-center justify-center flex-shrink-0`}
                  >
                    <Mail className='h-6 w-6 text-[#00bf80]' />
                  </div>
                  <a
                    href={`mailto:${contact?.email || 'inayab_mo@yahoo.com'}`}
                    className='hover:underline'
                  >
                    <h3 className='font-semibold'>Email</h3>
                    <p className='text-gray-600'>{contact?.email || 'inayab_mo@yahoo.com'}</p>
                  </a>
                </motion.div>
                {[
                  {
                    icon: <MapPin className='h-6 w-6 text-[#0080ff]' />,
                    title: 'Adresă',
                    content: contact?.address || 'Bună Ziua nr 82, C1, Cluj-Napoca, Cluj',
                  },
                  {
                    icon: <Clock className='h-6 w-6 text-[#00bf80]' />,
                    title: 'Program',
                    content: contact?.workingHours || [
                      'Luni - Vineri: 09:00 - 19:00',
                      'Sâmbătă-Duminică: Urgențe la numărul de telefon afișat',
                    ],
                  },
                ].map((item, index) => (
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
                src={
                  contact?.mapEmbedUrl ||
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.753102888468!2d23.60365607696606!3d46.75005017112406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490db5e542e849%3A0xbe0afe6ff1884101!2sc1%2C%20Strada%20Bun%C4%83%20Ziua%2082%2C%20Cluj-Napoca!5e0!3m2!1sro!2sro!4v1744477263261!5m2!1sro!2sro'
                }
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

      {/* CTA Section */}
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
                {cta?.title || 'Programează o Consultație Gratuită'}
              </h2>
              <p className='text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto'>
                {cta?.description ||
                  'Fă primul pas către zâmbetul perfect. Echipa noastră de specialiști te așteaptă pentru o evaluare completă.'}
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10'>
              {(
                cta?.contactOptions || [
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
                ]
              ).map((option: any, index: number) => (
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
                    {option.icon === 'MessageSquare' && <MessageSquare className='h-8 w-8' />}
                    {option.icon === 'Phone' && <Phone className='h-8 w-8' />}
                    {option.icon === 'Send' && <Send className='h-8 w-8' />}
                  </div>
                  <h3 className='text-lg md:text-xl font-semibold mb-1 md:mb-2'>{option.title}</h3>
                  <p className='opacity-80 mb-3 md:mb-4 text-sm md:text-base'>{option.description}</p>
                  <span className='flex items-center text-sm font-medium'>
                    <span>{option.contactValue}</span>
                    <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </span>
                </motion.a>
              ))}
            </div>

            {/*<motion.div*/}
            {/*  className="text-center"*/}
            {/*  variants={fadeIn}*/}
            {/*>*/}
            {/*  <motion.div*/}
            {/*    whileHover={{ scale: 1.05 }}*/}
            {/*    whileTap={{ scale: 0.98 }}*/}
            {/*  >*/}
            {/*    <Button*/}
            {/*      size="lg"*/}
            {/*      className="bg-white text-[#0080ff] hover:bg-white/90 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full group w-full sm:w-auto"*/}
            {/*    >*/}
            {/*      <span>Programează Online</span>*/}
            {/*      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />*/}
            {/*    </Button>*/}
            {/*  </motion.div>*/}
            {/*</motion.div>*/}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className='bg-gray-900 text-white pt-16 pb-8'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12'>
            {/* About */}
            <motion.div variants={fadeIn}>
              <div className='flex items-center gap-2 mb-4 md:mb-6'>
                <div className='h-8 w-8 overflow-hidden rounded-full'>
                  <img
                    src={footer?.logo ? urlFor(footer.logo)?.url() : '/images/logo.jpg'}
                    alt={`${footer?.companyName || 'City Dental Surgery'} Logo`}
                    className='w-full h-full object-cover'
                  />
                </div>
                <h3 className='text-xl font-bold'>{footer?.companyName || 'City Dental Surgery'}</h3>
              </div>
              <p className='text-gray-400 mb-4 md:mb-6 text-sm md:text-base'>
                {footer?.description ||
                  'Oferim servicii stomatologice de înaltă calitate în Cluj-Napoca, folosind tehnologie de ultimă generație și tehnici moderne de tratament.'}
              </p>
              <div className='flex gap-4'>
                {(
                  footer?.socialLinks || [
                    { platform: 'facebook', url: 'https://www.facebook.com/share/1SW8t2tVeb/?mibextid=wwXIfr' },
                  ]
                ).map((social: any, index: number) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className='hover:text-[#0080ff] transition-colors'
                    whileHover={{ scale: 1.2 }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {social.platform === 'facebook' && <Facebook className='h-6 w-6' />}
                    {social.platform === 'instagram' && <Instagram className='h-6 w-6' />}
                    {social.platform === 'linkedin' && <Linkedin className='h-6 w-6' />}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeIn}>
              <h3 className='text-lg font-semibold mb-4 md:mb-6'>Servicii</h3>
              <ul className='space-y-2 md:space-y-3 text-sm md:text-base'>
                {(
                  footer?.services || [
                    'Stomatologie Generală',
                    'Implanturi Dentare',
                    'Ortodonție',
                    'Estetică Dentară',
                    'Chirurgie Orală',
                  ]
                ).map((service: any, index: number) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                  >
                    <span className='text-gray-400 hover:text-white transition-colors'>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            {/*<motion.div variants={fadeIn}>*/}
            {/*  <h3 className="text-lg font-semibold mb-4 md:mb-6">Link-uri Rapide</h3>*/}
            {/*  <ul className="space-y-2 md:space-y-3 text-sm md:text-base">*/}
            {/*    {[*/}
            {/*      "Despre Noi",*/}
            {/*      "Echipa Noastră",*/}
            {/*      "Prețuri",*/}
            {/*      "Blog",*/}
            {/*      "Contact"*/}
            {/*    ].map((link, index) => (*/}
            {/*      <motion.li*/}
            {/*        key={index}*/}
            {/*        whileHover={{ x: 10 }}*/}
            {/*      >*/}
            {/*        <a href="#" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*          {link}*/}
            {/*        </a>*/}
            {/*      </motion.li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</motion.div>*/}

            {/* Contact */}
            <motion.div variants={fadeIn}>
              <h3 className='text-lg font-semibold mb-4 md:mb-6'>Contact</h3>
              <ul className='space-y-3 md:space-y-4 text-sm md:text-base'>
                <motion.li
                  className='flex items-start gap-3'
                  whileHover={{ x: 10 }}
                >
                  <MapPin className='h-5 w-5 text-[#0080ff] mt-1' />
                  <span className='text-gray-400'>
                    {footer?.contactInfo?.address || 'Bună Ziua nr 82, C1, Cluj-Napoca, Cluj'}
                  </span>
                </motion.li>
                <motion.li
                  className='flex items-center gap-3'
                  whileHover={{ x: 10 }}
                >
                  <Phone className='h-5 w-5 text-[#0080ff]' />
                  <span className='text-gray-400'>{footer?.contactInfo?.phone || '+40 (771) 376 927'}</span>
                </motion.li>
                <motion.li
                  className='flex items-center gap-3'
                  whileHover={{ x: 10 }}
                >
                  <Mail className='h-5 w-5 text-[#0080ff]' />
                  <span className='text-gray-400'>{footer?.contactInfo?.email || 'inayab_mo@yahoo.com'}</span>
                </motion.li>
                {(
                  footer?.contactInfo?.workingHours || [
                    'Luni - Vineri 09:00-19:00',
                    'Sâmbătă - Duminică: Urgențe la numărul de telefon afișat',
                  ]
                ).map((hours: string, index: number) => (
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

          {/* Bottom Bar */}
          <motion.div
            className='pt-8 border-t border-gray-800'
            variants={fadeIn}
          >
            <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4'>
              <p className='text-gray-400 text-sm'>
                {footer?.copyright
                  ? footer.copyright.replace('{year}', new Date().getFullYear().toString())
                  : `© ${new Date().getFullYear()} City Dental Surgery. Toate drepturile rezervate.`}
              </p>
              {/*<div className="flex flex-wrap justify-center gap-4 md:gap-6">*/}
              {/*  <motion.a*/}
              {/*    href="#"*/}
              {/*    className="text-gray-400 hover:text-white text-sm transition-colors"*/}
              {/*    whileHover={{ scale: 1.1 }}*/}
              {/*  >*/}
              {/*    Politica de Confidențialitate*/}
              {/*  </motion.a>*/}
              {/*  <motion.a*/}
              {/*    href="#"*/}
              {/*    className="text-gray-400 hover:text-white text-sm transition-colors"*/}
              {/*    whileHover={{ scale: 1.1 }}*/}
              {/*  >*/}
              {/*    Termeni și Condiții*/}
              {/*  </motion.a>*/}
              {/*  <motion.a*/}
              {/*    href="#"*/}
              {/*    className="text-gray-400 hover:text-white text-sm transition-colors"*/}
              {/*    whileHover={{ scale: 1.1 }}*/}
              {/*  >*/}
              {/*    Cookies*/}
              {/*  </motion.a>*/}
              {/*</div>*/}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}

// Fallback data in case Sanity data is not loaded yet
const fallbackServices = [
  {
    title: 'Stomatologie Generală',
    description:
      'Îngrijire dentară completă, inclusiv controale, curățări și tratamente preventive pentru menținerea sănătății orale.',
  },
  {
    title: 'Stomatologie Cosmetică',
    description:
      'Transformă-ți zâmbetul cu gama noastră de servicii cosmetice, inclusiv albire, fațete și remodelări ale zâmbetului.',
  },
  {
    title: 'Implanturi Dentare',
    description:
      'Restaurează dinții lipsă cu implanturi permanente, cu aspect natural, folosind cea mai recentă tehnologie dentară.',
  },
];

const fallbackFaqs = [
  {
    question: 'Care sunt metodele de plată acceptate?',
    answer:
      'Acceptăm plăți în numerar, card bancar, și oferim opțiuni de plată în rate prin partenerii noștri bancari. De asemenea, lucrăm cu majoritatea companiilor de asigurări dentare.',
  },
  {
    question: 'Cât durează o programare tipică?',
    answer:
      'Durata unei programări variază în funcție de tratament. O consultație durează aproximativ 30 de minute, în timp ce procedurile mai complexe pot dura între 1-2 ore.',
  },
  {
    question: 'Este dureros tratamentul dentar?',
    answer:
      'Folosim tehnici moderne de anestezie și sedare pentru a asigura confortul pacienților noștri. Majoritatea pacienților raportează disconfort minim sau deloc în timpul procedurilor.',
  },
  {
    question: 'Cum pot programa o consultație?',
    answer:
      'Puteți programa o consultație prin telefon, email sau folosind formularul de pe site-ul nostru. Oferim și consultații de urgență în aceeași zi pentru cazurile acute.',
  },
];
