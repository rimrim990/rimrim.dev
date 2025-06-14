import GNB from '@/components/layout/header/GNB'
import Logo from '@/components/layout/header/Logo'

export default function Header() {
  return (
      <header className="flex justify-between items-center text-white px-8 py-4 bg-[var(--primary)]">
          <Logo />
          <GNB />
      </header>
  )
}
