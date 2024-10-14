import { z } from 'zod'

import { IProduct } from '@/data/products'

import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  console.log('params', params)

  const slug = z.string().parse(params.slug) // validando se é uma string, se é
  // o que esperamos como slug, já que o que vem dentro de params é qualquer coisa

  const featuredProducts = data.products.find(
    (product: IProduct) => product.slug === slug,
  )
  if (!featuredProducts) {
    // caso não encontre o produto, retornamos um 404
    Response.json(
      {
        message: 'Product not found',
      },

      { status: 404 },
    )
  }

  return Response.json(featuredProducts)
}
