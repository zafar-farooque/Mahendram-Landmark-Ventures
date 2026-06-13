// sanity/schemas/project.js — Projects portfolio schema

const PROJECT_CATEGORIES = [
  { title: 'Infrastructure',      value: 'infrastructure'      },
  { title: 'Construction',        value: 'construction'        },
  { title: 'Industrial',          value: 'industrial'          },
  { title: 'Warehousing',         value: 'warehousing'         },
  { title: 'PEB',                 value: 'peb'                 },
  { title: 'MEP',                 value: 'mep'                 },
  { title: 'Fire Protection',     value: 'fire-protection'     },
  { title: 'Interiors',           value: 'interiors'           },
  { title: 'Facility Management', value: 'facility-management' },
];

export default {
  name:  'project',
  title: 'Project',
  type:  'document',

  fields: [
    {
      name:       'title',
      title:      'Project Title',
      type:       'string',
      validation: (Rule) => Rule.required().max(100),
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
      title:   'Project Category',
      type:    'string',
      options: {
        list:   PROJECT_CATEGORIES,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name:       'location',
      title:      'Project Location',
      type:       'string',
      placeholder: 'e.g. Mumbai, Maharashtra',
      validation: (Rule) => Rule.required(),
    },
    {
      name:    'year',
      title:   'Completion Year',
      type:    'number',
      validation: (Rule) => Rule.required().min(2000).max(2050),
    },
    {
      name:  'clientName',
      title: 'Client / Developer Name',
      type:  'string',
    },
    {
      name:  'projectValue',
      title: 'Project Value (optional)',
      type:  'string',
      description: 'e.g. ₹50 Cr, ₹120 Cr',
    },
    {
      name:       'scopeOfWork',
      title:      'Scope of Work',
      type:       'text',
      rows:       4,
      validation: (Rule) => Rule.required(),
    },
    {
      name:  'challenges',
      title: 'Challenges',
      type:  'text',
      rows:  3,
    },
    {
      name:  'solutions',
      title: 'Solutions Delivered',
      type:  'text',
      rows:  3,
    },
    {
      name:  'keyAchievements',
      title: 'Key Achievements',
      type:  'array',
      of:    [{ type: 'string' }],
      description: 'Bullet points — add one achievement per item.',
    },
    {
      name:    'coverImage',
      title:   'Cover Image',
      type:    'image',
      options: { hotspot: true },
      fields:  [
        {
          name:       'alt',
          title:      'Alt Text',
          type:       'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name:    'gallery',
      title:   'Project Gallery',
      type:    'array',
      of: [
        {
          type:    'image',
          options: { hotspot: true },
          fields:  [
            { name: 'alt',     title: 'Alt Text', type: 'string' },
            { name: 'caption', title: 'Caption',  type: 'string' },
          ],
        },
      ],
    },
    {
      name:     'featured',
      title:    'Featured Project?',
      type:     'boolean',
      description: 'Show this project prominently on the homepage.',
      initialValue: false,
    },
  ],

  preview: {
    select: {
      title:    'title',
      subtitle: 'location',
      media:    'coverImage',
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: `📍 ${subtitle}`, media };
    },
  },

  orderings: [
    {
      title: 'Year (Newest First)',
      name:  'yearDesc',
      by:    [{ field: 'year', direction: 'desc' }],
    },
  ],
};
