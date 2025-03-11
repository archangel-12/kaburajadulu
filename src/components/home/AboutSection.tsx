import { GithubButton } from "../../components/github-button";

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Apa itu #KaburAjaDulu</h2>
        <div className="max-w-3xl mx-auto text-lg text-center">
          <p className="mb-6 font-light">
          Bukan sekadar fomo doang, <strong className="font-bold">#KaburAjaDulu</strong> adalah tempat buat lo yang mau <strong className="font-bold">kerja, kuliah,</strong> atau <strong className="font-bold">sekadar explore dunia!</strong>
          </p>
          <p className="font-light">
          Dari <strong className="font-bold">job abroad, beasiswa, komunitas, kelas bahasa, sampai event internasional</strong> semua ada di sini. Punya ide keren? Biar gak cuma numpang lewat, yuk kontribusi!
          </p>
        </div>
        
        <div className="flex flex-row items-center justify-center mt-10 gap-6">
          <GithubButton className="px-6 py-2 text-base" />
          <a 
            href="#" 
            className="text-base underline decoration-1 hover:text-primary transition-colors"
          >
            Punya Saran? Spill The Tea
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 