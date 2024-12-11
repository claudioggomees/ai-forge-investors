import { HeroSection } from '@/components/hero-section'
import { LiveTrades } from '@/components/live-trades'
import { Features } from '@/components/features'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <LiveTrades />
      <Features />
    </div>
  )
}