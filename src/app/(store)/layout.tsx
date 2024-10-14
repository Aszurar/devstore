import { Header } from '@/components/Header'
import { CartProvider } from '@/contexts/cart'

type StoreLayoutProps = {
  children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto min-h-screen p-8 w-full max-w-400 gap-5 grid grid-rows-app">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
