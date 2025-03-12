import Link from 'next/link'
import Image from 'next/image'
import { DiscordButton } from '../discord-button'

export function Navbar() {
  return (
    <nav className="container mx-auto py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg flex items-center gap-2">
        <Image 
          src="/logo.png" 
          alt="KaburAjaDulu Logo" 
          width={32} 
          height={32} 
          className="w-8 h-8"
        />
        #KaburAjaDulu
      </Link>
      
      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/blog" className="hover:underline"><strong>Blog</strong></Link>
        <DiscordButton variant="outlined" />
      </div>
    </nav>
  )
}

export default Navbar 