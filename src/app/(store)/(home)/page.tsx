import { ProductCard } from '@/components/ProductCard'
import { IProduct } from '@/data/products'
import { api } from '@/server/api'

export async function getFeaturedProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await api({
    path: '/products/featured',
    init: {
      next: {
        revalidate: 60 * 60,
      },
    },
  })

  const products = await response.json()

  return products as IProduct[]
}

export default async function Home() {
  const [highlightedProduct, ...othersProducts] = await getFeaturedProducts()

  return (
    <main className="grid grid-cols-9 grid-rows-6 gap-6 max-h-215">
      <ProductCard
        href=""
        image={highlightedProduct.image}
        price={highlightedProduct.price}
        title={highlightedProduct.title}
        featured="high"
      />

      {othersProducts.map((product) => (
        <ProductCard
          key={product.id}
          href=""
          image={product.image}
          price={product.price}
          title={product.title}
        />
      ))}
    </main>
  )
}
