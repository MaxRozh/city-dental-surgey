import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                ],
              },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: rule => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services List',
      type: 'array',
      // @ts-ignore
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      // @ts-ignore
      fields: [
        defineField({
          name: 'address',
          title: 'Address',
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
          name: 'workingHours',
          title: 'Working Hours',
          type: 'array',
          of: [{ type: 'string' }],
          validation: rule => rule.required(),
        }),
      ],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      validation: rule => rule.required(),
    }),
  ],
});
