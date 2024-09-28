import { Skeleton } from '@/components/Skeleton'

export default function HomeLoading() {
  return (
    <div className="grid grid-cols-9 grid-rows-6 gap-6 max-h-215">
      <Skeleton className="col-span-6 row-span-6 h-207.5 " />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </div>
  )
}
