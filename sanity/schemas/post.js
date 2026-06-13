// sanity/schemas/post.js — Knowledge Center / Blog schema

const POST_CATEGORIES = [
  { title: 'Construction',         value: 'construction'        },
  { title: 'Infrastructure',       value: 'infrastructure'      },
  { title: 'Warehousing',          value: 'warehousing'         },
  { title: 'Facility Management',  value: 'facility-management' },
  { title: 'PEB',                  value: 'peb'                 },
  { title: 'MEP',                  value: 'mep'                 },
  { title: 'Fire Protection',      value: 'fire-protection'     },
  { title: 'Interiors',            value: 'interiors'           },
  { title: 'Manufacturing',        value: 'manufacturing'       },
  { title: 'Government Projects',  value: 'government-projects' },
];

export default {
  name:  'post',
  title: 'Knowledge Center Article',
  type:  'document',

  fields: [
    {
      name:       'title',
      title:      'Article Title',
      type:       'string',
      validation: (Rule) => Rule.required().min(10).max(120),
    },
    {
      name:  'slug',
      title: 'URL Slug',
      type:  'slug',
      options: { source: 'title', maxLength: 100 },
      validation: (Rule) => Rule.required(),
    },
    {
      name:    'category',
      title:   'Category',
      type:    'string',
      options: {
        list:   POST_CATEGORIES,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name:        'publishedAt',
      title:       'Published Date',
      type:        'datetime',
      initialValue: () => new Date().toISOString(),
      validation:  (Rule) => Rule.required(),
    },
    {
      name:        'excerpt',
      title:       'Excerpt / Meta Description',
      type:        'text',
      rows:        3,
      description: 'Short summary shown on cards and used for SEO meta description.',
      validation:  (Rule) => Rule.required().max(200),
    },
    {
      name:  'coverImage',
      title: 'Cover Image',
      type:  'image',
      options: { hotspot: true },
      fields: [
        {
          name:  'alt',
          title: 'Alt Text',
          type:  'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name:    'body',
      title:   'Article Body',
      type:    'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt',     title: 'Alt Text',   type: 'string' },
            { name: 'caption', title: 'Caption',    type: 'string' },
          ],
        },
      ],
    },
    {
      name:        'author',
      title:       'Author Name',
      type:        'string',
      initialValue: 'Mahendram Landmark Editorial Team',
    },
    {
      name:  'readTime',
      title: 'Estimated Read Time (minutes)',
      type:  'number',
    },
    {
      name:  'featured',
      title: 'Featured Article?',
      type:  'boolean',
      description: 'Pin this article to the top of the Knowledge Center.',
      initialValue: false,
    },
  ],

  preview: {
    select: {
      title:    'title',
      subtitle: 'category',
      media:    'coverImage',
    },
  },

  orderings: [
    {
      title: 'Published Date (Newest First)',
      name:  'publishedAtDesc',
      by:    [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
};
