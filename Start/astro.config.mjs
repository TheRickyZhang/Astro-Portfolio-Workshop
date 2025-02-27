// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src')
            }
        }
    }
});
