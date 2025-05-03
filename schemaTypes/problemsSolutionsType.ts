import { defineField, defineType } from 'sanity';

export const problemsSolutionsType = defineType({
  name: 'problemsSolutions',
  title: 'Problems & Solutions Section',
  type: 'document',
  fields: [
    defineField({
      name: 'problemsTitle',
      title: 'Problems Block Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'problemsContent',
      title: 'Problems Content',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'solutionsTitle',
      title: 'Solutions Block Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'solutionsContent',
      title: 'Solutions Content',
      type: 'text',
      validation: rule => rule.required(),
    }),
  ],
});
