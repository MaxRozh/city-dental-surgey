import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: rule => rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'array',
      // @ts-ignore
      of: [{ type: 'string' }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      validation: rule => rule.required(),
    }),
  ],
});
