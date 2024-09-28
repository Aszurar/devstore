import Image from 'next/image'
import Link from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

import { PositionType, Tag } from '../Tag'

const productCardVariants = tv({
  slots: {
    container:
      'group relative bg-zinc-900 rounded-lg overflow-hidden flex justify-center items-center',
    imageSize: '',
    tagPosition: '',
  },
  variants: {
    featured: {
      high: {
        container: 'col-span-6 row-span-6',
        imageSize: '880',
        tagPosition: 'lg',
      },
      comum: {
        container: 'col-span-3 row-span-3',
        imageSize: '445',
        tagPosition: 'sm',
      },
    },
  },
  defaultVariants: {
    featured: 'comum',
  },
})

type ProductCardProps = VariantProps<typeof productCardVariants> & {
  href: string
  image: string
  title: string
  price: number
}

export function ProductCard({
  image,
  href,
  price,
  title,
  featured,
}: ProductCardProps) {
  const { container, imageSize, tagPosition } = productCardVariants({
    featured,
  })
  const imageSizeFormatted = Number(imageSize())
  const tagPositionFormatted = tagPosition() as PositionType
  return (
    <Link href={href} className={container()}>
      <Image
        className="group-hover:scale-105 transition-transform duration-500 "
        src={image}
        width={imageSizeFormatted}
        height={imageSizeFormatted}
        quality={100}
        alt=""
      />

      <Tag price={price} title={title} position={tagPositionFormatted} />
    </Link>
  )
}
