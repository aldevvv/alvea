import tailwindcss from '@tailwindcss/postcss';

export default {
  plugins: [
    // Force Tailwind to load the project config (fixes custom theme not being picked up)
    tailwindcss({
      config: './tailwind.config.js',
    }),
  ],
};