import { defineField, defineType } from 'sanity';

export const servicesType = defineType({
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Service Description',
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
