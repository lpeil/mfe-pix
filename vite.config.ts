import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return ({
    plugins: [
      react(),
      federation({
        name: 'pix',
        filename: 'remoteEntry.js',
        remotes: {
          core: process.env.VITE_CORE_URL,
        },
        exposes: {
          './App': './src/App',
        },
        shared: ['react', 'react-dom', 'styled-components', 'react-router-dom']
      })
    ],
    build: {
      target: 'esnext'
    }
  })
})
