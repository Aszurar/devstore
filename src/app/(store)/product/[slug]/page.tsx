import { Metadata } from 'next'
import Image from 'next/image'

import { AddToCartButton } from '@/components/AddToCartButton'
import { SizeTag } from '@/components/SizeTag'
import { IProduct } from '@/data/products'
import { api } from '@/server/api'
import { priceFormatter, priceParcelFormatter } from '@/utils/monetary'

interface IProductDetail {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: IProductDetail): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)

  return {
    title: product.title,
    description: product.description,
  }
}

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

export async function generateStaticParams() {
  const response = await api({ path: '/products/featured' })
  const products: IProduct[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductDetail({
  params,
}: Readonly<IProductDetail>) {
  const product = await getProductBySlug(params.slug)
  const priceFormatted = priceFormatter.format(product.price)
  const priceParcel = product.price / 12
  const priceParcelFormatted = priceParcelFormatter.format(priceParcel)

  return (
    <div className="grid grid-cols-3 max-h-215">
      <section className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          width={1000}
          height={1000}
          quality={100}
          alt=""
        />
      </section>

      <section className="col-span-1 px-6 py-16 flex flex-col justify-center gap-8">
        <div>
          <h1 className="text-3xl.5 font-bold leading-tight ">
            {product.title}
          </h1>
          <p className="text-zinc-400 leading-relaxed mt-2">
            {product.description}
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <h2 className="text-2xl  bg-violet-500 font-semibold px-5 py-2.5 rounded-full">
            {priceFormatted}
          </h2>
          <p className="text-zinc-400 text-sm">
            Em 12x s/ juros de {priceParcelFormatted}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold">Tamanhos</h2>
          <div className="flex gap-2">
            <SizeTag size="P" />
            <SizeTag size="M" />
            <SizeTag size="G" />
            <SizeTag size="GG" />
          </div>
        </div>

        <AddToCartButton id={product.id} />
      </section>
    </div>
  )
}
