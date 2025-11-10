import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ValueSection } from "@/components/value-section"
import { PlatformsSection } from "@/components/platforms-section"
import { FeaturesSection } from "@/components/features-section"
import { AppShowcaseSection } from "@/components/app-showcase-section"
import { DesktopShowcaseSection } from "@/components/desktop-showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ConversionSection } from "@/components/conversion-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ValueSection />
      <PlatformsSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <DesktopShowcaseSection />
      <TestimonialsSection />
      <ConversionSection />
      <Footer />
    </main>
  )
}
