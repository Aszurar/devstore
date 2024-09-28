import Image from 'next/image'

import { Button } from '@/components/Button'
import { SizeTag } from '@/components/SizeTag'

export default function ProductDetail() {
  return (
    <div className="grid grid-cols-3 max-h-215">
      <section className="col-span-2 overflow-hidden">
        <Image
          src="/camiseta-dowhile-2022.png"
          width={1000}
          height={1000}
          quality={100}
          alt=""
        />
      </section>

      <section className="col-span-1 px-6 py-16 flex flex-col justify-center gap-8">
        <div>
          <h1 className="text-3xl.5 font-bold leading-tight ">
            Moletom Never Stop Learning
          </h1>
          <p className="text-zinc-400 leading-relaxed mt-2">
            Moletom fabricado com 88% de algodão e 12% de poliéster.
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <h2 className="text-2xl  bg-violet-500 font-semibold px-5 py-2.5 rounded-full">
            R$149
          </h2>
          <p className="text-zinc-400 text-sm">Em 12x s/ juros de R$8,25</p>
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

        <Button title="Adicionar ao carrinho" />
      </section>
    </div>
  )
}
