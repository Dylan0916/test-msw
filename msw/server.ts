import { handlers } from './handlers'

export default defineNuxtMswServerOption(() => {
  const baseURL = 'https://test.com'

  return {
    baseURL,
    handlers,
    serverOptions: {
      onUnhandledRequest: 'bypass',
    },
  }
})
