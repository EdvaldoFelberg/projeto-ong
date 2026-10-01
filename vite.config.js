import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    root: '.',

    // Caminho base utilizado no GitHub Pages
    base: '/projeto-ong/',

    build: {
        outDir: 'dist',
        emptyOutDir: true,

        rollupOptions: {
            input: {
                index: fileURLToPath(
                    new URL('./html/index.html', import.meta.url)
                ),
                projetos: fileURLToPath(
                    new URL('./html/projetos.html', import.meta.url)
                ),
                cadastro: fileURLToPath(
                    new URL('./html/cadastro.html', import.meta.url)
                )
            }
        }
    }
});