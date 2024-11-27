import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { Cart } from '../Cart'
import { SearchForm } from '../SearchForm'

export function Header() {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex gap-5 items-center">
        <Link href="/" className="font-extrabold text-2xl text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex justify-between gap-4 items-center rounded-full">
        <Cart />

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
