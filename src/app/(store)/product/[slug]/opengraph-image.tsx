import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors' // 3<<<

import { IProduct } from '@/data/products'
import { env } from '@/env'
import { api } from '@/server/api'
export const runtime = 'edge'
export const alt = ''
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

async function getProductBySlug(slug: string): Promise<IProduct> {
  const response = await api({
    path: `/products/${slug}`,
    init: {
      next: {
        revalidate: 60 * 60,
      },
    },
  })
  const product = await response.json()

  return product as IProduct
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug(params.slug)
  const productImageURL = new URL(product.image, env.APP_URL).toString()
  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
