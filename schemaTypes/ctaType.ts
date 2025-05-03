import { defineField, defineType } from 'sanity';

export const ctaType = defineType({
  name: 'cta',
  title: 'CTA Section',
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
      name: 'contactOptions',
      title: 'Contact Options',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Contact Type',
              type: 'string',
              options: {
                list: [
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'Telegram', value: 'telegram' },
                ],
              },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              description: 'Name of the Lucide icon (e.g., "MessageSquare", "Phone")',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Option Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Option Description',
              type: 'text',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'contactValue',
              title: 'Contact Value',
              description: 'Phone number, username, etc.',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              description: 'Link for this contact option',
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
