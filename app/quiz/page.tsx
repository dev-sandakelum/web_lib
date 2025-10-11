import ModelQuizzes from '@/components/quiz'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-700 font-semibold text-lg">Loading quizzes...</p>
        </div>
      </div>
    }>
      <ModelQuizzes />
    </Suspense>
  )
}
