'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Book, HelpCircle, Phone, Clock, Globe, Zap } from 'lucide-react'
import { useState } from 'react'

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', priority: 'normal' })

  const faqs = [
    { q: 'How accurate is the risk analysis?', a: 'Our AI models achieve 95% accuracy based on 3+ years of historical data and real-time monitoring.' },
    { q: 'Which blockchains are supported?', a: 'We support 20+ chains including Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche, and more.' },
    { q: 'Can I integrate the API into my app?', a: 'Yes! Pro and Enterprise plans include full API access with comprehensive documentation.' },
    { q: 'How often is data updated?', a: 'Real-time data updates every 3 seconds via WebSocket. Historical data updated every 15 minutes.' },
  ]
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
          <span className="text-green-400 text-sm font-semibold">24/7 SUPPORT</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          We're Here to Help
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
          Get expert support from our team of DeFi specialists
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: MessageCircle, title: 'Live Chat', desc: 'Average response: 2 min', color: 'from-green-500 to-emerald-500', action: 'Start Chat' },
          { icon: Mail, title: 'Email Support', desc: 'Response within 4 hours', color: 'from-blue-500 to-cyan-500', action: 'Send Email' },
          { icon: Phone, title: 'Phone Support', desc: 'Enterprise customers only', color: 'from-purple-500 to-pink-500', action: 'Schedule Call' },
          { icon: Book, title: 'Documentation', desc: '200+ guides & tutorials', color: 'from-orange-500 to-red-500', action: 'Browse Docs' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="card text-center cursor-pointer">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 mx-auto mb-4`}>
              <item.icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
            <button className="btn-secondary text-sm py-2">{item.action}</button>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="card">
          <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="input-field" />
              <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field" />
            </div>
            <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="input-field" />
            <select value={formData.priority} onChange={(e) => setFormData({...formData, priority: e.target.value})} className="input-field">
              <option value="low">Low Priority</option>
              <option value="normal">Normal Priority</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
            <textarea placeholder="Describe your issue or question..." rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="input-field"></textarea>
            <button className="btn-primary w-full text-lg py-4">Send Message</button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="space-y-6">
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-4">Support Hours</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center"><Clock className="w-5 h-5 text-green-400 mr-3" /><span>Live Chat: 24/7</span></div>
              <div className="flex items-center"><Clock className="w-5 h-5 text-blue-400 mr-3" /><span>Email: 24/7 (4h response)</span></div>
              <div className="flex items-center"><Clock className="w-5 h-5 text-purple-400 mr-3" /><span>Phone: Mon-Fri 9AM-6PM EST</span></div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center"><Mail className="w-5 h-5 text-blue-400 mr-3" /><a href="mailto:support@defi-risk.com" className="hover:text-blue-400">support@defi-risk.com</a></div>
              <div className="flex items-center"><Phone className="w-5 h-5 text-green-400 mr-3" /><span>+1 (555) 123-4567</span></div>
              <div className="flex items-center"><Globe className="w-5 h-5 text-purple-400 mr-3" /><span>San Francisco, CA</span></div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <Zap className="w-12 h-12 text-yellow-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Priority Support</h3>
            <p className="text-slate-300 text-sm mb-4">Upgrade to Pro or Enterprise for faster response times and dedicated support</p>
            <button className="btn-primary">Upgrade Now</button>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="card">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
