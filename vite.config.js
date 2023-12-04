import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [sveltekit(), purgeCss()],
    server: {
        proxy: {
            '/api': 'http://localhost:5174',
        }
    
    }
});
//# sourceMappingURL=vite.config.js.map

// import { purgeCss } from 'vite-plugin-tailwind-purgecss';
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';
// import express from 'express'
// import bodyParser from 'body-parser'
// const port = 5174
// let app 

// export default defineConfig({
//     plugins: [sveltekit(), purgeCss()], 
//     server: {
//         proxy: {
//             '/api': `http://localhost:${port}`,
//         }
//     },
//     configureServer: () => {
//         app = express()
//         app.use(bodyParser.json())
//         app.use(bodyParser.urlencoded({ extended: true }))

//         app.listen(port, (req, res) => {
//             res.json({ message: 'hello for the API' })
//         })
//     }
// });