// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    `@/assets/css/tailwind.css`,
  ],
  tailwindcss: {
    cssPath: `~/assets/css/tailwind.css`,
    configPath: `./tailwind.config.ts`,
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  runtimeConfig: {
    public: {
      apiURL: 'http://api.ehrlich-exam-backend.test',
      apiBase: '/api',
      githubLoginRedirect: '/auth/redirect',
      authType: 'bearer',
    }
  },

})
