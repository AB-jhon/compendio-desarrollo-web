import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Agregamos "-plugin"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})