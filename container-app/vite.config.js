import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from '@module-federation/vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [
            react(),
            federation({
                name: env.VITE_APP_NAME || 'container',
                remotes: {
                    dashboard: {
                        type: 'module',
                        name: 'dashboard',
                        entry: env.VITE_REMOTE_DASHBOARD,
                        shareScope: 'default',
                    },
                    log: {
                        type: 'module',
                        name: 'log',
                        entry: env.VITE_REMOTE_LOG,
                        shareScope: 'default',
                    },
                },
                exposes: {},
                filename: 'remoteEntry.js',
                shared: {
                    react: {requiredVersion: '19.1.0', singleton: true},
                    'react-dom': {requiredVersion: '19.1.0', singleton: true},
                    '@chakra-ui/react': {singleton: true},
                    '@emotion/react': {singleton: true},
                    'react-redux': {singleton: true},
                },
                dev: env.VITE_DEV === 'true',
            }),
            viteCompression(), // Optional: gzip compression plugin
        ],
        server: {
            port: 5000,
            origin: 'http://localhost:5000',
        },
        build: {
            target: 'chrome89',
            minify: 'esbuild',
            cssCodeSplit: true,
        },
    }
})
