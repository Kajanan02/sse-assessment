import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '') // loads .env / .env.production

    return {
        base: 'http://localhost:5001/',
        plugins: [
            react(),
            federation({
                name: env.VITE_APP_NAME || 'dashboard',
                filename: 'remoteEntry.js',
                exposes: {
                    './DashboardPage': './src/components/pages/DashboardPage.jsx',
                    './DashboardActivityPage': './src/components/pages/DashboardActivityPage.jsx'
                },
                remotes: {},
                shared: {
                    react: { requiredVersion: "19.1.0", singleton: true },
                    'react-dom': { requiredVersion: '19.1.0', singleton: true },
                    '@chakra-ui/react': { singleton: true },
                    '@emotion/react': { singleton: true },
                    'react-redux': { singleton: true },
                },
                dev: env.VITE_DEV === 'true',
                getPublicPath: 'http://localhost:5001/',
            }),
            viteCompression(),
        ],
        server: {
            port: 5001,
            origin: 'http://localhost:5001',
        },
        build: {
            target: 'chrome89',
            minify: 'esbuild',
            cssCodeSplit: true,
        },
    }
})
