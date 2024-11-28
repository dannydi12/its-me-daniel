import type { Config } from "@react-router/dev/config";

import fs from 'fs';
import path from 'path';

function getMDFilenames() {
  const blogDir = path.join(process.cwd(), 'blog');

  try {
    // Read the contents of the blog directory
    const files = fs.readdirSync(blogDir);

    // Filter for .md files
    const mdFiles = files.filter(file => path.extname(file).toLowerCase() === '.md');

    // Return the array of .md filenames
    return mdFiles;
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // async function for dependencies like a CMS
  async prerender({ getStaticPaths }) {
    const mdFilenames = getMDFilenames();
    const paths = mdFilenames.map(filename => `/blog/${filename.replace('.md', '')}`);

    return ['/', '/blog'].concat(paths)
  },
} satisfies Config;
