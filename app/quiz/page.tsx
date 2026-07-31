import ModelQuizzes from '@/components/quiz/quiz'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-emerald-400 font-semibold text-lg">Loading quizzes...</p>
        </div>
      </div>
    }>
      <ModelQuizzes />
    </Suspense>
  )
}
