import { Search } from 'lucide-react'

export function SearchForm() {
  return (
    <form className="px-5 py-3 gap-3 flex items-center bg-zinc-900 rounded-full ring-zinc-700 w-80 max-w-80">
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        type="search"
        placeholder="Buscar produtos..."
        className="placeholder:text-zinc-500 text-sm flex-1 bg-transparent focus:outline-none w-full"
      />
    </form>
  )
}
