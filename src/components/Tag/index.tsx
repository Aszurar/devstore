import { tv, VariantProps } from 'tailwind-variants'

import { priceFormatter } from '@/utils/monetary'

const tagVariants = tv({
  base: [
    'absolute pl-5 py-1 pr-1 right-30 bottom-30 gap-2 border-2 border-zinc-500',
    'overflow-hidden  rounded-full bg-black/60 flex items-center',
  ],
  variants: {
    position: {
      sm: 'right-8 bottom-8',
      lg: 'right-30 bottom-30',
    },
  },

  defaultVariants: {
    position: 'sm',
  },
})

export type PositionType = 'sm' | 'lg' | undefined

type TagProps = VariantProps<typeof tagVariants> & {
  title: string
  price: number
}

export function Tag({ price, title, position }: Readonly<TagProps>) {
  const priceFormatted = priceFormatter.format(price)

  return (
    <div className={tagVariants({ position })}>
      <h2 className="text-sm text-zinc-100 truncate">{title}</h2>
      <span className="px-4 py-3 bg-violet-500 rounded-full text-center  text-white font-semibold">
        {priceFormatted}
      </span>
    </div>
  )
}
