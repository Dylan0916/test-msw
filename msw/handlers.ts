import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://test.com/api/data', () => {
    return HttpResponse.json({ message: 'Hello!' })
  }),
]
