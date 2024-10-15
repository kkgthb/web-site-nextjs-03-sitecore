import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        coverage: {
            exclude: [
                '**/*.test.ts',
                '**/*.test-d.ts',
                '**/*.test.tsx',
                '**/*.test-d.tsx',
            ],
        },
        environment: 'jsdom',
        include: [
            '**/*.test.ts',
            '**/*.test-d.ts',
            '**/*.test.tsx',
            '**/*.test-d.tsx',
        ],
    },
})