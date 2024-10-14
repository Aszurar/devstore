'use client'
import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart'

export function Cart() {
  const { items } = useCart()
  const count = items.length
  return (
    <button type="button" className="flex gap-2 h-6 items-center">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm font-medium">
        Cart {!!count && `(${count})`}
      </span>
    </button>
  )
}
