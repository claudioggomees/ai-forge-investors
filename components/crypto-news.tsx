"use client"

import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    title: "Bitcoin Reaches New All-Time High",
    summary: "The leading cryptocurrency continues its bullish trend...",
    source: "CryptoNews",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "Ethereum 2.0 Upgrade Progress",
    summary: "The network upgrade shows promising results in testing...",
    source: "BlockchainDaily",
    time: "4 hours ago"
  },
  {
    id: 3,
    title: "New DeFi Protocol Launch",
    summary: "Revolutionary decentralized finance platform announces...",
    source: "DeFiWorld",
    time: "6 hours ago"
  }
]

export function CryptoNews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Latest Crypto News</h2>
      <div className="space-y-4">
        {newsItems.map((news) => (
          <div key={news.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
            <h3 className="font-medium mb-1">{news.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{news.summary}</p>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{news.source}</span>
              <span>{news.time}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}