'use client'

import { useCart } from '@/contexts/cart'

import { Button } from '../Button'

type AddToCartButtonProps = {
  id: number
}

export function AddToCartButton({ id }: Readonly<AddToCartButtonProps>) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(id)
  }

  return <Button title="Adicionar ao carrinho" onClick={handleAddToCart} />
}
