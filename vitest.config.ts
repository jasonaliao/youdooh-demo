/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./test/setup-test-env.ts'],
        include: ['./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        watchExclude: [
            '.*\\/node_modules\\/.*',
            '.*\\/build\\/.*',
            '.*\\/postgres-data\\/.*',
        ],
        env: {
            SUPABASE_URL: 'https://xebdmmesichmthnjgxrn.supabase.co',
            SUPABASE_ANON_KEY:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYmRtbWVzaWNobXRobmpneHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NTgyMDYsImV4cCI6MjAwNDQzNDIwNn0.5P3lRuD1xzy8IlhtU1dlgnFbXFl-kr0Chn3tg3H-4Ys',
            MAPBOX_TOKEN:
                'pk.eyJ1IjoiamFzb25hbGlhbyIsImEiOiJjbGp1d2g3MDcxYnAwM2JuZ2dzNWo3djh4In0.Y6AARYEY4NdXx-PvycjPVw',
        },
    },
});
