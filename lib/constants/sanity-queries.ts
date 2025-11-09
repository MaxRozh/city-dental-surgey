export const HERO_SECTION_QUERY = `*[
  _type == "heroSection"
][0]{_id, companyName, title, description, countOfPatients, rating, buttonText, image}`;

export const WHY_CHOOSE_US_QUERY = `*[
  _type == "whyChooseUs"
][0]{_id, title, description, features[]}`;

export const PROBLEMS_SOLUTIONS_QUERY = `*[
  _type == "problemsSolutions"
][0]{_id, title, subtitle, problemsTitle, problemsContent, solutionsTitle, solutionsContent}`;

export const OUR_WORKS_QUERY = `*[
  _type == "ourWorks"
][0]{_id, title, subtitle, works[]{ title, description, beforeImage, afterImage, patientName, treatmentType }}`;

export const SERVICES_QUERY = `*[
  _type == "services"
][0]{_id, title, servicesList[]}`;

export const PRICE_LIST_QUERY = `*[
  _type == "priceList"
][0]{_id, title, subtitle, disclaimer, categories[]{ name, services[]{ name, description, price, discountedPrice, popular } }}`;

export const FAQ_QUERY = `*[
  _type == "faq"
][0]{_id, title, faqItems[]}`;

export const CONTACT_QUERY = `*[
  _type == "contact"
][0]{_id, title, phone, email, address, workingHours, mapEmbedUrl}`;

export const CTA_QUERY = `*[
  _type == "cta"
][0]{_id, title, description, contactOptions[]}`;

export const FOOTER_QUERY = `*[
  _type == "footer"
][0]{_id, companyName, logo, description, socialLinks[], services[], contactInfo, copyright}`;
