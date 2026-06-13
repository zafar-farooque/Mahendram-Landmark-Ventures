// sanity.config.js — Sanity Studio configuration
// Run `npx sanity@latest init` and point your studio at this config.
// This file is used by the Sanity Studio (separate from the React app).

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import post    from './sanity/schemas/post';
import project from './sanity/schemas/project';

export default defineConfig({
  name:    'mahendram-landmark',
  title:   'Mahendram Landmark Ventures — CMS',

  projectId: 'REPLACE',        // ← paste your Sanity project ID here
  dataset:   'production',

  plugins: [
    structureTool(),
    visionTool(),              // GROQ query playground inside Studio
  ],

  schema: {
    types: [post, project],
  },
});
