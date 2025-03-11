import { DiscordButton } from '../discord-button'

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          "Pengen <span className="text-primary">Kabur</span> ke Luar Negeri? Gaskeun!"
        </h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8">
        Kalau di sini susah maju, mungkin saatnya lihat ke tempat lain. <strong className="font-bold">#KaburAjaDulu</strong> bantu lo cari jalan buat kerja, kuliah, atau sekadar explore dunia. <strong className="font-bold">Job abroad, event keren, komunitas, kelas bahasa, beasiswa, sampe blog penuh tips & trik semua</strong> ada di sini!
        </p>
        <div className="flex items-center justify-center gap-4">
          <DiscordButton variant="filled" className="shadow-dc"/>
          <a href="https://discord.com/company" className="text-primary hover:underline font-medium">Apa itu discord?</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 