import { env } from '@/env'

type APIProps = {
  path: string
  init?: RequestInit
}

export function api({ path, init }: APIProps) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const pathFormatted = apiPrefix.concat(path)
  const url = new URL(pathFormatted, baseUrl)
  // http://localhost:3000/api/ + products =>  http://localhost:3000/api/products

  return fetch(url, init)
}
