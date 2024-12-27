import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/darioarcas/Send-Mails-App',
})