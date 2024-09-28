type SizeTagProps = {
  size: string
}

export function SizeTag({ size }: Readonly<SizeTagProps>) {
  return (
    <button className="bg-zinc-800 rounded-full h-9 w-14 flex items-center justify-center border border-zinc-700 font-semibold text-sm">
      {size}
    </button>
  )
}
