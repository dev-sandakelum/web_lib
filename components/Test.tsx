import React from 'react'

interface TestProps {
  test: string | number;
}

export default function Test({ test }: TestProps) {
  return (
    <div>{test}</div>
  )
}
    