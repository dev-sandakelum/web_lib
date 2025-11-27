export default function Loading() {
  return (
    <div className="min-h-screen font-sans text-slate-100">
      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-16">
        
        {/* Navigation Skeleton */}
        <div className="flex items-center gap-3 mb-4 sm:mb-8">
          <div className="h-4 w-16 bg-white/5 rounded animate-pulse" />
          <div className="h-4 w-4 bg-white/5 rounded animate-pulse" />
          <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
        </div>

        {/* Header Skeleton */}
        <div className="mb-4 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="w-full">
              <div className="h-6 w-24 bg-white/5 rounded-full mb-4 animate-pulse" />
              <div className="h-10 sm:h-12 w-3/4 max-w-md bg-white/5 rounded-lg mb-4 animate-pulse" />
              <div className="h-4 w-full max-w-xl bg-white/5 rounded animate-pulse" />
            </div>
            <div className="w-full md:w-80">
              <div className="h-10 w-full bg-white/5 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* List Skeleton */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-white/5 overflow-hidden">
          <div className="hidden sm:flex items-center justify-between px-6 py-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
          </div>

          <div className="divide-y divide-white/5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center px-4 py-3 sm:px-6 sm:py-4">
                <div className="mr-3 sm:mr-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 bg-white/5 rounded-lg animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="h-4 w-1/3 bg-white/5 rounded mb-2 animate-pulse" />
                  <div className="h-3 w-1/4 bg-white/5 rounded animate-pulse" />
                </div>
                <div className="h-4 w-4 bg-white/5 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
