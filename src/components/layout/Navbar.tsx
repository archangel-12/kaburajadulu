"use client"

import Link from 'next/link'
import Image from 'next/image'
import { DiscordButton } from '../discord-button'

export function Navbar() {
  const handleDiscordClick = () => {
    window.open('https://discord.gg/yxyjeTkapG', '_blank')
  }

  return (
    <nav className="container mx-auto py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg flex items-center pl-4 sm:pl-0" aria-label="Kembali ke halaman utama">
        <Image 
          src="/icon.svg" 
          alt="KaburAjaDulu Logo"
          width={160} 
          height={32} 
          priority
        />
      </Link>
      
      {/* Navigation Links */}
      <div className="flex items-center">
        <DiscordButton 
          variant="outlined" 
          className="sm:text-base text-sm sm:py-2 py-2" 
          onClick={handleDiscordClick}
          ariaLabel="Gabung dengan komunitas #KaburAjaDulu di Discord"
          iconOnly={true}
        />
      </div>
    </nav>
  )
}

export default Navbar 