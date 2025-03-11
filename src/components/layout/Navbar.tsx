import Link from 'next/link'
import { DiscordButton } from '../discord-button'

export function Navbar() {
  return (
    <nav className="container mx-auto py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg">#KaburAjaDulu</Link>
      
      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/blog"><strong>Blog</strong></Link>
        <DiscordButton variant="outlined" />
      </div>
    </nav>
  )
}

export default Navbar 