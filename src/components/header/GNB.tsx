import { usePathname } from 'next/navigation'

type Item = {
  name: string
  path: string
}

const items: Item[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
]

export default function GNB() {
  const pathName = usePathname()

  return (
    <nav className="flex w-60">
      {items.map((item) =>
        item.path === pathName ? (
          <ActiveGNBItem item={item} key={item.path} />
        ) : (
          <GNBItem item={item} key={item.path} />
        )
      )}
    </nav>
  )
}

interface ItemProps {
  item: Item
  className?: string
}

function ActiveGNBItem({ item }: ItemProps) {
  return <GNBItem item={item} className="bg-gray-400" />
}

function GNBItem({ item: { name, path }, className }: ItemProps) {
  return (
    <a href={path} role="button" className={`flex-1 align-middle ${className}`}>
      {name}
    </a>
  )
}
