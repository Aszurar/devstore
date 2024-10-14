import { Skeleton } from '@/components/Skeleton'

export default function HomeLoading() {
  return (
    <div className="grid grid-cols-3 max-h-215">
      <Skeleton className="col-span-2 h-[800px] " />

      <section className="col-span-1 px-6 py-16 flex flex-col justify-center gap-8">
        <Skeleton className="h-16" />

        <div className="flex w-full ">
          <Skeleton className="h-8 w-full" />
        </div>

        <div className="flex flex-col gap-4">
          <Skeleton className="h-24  rounded-full" />
        </div>
      </section>
    </div>
  )
}
