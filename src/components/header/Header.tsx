'use client'

import DarkModeToggle from '@/components/header/DarkModeToggle'
import GNB from '@/components/header/GNB'
import Logo from '@/components/header/Logo'

export default function Header() {
  return (
    <nav className="bg-transparent h-16 flex items-center px-14 justify-start max-w-[1140px] m-auto sticky top-0 bg-white">
      <Logo />
      <GNB />
      <DarkModeToggle />
    </nav>
  )
}
