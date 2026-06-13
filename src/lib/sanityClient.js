// src/lib/sanityClient.js
// Configured Sanity client — used throughout the app to fetch CMS data.
// Replace projectId with your actual Sanity project ID before deploying.

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'REPLACE',       // ← from sanity.io/manage
  dataset:   'production',
  apiVersion: '2024-01-01',   // GROQ API version — use today's date or later
  useCdn:    true,            // true = fast cached reads (good for production)
                              // false = always fresh (use for preview / draft mode)
});

/* ─────────────────────────────────────────
   Reusable GROQ helpers
───────────────────────────────────────── */

/** Build a Sanity image URL from a raw asset reference */
export function imageUrl(source) {
  if (!source?.asset?._ref) return null;
  const ref   = source.asset._ref;                  // e.g. image-abc123-800x600-jpg
  const parts = ref.replace('image-', '').split('-');
  const ext   = parts.pop();                        // jpg / png / webp
  const id    = parts.join('-');                    // abc123-800x600
  return `https://cdn.sanity.io/images/${client.config().projectId}/${client.config().dataset}/${id}.${ext}`;
}

/* ─────────────────────────────────────────
   Posts (Knowledge Center)
───────────────────────────────────────── */

/** Fetch all published posts, newest first */
export async function getAllPosts() {
  return client.fetch(/* groq */ `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      readTime,
      featured,
      author,
      coverImage
    }
  `);
}

/** Fetch a single post by slug (includes full body) */
export async function getPostBySlug(slug) {
  return client.fetch(
    /* groq */ `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      readTime,
      author,
      coverImage,
      body
    }
  `,
    { slug }
  );
}

/* ─────────────────────────────────────────
   Projects
───────────────────────────────────────── */

/** Fetch all projects, newest year first */
export async function getAllProjects() {
  return client.fetch(/* groq */ `
    *[_type == "project"] | order(year desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      location,
      year,
      clientName,
      projectValue,
      scopeOfWork,
      featured,
      coverImage
    }
  `);
}

/** Fetch a single project by slug (includes full detail) */
export async function getProjectBySlug(slug) {
  return client.fetch(
    /* groq */ `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      location,
      year,
      clientName,
      projectValue,
      scopeOfWork,
      challenges,
      solutions,
      keyAchievements,
      featured,
      coverImage,
      gallery
    }
  `,
    { slug }
  );
}
