'use client'

import DarkModeToggle from '@/components/header/DarkModeToggle'
import GNB from '@/components/header/GNB'

export default function Header() {
  return (
    <header>
      <GNB />
      <DarkModeToggle />
    </header>
  )
}
