import { handlers } from './handlers'

export default defineNuxtMswWorkerOption(() => {
  return {
    handlers,
    workerOptions: {
      onUnhandledRequest: 'bypass',
    },
  }
})
