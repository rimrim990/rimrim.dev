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
    <nav className="flex-1 text-right px-10">
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
  return (
    <GNBItem
      item={item}
      className="font-bold after:bg-gray-400 after:absolute after:top-7 after:right-0 after:w-6 after:h-1 after:rounded-sm after:dark:bg-white"
    />
  )
}

function GNBItem({ item: { name, path }, className }: ItemProps) {
  return (
    <a href={path} role="button" className={`relative inline-block text-l w-24 ${className || ''}`}>
      {name}
    </a>
  )
}
