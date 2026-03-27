// @ts-check
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';

const BASE = '/Portfolio-Blog';

/** Rehype plugin: prefix absolute /paths in markdown HTML with base */
function rehypeBaseUrl() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      for (const attr of ['src', 'href']) {
        const val = node.properties?.[attr];
        if (typeof val === 'string' && val.startsWith('/') && !val.startsWith('//')) {
          node.properties[attr] = BASE + val;
        }
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://k-3431.github.io',
  base: BASE,
  markdown: {
    rehypePlugins: [rehypeBaseUrl],
  },
});
