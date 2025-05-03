import { defineField, defineType } from 'sanity';

export const whyChooseUsType = defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name',
              description: 'Name of the Lucide icon (e.g., "Stethoscope", "Clock3")',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              validation: rule => rule.required(),
            }),
          ],
        },
      ],
      validation: rule => rule.required().min(1),
    }),
  ],
});
