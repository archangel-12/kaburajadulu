"use client"

import Link from 'next/link'
import Image from 'next/image'
import { DiscordButton } from '../discord-button'
import { DISCORD_URL } from '@/constants/urls'

export function Navbar() {
  const handleDiscordClick = () => {
    window.open(DISCORD_URL, '_blank')
  }

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg flex items-center" aria-label="Kembali ke halaman utama">
        <Image 
          src="/icon.svg" 
          alt="KaburAjaDulu Logo"
          width={140}
          height={28}
          className="w-32 sm:w-40 h-auto"
          priority
        />
      </Link>
      
      {/* Navigation Links */}
      <div className="flex items-center">
        <DiscordButton 
          variant="outlined" 
          className="text-sm sm:text-base px-3 sm:px-4 py-2" 
          onClick={handleDiscordClick}
          ariaLabel="Gabung dengan komunitas #KaburAjaDulu di Discord"
          iconOnly={true}
        />
      </div>
    </nav>
  )
}

export default Navbar