import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), vanillaExtractPlugin(), dts({insertTypesEntry: true}), tsconfigPaths(),], build: {
        lib: {
            entry: 'src/index.ts',
            name: 'LeviathanUI',
            formats: ['es', 'cjs'],
            fileName: (format) => `leviathan-ui.${format}.js`,
        }, rollupOptions: {
            external: ['react', 'react-dom'], output: {
                globals: {
                    react: 'React', 'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
