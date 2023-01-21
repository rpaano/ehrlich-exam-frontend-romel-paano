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
      authType: 'Bearer',
      WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
    }
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Weather App Ehrlich Exam',
      meta: [
        { name: 'description', content: 'Weather App Ehrlich Exam' }
      ],
    }
  }

})
