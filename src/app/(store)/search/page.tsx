import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { ProductCard } from '@/components/ProductCard'
import { IProduct } from '@/data/products'
import { api } from '@/server/api'

type SearchPageProps = {
  params: unknown
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<IProduct[]> {
  const response = await api({
    path: `/products/search?q=${query}`,
    init: {
      next: {
        revalidate: 60 * 60,
      },
    },
  })

  const products = await response.json()

  return products as IProduct[]
}
export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const query = searchParams.q

  return {
    title: `Busca por ${query}`,
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            href={`/product/${product.slug}`}
            image={product.image}
            price={product.price}
            title={product.title}
            featured="search"
          />
        ))}
      </div>
    </div>
  )
}
