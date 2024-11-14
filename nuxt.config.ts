const IS_ENABLE_MSW = process.env.ENABLE_MSW === 'true'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@crazydos/nuxt-msw'],
  msw: {
    enable: IS_ENABLE_MSW,
  },
})
