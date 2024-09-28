import { IProduct } from '../../../../data/products'
import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products.filter(
    (product: IProduct) => product.featured,
  )

  return Response.json(featuredProducts)
}
