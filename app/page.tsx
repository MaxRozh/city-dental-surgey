"use client";

import { Phone, Mail, MapPin, Clock, ChevronRight, Bluetooth as Tooth, Star, ShieldCheck, Smile, Clock3, BadgeEuro, Stethoscope, Plus, Minus, MessageCircle, Facebook, Instagram, Linkedin, MessageSquare, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0080ff]/10 to-[#00bf80]/10">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="h-8 w-8 overflow-hidden rounded-full"
                >
                  <img
                    src="/images/logo.jpg"
                    alt="City Dental Surgery Logo"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h1 className="text-2xl md:text-3xl font-bold">City Dental Surgery</h1>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#0080ff] to-[#00bf80] bg-clip-text text-transparent">
                Obține zâmbetul perfect într-o singură vizită
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4">
                Folosind tehnologia dentară digitală avansată, oferim tratamente în aceeași zi cu o rată de satisfacție de 98% din partea pacienților.
              </p>
              <motion.div
                className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex -space-x-1 sm:-space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.img
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      src={`https://api.dicebear.com/7.x/micah/svg?seed=patient${i}&backgroundColor=0080ff,00bf80,f5a623`}
                      alt="Pacient Fericit"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  <span className="font-bold">120+</span> pacienți mulțumiți anul acesta
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
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
                    size="lg"
                    className="w-full sm:w-auto bg-[#0080ff] hover:bg-[#0080ff]/90 mb-2 sm:mb-0"
                    onClick={() => window.open("https://wa.me/40771376927", "_blank")}
                  >
                    Programează Consultație Gratuită
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
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/first.JPG"
                alt="Rezultat Zâmbet Frumos"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <motion.div
                className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm md:text-base font-bold">4.8/5</span>
                  {/*<span className="text-xs md:text-sm text-gray-600">(200+ Recenzii)</span>*/}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-10 md:mb-16"
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">De ce să alegi City Dental Surgery?</h2>
            <p className="text-gray-600">Experimentează diferența cu abordarea noastră modernă în îngrijirea dentară</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Stethoscope className="h-8 w-8 text-[#0080ff]" />,
                title: "Tehnologie Avansată",
                description: "Echipamente digitale de ultimă generație pentru diagnosticare și tratamente precise"
              },
              {
                icon: <Clock3 className="h-8 w-8 text-[#00bf80]" />,
                title: "Serviciu în Aceeași Zi",
                description: "Tratamente complete într-o singură vizită, economisind timpul tău"
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-[#0080ff]" />,
                title: "Echipă de Experți",
                description: "15+ ani de experiență în proceduri dentare avansate"
              },
              {
                icon: <BadgeEuro className="h-8 w-8 text-[#00bf80]" />,
                title: "Plată Flexibilă",
                description: "Acceptăm numerar și transferuri bancare. De asemenea, lucrăm cu majoritatea companiilor de asigurări dentare."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4 md:p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-14 w-14 md:h-16 md:w-16 bg-[#0080ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
            variants={fadeIn}
          >
            Serviciile Noastre
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">{service.description}</p>
                  {/*<Button variant="link" className="text-[#0080ff] p-0">*/}
                  {/*  Află Mai Multe <ChevronRight className="h-4 w-4 ml-1" />*/}
                  {/*</Button>*/}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Întrebări Frecvente</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  custom={index}
                >
                  <AccordionItem value={`item-${index}`} className="bg-gray-50 rounded-lg px-3 md:px-6">
                    <AccordionTrigger className="text-left py-4 hover:no-underline">
                      <span className="text-base md:text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm md:text-base pb-4">
                      {faq.answer}
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
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contactează-ne</h2>
              <div className="space-y-4 md:space-y-6">
                <motion.div
                    className="flex items-center gap-3 md:gap-4"
                    variants={fadeIn}
                    whileHover={{ x: 10 }}
                >
                  <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0080ff]/10 flex items-center justify-center flex-shrink-0`}>
                    <Phone className="h-6 w-6 text-[#0080ff]" />
                  </div>
                  <a href="tel:+40771376927" className="hover:underline">
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-gray-600">+40 (771) 376 927</p>
                  </a>
                </motion.div>
                <motion.div
                    className="flex items-center gap-3 md:gap-4"
                    variants={fadeIn}
                    whileHover={{ x: 10 }}
                >
                  <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0080ff]/10 flex items-center justify-center flex-shrink-0`}>
                    <Mail className="h-6 w-6 text-[#00bf80]" />
                  </div>
                  <a href="mailto:inayab_mo@yahoo.com" className="hover:underline">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">inayab_mo@yahoo.com</p>
                  </a>
                </motion.div>
                {[
                  { icon: <MapPin className="h-6 w-6 text-[#0080ff]" />, title: "Adresă", content: "Bună Ziua nr 82, C1, Cluj-Napoca, Cluj" },
                  { icon: <Clock className="h-6 w-6 text-[#00bf80]" />, title: "Program", content: ["Luni - Vineri: 09:00 - 19:00", "Sâmbătă-Duminică: Urgențe la numărul de telefon afișat"] }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 md:gap-4"
                    variants={fadeIn}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-${index % 2 === 0 ? '[#0080ff]' : '[#00bf80]'}/10 flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <p key={i} className="text-gray-600">{line}</p>
                        ))
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="h-[250px] md:h-[400px] rounded-lg overflow-hidden"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.753102888468!2d23.60365607696606!3d46.75005017112406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490db5e542e849%3A0xbe0afe6ff1884101!2sc1%2C%20Strada%20Bun%C4%83%20Ziua%2082%2C%20Cluj-Napoca!5e0!3m2!1sro!2sro!4v1744477263261!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-12 md:py-16 bg-gradient-to-r from-[#0080ff] to-[#00bf80] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-10"
              variants={fadeIn}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Programează o Consultație Gratuită</h2>
              <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto">Fă primul pas către zâmbetul perfect. Echipa noastră de specialiști te așteaptă pentru o evaluare completă.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/40771376927"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300 border border-white/20 hover:border-white/40 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-14 w-14 md:h-16 md:w-16 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">WhatsApp</h3>
                <p className="opacity-80 mb-3 md:mb-4 text-sm md:text-base">Trimite-ne un mesaj pentru programări rapide și întrebări</p>
                <span className="flex items-center text-sm font-medium">
                  <span>+40 (771) 376 927</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              {/* Telegram */}
              {/*<motion.a*/}
              {/*  href="https://t.me/citydentalsurgery"*/}
              {/*  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300 border border-white/20 hover:border-white/40 group"*/}
              {/*  variants={fadeIn}*/}
              {/*  whileHover={{ y: -5 }}*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*>*/}
              {/*  <div className="h-14 w-14 md:h-16 md:w-16 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">*/}
              {/*    <Send className="h-8 w-8" />*/}
              {/*  </div>*/}
              {/*  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Telegram</h3>*/}
              {/*  <p className="opacity-80 mb-3 md:mb-4 text-sm md:text-base">Contactează-ne pe Telegram pentru asistență și sfaturi</p>*/}
              {/*  <span className="flex items-center text-sm font-medium">*/}
              {/*    <span>@citydentalsurgery</span>*/}
              {/*    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />*/}
              {/*  </span>*/}
              {/*</motion.a>*/}

              {/* Direct Call */}
              <motion.a
                href="tel:+40123456789"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-all duration-300 border border-white/20 hover:border-white/40 group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="h-14 w-14 md:h-16 md:w-16 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Sună Acum</h3>
                <p className="opacity-80 mb-3 md:mb-4 text-sm md:text-base">Vorbește direct cu recepția noastră pentru programări urgente</p>
                <a href="tel:+40771376927" className="flex items-center text-sm font-medium">
                  <span>+40 (771) 376 927</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.a>
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
        className="bg-gray-900 text-white pt-16 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* About */}
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="h-8 w-8 overflow-hidden rounded-full">
                  <img
                    src="/images/logo.jpg"
                    alt="City Dental Surgery Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">City Dental Surgery</h3>
              </div>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                Oferim servicii stomatologice de înaltă calitate în Cluj-Napoca, folosind tehnologie de ultimă generație și tehnici moderne de tratament.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.facebook.com/share/1SW8t2tVeb/?mibextid=wwXIfr"
                  className="hover:text-[#0080ff] transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook className="h-6 w-6" />
                </motion.a>
                {/*<motion.a*/}
                {/*  href="#"*/}
                {/*  className="hover:text-[#0080ff] transition-colors"*/}
                {/*  whileHover={{ scale: 1.2 }}*/}
                {/*>*/}
                {/*  <Instagram className="h-6 w-6" />*/}
                {/*</motion.a>*/}
                {/*<motion.a*/}
                {/*  href="#"*/}
                {/*  className="hover:text-[#0080ff] transition-colors"*/}
                {/*  whileHover={{ scale: 1.2 }}*/}
                {/*>*/}
                {/*  <Linkedin className="h-6 w-6" />*/}
                {/*</motion.a>*/}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeIn}>
              <h3 className="text-lg font-semibold mb-4 md:mb-6">Servicii</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                {[
                  "Stomatologie Generală",
                  "Implanturi Dentare",
                  "Ortodonție",
                  "Estetică Dentară",
                  "Chirurgie Orală"
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </span>
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
              <h3 className="text-lg font-semibold mb-4 md:mb-6">Contact</h3>
              <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                <motion.li
                  className="flex items-start gap-3"
                  whileHover={{ x: 10 }}
                >
                  <MapPin className="h-5 w-5 text-[#0080ff] mt-1" />
                  <span className="text-gray-400">Bună Ziua nr 82, C1, Cluj-Napoca, Cluj</span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Phone className="h-5 w-5 text-[#0080ff]" />
                  <span className="text-gray-400">+40 (771) 376 927</span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="h-5 w-5 text-[#0080ff]" />
                  <span className="text-gray-400">inayab_mo@yahoo.com</span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Clock className="h-5 w-5 text-[#0080ff]" />
                  <span className="text-gray-400">Luni - Vineri 09:00-19:00</span>
                </motion.li>
                <motion.li
                    className="flex items-center gap-3"
                    whileHover={{ x: 10 }}
                >
                  <span className="text-gray-400">Sâmbătă - Duminică: Urgențe la numărul de telefon afișat</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-gray-800"
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} City Dental Surgery. Toate drepturile rezervate.
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

const services = [
  {
    title: "Stomatologie Generală",
    description: "Îngrijire dentară completă, inclusiv controale, curățări și tratamente preventive pentru menținerea sănătății orale.",
  },
  {
    title: "Stomatologie Cosmetică",
    description: "Transformă-ți zâmbetul cu gama noastră de servicii cosmetice, inclusiv albire, fațete și remodelări ale zâmbetului.",
  },
  {
    title: "Implanturi Dentare",
    description: "Restaurează dinții lipsă cu implanturi permanente, cu aspect natural, folosind cea mai recentă tehnologie dentară.",
  },
];

const faqs = [
  {
    question: "Care sunt metodele de plată acceptate?",
    answer: "Acceptăm plăți în numerar, card bancar, și oferim opțiuni de plată în rate prin partenerii noștri bancari. De asemenea, lucrăm cu majoritatea companiilor de asigurări dentare."
  },
  {
    question: "Cât durează o programare tipică?",
    answer: "Durata unei programări variază în funcție de tratament. O consultație durează aproximativ 30 de minute, în timp ce procedurile mai complexe pot dura între 1-2 ore."
  },
  {
    question: "Este dureros tratamentul dentar?",
    answer: "Folosim tehnici moderne de anestezie și sedare pentru a asigura confortul pacienților noștri. Majoritatea pacienților raportează disconfort minim sau deloc în timpul procedurilor."
  },
  {
    question: "Cum pot programa o consultație?",
    answer: "Puteți programa o consultație prin telefon, email sau folosind formularul de pe site-ul nostru. Oferim și consultații de urgență în aceeași zi pentru cazurile acute."
  }
];