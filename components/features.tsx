"use client"

import { motion } from 'framer-motion'
import { 
  Bot, 
  LineChart, 
  Lock, 
  MessageSquare, 
  Rocket, 
  Settings, 
  Shield, 
  Zap 
} from 'lucide-react'

const features = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Trading Bots",
    description: "Custom automated trading bots powered by advanced machine learning algorithms"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Real-Time Analytics",
    description: "Comprehensive market analysis and performance tracking in real-time"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Risk Management",
    description: "Advanced risk assessment and portfolio protection strategies"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Community Insights",
    description: "Connect with traders and share strategies in our active community"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Custom Strategies",
    description: "Create and backtest your own trading strategies with ease"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant Execution",
    description: "Lightning-fast trade execution across multiple exchanges"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Bank-Grade Security",
    description: "Enterprise-level security measures to protect your assets"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Advanced APIs",
    description: "Comprehensive API access for custom integration and automation"
  }
]

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Powerful Features for Smart Trading
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-muted-foreground"
          >
            Everything you need to succeed in cryptocurrency trading
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 p-6 rounded-xl backdrop-blur-sm hover:bg-card/80 transition-colors"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}