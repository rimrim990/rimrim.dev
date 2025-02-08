import { useTheme } from 'next-themes'
import { Toggle } from '@/components/ui/toggle'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  console.log(theme)

  const handleToggle = () => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      default:
        setTheme('light')
        break
    }
  }

  return (
    <Toggle variant="outline" aria-label="Toggle theme" onClick={handleToggle}>
      <Sun className="absolute scale-0 dark:scale-100" />
      <Moon className="scale-100 dark:scale-0" />
    </Toggle>
  )
}
