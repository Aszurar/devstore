import { Header } from '@/components/Header'

type StoreLayoutProps = {
  children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="mx-auto min-h-screen p-8 w-full max-w-400 gap-5 grid grid-rows-app">
      <Header />
      {children}
    </div>
  )
}
