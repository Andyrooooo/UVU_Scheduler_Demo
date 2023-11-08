import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [sveltekit(), purgeCss()]
});
//# sourceMappingURL=vite.config.js.map