'use client'

import DarkModeToggle from '@/components/header/DarkModeToggle'
import GNB from '@/components/header/GNB'
import Logo from '@/components/header/Logo'

export default function Header() {
  return (
    <header className="bg-transparent h-16 flex items-center px-12 justify-start">
      <Logo />
      <GNB />
      <DarkModeToggle />
    </header>
  )
}
