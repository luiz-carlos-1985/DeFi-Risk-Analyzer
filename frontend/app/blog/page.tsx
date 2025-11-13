'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, TrendingUp, Shield, Code } from 'lucide-react'

export default function BlogPage() {
  const featured = {
    title: 'The State of DeFi Security in 2024',
    excerpt: 'A comprehensive analysis of $2.3B in DeFi exploits, emerging attack vectors, and how AI-powered risk analysis is changing the game for protocol security.',
    date: '2024-01-20',
    author: 'Sarah Chen',
    readTime: '12 min',
    category: 'Security',
    image: 'from-red-500 to-pink-500'
  }

  const posts = [
    { 
      title: 'Understanding DeFi Risk Metrics: A Deep Dive', 
      date: '2024-01-15', 
      author: 'John Doe', 
      readTime: '8 min',
      category: 'Analytics',
      excerpt: 'Learn about TVL ratios, liquidity depth, smart contract risk scores, and 15+ other critical metrics used by institutions to assess DeFi protocol safety.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Smart Contract Auditing: Automated vs Manual', 
      date: '2024-01-10', 
      author: 'Jane Smith', 
      readTime: '10 min',
      category: 'Security',
      excerpt: 'Comparing automated security tools with manual audits. Why you need both, and how our AI detects vulnerabilities that traditional audits miss.',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Building DeFi Risk Models with Machine Learning', 
      date: '2024-01-05', 
      author: 'Mike Johnson', 
      readTime: '15 min',
      category: 'Technical',
      excerpt: 'How we trained neural networks on 3 years of on-chain data to predict protocol risks with 95% accuracy. Includes code examples and model architecture.',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
          <span className="text-purple-400 text-sm font-semibold">INSIGHTS & RESEARCH</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          DeFi Intelligence
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl">
          Deep dives into DeFi security, risk analysis, and blockchain technology
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-premium mb-12 cursor-pointer group">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-1/3 h-64 lg:h-auto rounded-xl bg-gradient-to-br ${featured.image} flex items-center justify-center`}>
            <Shield className="w-24 h-24 text-white opacity-50" />
          </div>
          <div className="lg:w-2/3">
            <div className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-xs font-semibold mb-4">
              {featured.category}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {featured.title}
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">{featured.excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{featured.date}</div>
              <div className="flex items-center"><User className="w-4 h-4 mr-2" />{featured.author}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" />{featured.readTime} read</div>
            </div>
            <button className="btn-primary group-hover:scale-105 transition-transform">
              Read Article <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card cursor-pointer group"
          >
            <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center mb-6`}>
              <post.icon className="w-16 h-16 text-white opacity-50" />
            </div>
            <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold mb-4">
              {post.category}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{post.date}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
