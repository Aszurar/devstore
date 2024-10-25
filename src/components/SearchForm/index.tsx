'use client'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) return

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      id="search-form"
      onSubmit={handleSearch}
      className="px-5 py-3 gap-3 flex items-center bg-zinc-900 rounded-full ring-zinc-700 w-80 max-w-80"
    >
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        name="q"
        required
        type="search"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="placeholder:text-zinc-500 text-sm flex-1 bg-transparent focus:outline-none w-full"
      />
    </form>
  )
}
