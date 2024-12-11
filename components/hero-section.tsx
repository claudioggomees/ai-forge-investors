"use client"

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, Sparkles, TrendingUp } from 'lucide-react'

export function HeroSection() {
  const router = useRouter()

  const handleAuthNavigation = () => {
    router.push('/auth')
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            The Future of Crypto Trading
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of AI to make smarter cryptocurrency trading decisions.
            Real-time analysis, automated strategies, and predictive insights.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" onClick={handleAuthNavigation}>
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Live Demo
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card/50 rounded-xl backdrop-blur-sm">
              <Brain className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold">AI-Powered Analysis</h3>
              <p className="text-muted-foreground text-sm text-center mt-2">
                Advanced algorithms analyze market patterns in real-time
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/50 rounded-xl backdrop-blur-sm">
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold">Smart Automation</h3>
              <p className="text-muted-foreground text-sm text-center mt-2">
                Automated trading strategies based on AI predictions
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/50 rounded-xl backdrop-blur-sm">
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold">Real-Time Insights</h3>
              <p className="text-muted-foreground text-sm text-center mt-2">
                Live market data and performance tracking
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}