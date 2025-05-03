import { defineField, defineType } from 'sanity';

export const priceListType = defineType({
  name: 'priceList',
  title: 'Price List Section',
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
      name: 'categories',
      title: 'Service Categories',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Category Name',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'services',
              title: 'Services',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Service Name',
                      type: 'string',
                      validation: rule => rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Service Description',
                      type: 'text',
                    }),
                    defineField({
                      name: 'price',
                      title: 'Price (in RON)',
                      type: 'number',
                      validation: rule => rule.required().min(0),
                    }),
                    defineField({
                      name: 'discountedPrice',
                      title: 'Discounted Price (in RON, optional)',
                      type: 'number',
                    }),
                    defineField({
                      name: 'popular',
                      title: 'Mark as Popular',
                      type: 'boolean',
                      initialValue: false,
                    }),
                  ],
                },
              ],
              validation: rule => rule.required().min(1),
            }),
          ],
        },
      ],
      validation: rule => rule.required().min(1),
    }),
    defineField({
      name: 'disclaimer',
      title: 'Price Disclaimer',
      type: 'text',
      description: 'Optional disclaimer text about prices',
    }),
  ],
});
