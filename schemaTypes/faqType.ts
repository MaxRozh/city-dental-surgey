import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
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
