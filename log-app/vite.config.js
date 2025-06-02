import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: 'http://localhost:5002/',
    plugins: [
      react(),
      federation({
        name: env.VITE_APP_NAME || 'log',
        filename: 'remoteEntry.js',
        exposes: {
          './LogPage': './src/components/pages/LogPage.jsx'
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
        getPublicPath: 'http://localhost:5002/',
      }),
      viteCompression()
    ],
    server: {
      port: 5002,
      origin: 'http://localhost:5002',
    },
    build: {
      target: 'chrome89',
      minify: 'esbuild',
      cssCodeSplit: true,
    },
  }
})
