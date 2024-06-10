import { HeroSection } from "./_components/hero-section"
import { FeaturesSection } from "./_components/features-section"
import { PricingSection } from "./_components/pricing-section"


export default function Component() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  )
}