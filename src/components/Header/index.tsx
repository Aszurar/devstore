import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { SearchForm } from '../SearchForm'

export function Header() {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex gap-5 items-center">
        <Link href="/" className="font-extrabold text-2xl text-white">
          devstore
        </Link>

        <SearchForm />
      </div>

      <div className="flex justify-between gap-4 items-center rounded-full">
        <button type="button" className="flex gap-2 h-6 items-center">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm font-medium">Cart (3)</span>
        </button>

        <div className="w-[1px] h-4 bg-zinc-700" />

        <Link
          href="/"
          type="button"
          className="flex gap-2 h-6 items-center hover:underline"
        >
          <span className="text-sm font-medium">Account</span>
          <Image
            src="https://github.com/Aszurar.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            quality={50}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}
