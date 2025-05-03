import { defineField, defineType } from 'sanity';

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero section',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'countOfPatients',
      type: 'number',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
});
