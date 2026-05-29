import { Skeleton } from "@/components/ui/skeleton"

export function PageLoader() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 animate-in fade-in duration-200">
      {/* Hero area */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4">
          <Skeleton className="h-7 w-32 rounded-full" />
          <Skeleton className="h-14 w-3/4 max-w-lg rounded-2xl" />
          <Skeleton className="h-14 w-1/2 max-w-sm rounded-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-md rounded-xl mt-1" />
          <Skeleton className="h-5 w-1/2 max-w-sm rounded-xl" />
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 p-7 space-y-4"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Skeleton className="h-12 w-12 rounded-2xl" />
              <Skeleton className="h-6 w-3/4 rounded-xl" />
              <div className="space-y-2 pt-1">
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-5/6 rounded-lg" />
                <Skeleton className="h-4 w-4/6 rounded-lg" />
                <Skeleton className="h-4 w-3/4 rounded-lg" />
              </div>
              <Skeleton className="h-11 w-full rounded-xl mt-2" />
            </div>
          ))}
        </div>

        {/* Wide card */}
        <div className="rounded-3xl border border-gray-100 dark:border-gray-800 p-8 space-y-5">
          <Skeleton className="h-7 w-48 rounded-xl mx-auto" />
          <Skeleton className="h-5 w-96 max-w-full rounded-lg mx-auto" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
