"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type MarketData = {
  symbol: string
  price: number
  change24h: number
  volume24h: number
}

export function MarketOverview() {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: 'BTC', price: 65432.10, change24h: 2.5, volume24h: 28.5 },
    { symbol: 'ETH', price: 3456.78, change24h: -1.2, volume24h: 15.7 },
    { symbol: 'SOL', price: 123.45, change24h: 5.7, volume24h: 8.9 }
  ])

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(data => ({
        ...data,
        price: data.price * (1 + (Math.random() * 0.002 - 0.001)),
        change24h: data.change24h + (Math.random() * 0.2 - 0.1),
        volume24h: data.volume24h * (1 + (Math.random() * 0.1 - 0.05))
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
      <div className="space-y-4">
        {marketData.map((data) => (
          <div key={data.symbol} className="flex justify-between items-center">
            <div className="font-medium">{data.symbol}</div>
            <div className="text-right">
              <div className="font-medium">${data.price.toFixed(2)}</div>
              <div className={data.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                {data.change24h >= 0 ? '+' : ''}{data.change24h.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}