"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUp } from 'lucide-react'

type Trade = {
  id: string
  pair: string
  price: number
  change: number
  prediction: 'buy' | 'sell' | 'hold'
  confidence: number
  timestamp: number
}

export function LiveTrades() {
  const [trades, setTrades] = useState<Trade[]>([
    {
      id: '1',
      pair: 'BTC/USDT',
      price: 65432.10,
      change: 2.5,
      prediction: 'buy',
      confidence: 87,
      timestamp: Date.now()
    },
    {
      id: '2',
      pair: 'ETH/USDT',
      price: 3456.78,
      change: -1.2,
      prediction: 'hold',
      confidence: 65,
      timestamp: Date.now()
    },
    {
      id: '3',
      pair: 'SOL/USDT',
      price: 123.45,
      change: 5.7,
      prediction: 'buy',
      confidence: 92,
      timestamp: Date.now()
    }
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTrades(prev => prev.map(trade => ({
        ...trade,
        price: trade.price * (1 + (Math.random() * 0.002 - 0.001)),
        change: trade.change + (Math.random() * 0.4 - 0.2),
        confidence: Math.min(99, Math.max(50, trade.confidence + (Math.random() * 4 - 2))),
        timestamp: Date.now()
      })))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Live AI Trading Signals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trades.map((trade) => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card p-6 rounded-xl shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{trade.pair}</h3>
                <span className={`flex items-center ${trade.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {trade.change >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                  {Math.abs(trade.change).toFixed(2)}%
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-medium">${trade.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Signal</span>
                  <span className={`font-medium capitalize ${
                    trade.prediction === 'buy' ? 'text-green-500' : 
                    trade.prediction === 'sell' ? 'text-red-500' : 
                    'text-yellow-500'
                  }`}>
                    {trade.prediction}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className="font-medium">{trade.confidence}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}