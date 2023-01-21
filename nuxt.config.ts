// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [],
  runtimeConfig: {
    public: {
      apiURL: 'http://api.ehrlich-exam-backend.test',
      apiBase: '/api',
    }
  }
})
