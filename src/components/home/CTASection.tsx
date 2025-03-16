"use client"

import { DiscordButton } from '../discord-button'

export function CTASection() {
  const handleDiscordClick = () => {
    window.open('https://discord.gg/yxyjeTkapG', '_blank')
  }

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6">
          #KaburAjaDulu, Kalo Bukan Sekarang, Mau Kapan?
        </h2>
        <DiscordButton 
          className="shadow-dc" 
          onClick={handleDiscordClick}
          ariaLabel="Gabung dengan komunitas #KaburAjaDulu di Discord"
        />
      </div>
    </section>
  )
}

export default CTASection 