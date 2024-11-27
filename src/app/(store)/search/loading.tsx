import { Suspense } from 'react'

import { Skeleton } from '@/components/Skeleton'

import { CurrentSearch } from './current-search'

export default function SearchPageLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[300px]" />
        <Skeleton className="h-[300px]" />
        <Skeleton className="h-[300px]" />
        <Skeleton className="h-[300px]" />
        <Skeleton className="h-[300px]" />
        <Skeleton className="h-[300px]" />
      </div>
    </div>
  )
}
