'use client'

import { motion } from 'framer-motion'
import { Shield, Brain, Zap, BarChart3, Bell, Lock, TrendingUp, Activity, Wallet, Globe, Code, Database } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    { icon: Brain, title: 'AI Risk Prediction', desc: 'Neural networks analyze 500+ risk factors with 95% accuracy', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, title: 'Smart Contract Auditor', desc: 'Automated vulnerability detection across 15+ security patterns', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, title: 'Real-time Monitoring', desc: 'Sub-second alerts on 20+ blockchains with WebSocket streaming', color: 'from-yellow-500 to-orange-500' },
    { icon: BarChart3, title: 'Advanced Analytics', desc: 'Interactive dashboards with 50+ metrics and custom indicators', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, title: 'Yield Optimizer', desc: 'AI-powered yield farming strategies across 100+ protocols', color: 'from-indigo-500 to-purple-500' },
    { icon: Activity, title: 'Risk Heatmaps', desc: 'Visual risk correlation analysis with real-time updates', color: 'from-red-500 to-pink-500' },
    { icon: Wallet, title: 'Portfolio Tracker', desc: 'Multi-chain portfolio tracking with P&L analytics', color: 'from-teal-500 to-cyan-500' },
    { icon: Globe, title: 'Multi-Chain Support', desc: 'Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche +14 more', color: 'from-blue-500 to-purple-500' },
    { icon: Bell, title: 'Custom Alerts', desc: 'Telegram, Discord, Email, Webhook integrations with smart filters', color: 'from-orange-500 to-red-500' },
    { icon: Lock, title: 'Enterprise Security', desc: 'SOC2 compliant with AES-256 encryption and 2FA', color: 'from-slate-500 to-gray-500' },
    { icon: Code, title: 'Developer API', desc: 'RESTful & GraphQL APIs with 99.9% uptime SLA', color: 'from-green-500 to-teal-500' },
    { icon: Database, title: 'Historical Data', desc: '3+ years of on-chain data with millisecond query speeds', color: 'from-violet-500 to-purple-500' },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
          <span className="text-blue-400 text-sm font-semibold">ENTERPRISE FEATURES</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Built for Scale
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
          Production-ready DeFi infrastructure trusted by institutions managing $2B+ in assets
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card group cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
              <feature.icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-20 card-premium text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <p className="text-slate-300 mb-6">Join 10,000+ users analyzing DeFi risks with confidence</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">Start Free Trial</button>
          <button className="btn-secondary text-lg px-8 py-4">Schedule Demo</button>
        </div>
      </motion.div>
    </div>
  )
}
