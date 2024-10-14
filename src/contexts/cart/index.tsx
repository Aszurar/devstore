'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type CartItemProps = {
  id: number
  quantity: number
}

interface CartContextProps {
  items: CartItemProps[]
  addToCart: (id: number) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextProps)

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  const addToCart = useCallback((id: number) => {
    setCartItems((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id)
      const alreadyExists = itemIndex >= 0

      if (alreadyExists) {
        const newItems = [...prev]
        newItems[itemIndex].quantity += 1
        return newItems
      }

      return [...prev, { id, quantity: 1 }]
    })
  }, [])

  const contextValues = useMemo(
    () => ({
      items: cartItems,
      addToCart,
    }),
    [cartItems, addToCart],
  )

  useEffect(() => {
    console.log('Cart items:', cartItems)
  }, [cartItems])

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export { CartProvider, useCart }
