import { CategoryCard } from "@/components/question-gen/category-card";
import { datasets } from "@/lib/question-gen/types/dataset";
import { FileWarning } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-6 sm:py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
        <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            AI Question Generator
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Select a category to start learning
          </p>
        </div>
        <div className=" border p-1 text-[10px] flex mb-2">
          <p className="text-yellow-600 font-medium">
            ⚠️ Note: This is a prototype version and may contain bugs or
            unexpected issues.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {datasets.map((dataset) => (
            <CategoryCard key={dataset.id} dataset={dataset} />
          ))}
        </div>
      </div>
      <div className="h-20 w-full"></div>
    </main>
  );
}
