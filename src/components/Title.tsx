import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Title({ children }: Props) {
  return <h3 className="text-3xl font-bold mt-20 mb-5">{children}</h3>
}
