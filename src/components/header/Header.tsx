import GNB from '@/components/header/GNB'
import Logo from '@/components/header/Logo'

export default function Header() {
  return (
      <header className="flex justify-between items-center text-white px-8 py-4 bg-[var(--primary)]">
          <Logo />
          <GNB />
      </header>
  )
}
