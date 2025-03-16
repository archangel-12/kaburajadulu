import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/home/HeroSection'
import DestinationShowcase from '@/components/home/DestinationShowcase'
import AboutSection from '@/components/home/AboutSection'
// import BlogSection from '@/components/home/BlogSection'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DestinationShowcase />
        <AboutSection />
        {/* <BlogSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
