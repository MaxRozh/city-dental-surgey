import { defineField, defineType } from 'sanity';

export const ourWorksType = defineType({
  name: 'ourWorks',
  title: 'Our Works Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Work Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Work Description',
              type: 'text',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'beforeImage',
              title: 'Before Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'afterImage',
              title: 'After Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'patientName',
              title: 'Patient Name (optional)',
              type: 'string',
            }),
            defineField({
              name: 'treatmentType',
              title: 'Treatment Type',
              type: 'string',
              validation: rule => rule.required(),
            }),
          ],
        },
      ],
      validation: rule => rule.required().min(1),
    }),
  ],
});
