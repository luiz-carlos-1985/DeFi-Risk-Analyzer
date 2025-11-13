'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Crown, Building2 } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    { 
      name: 'Starter', 
      price: '$0', 
      period: 'Forever free',
      icon: Zap,
      features: [
        { text: '10 wallet analyses/month', included: true },
        { text: 'Basic risk metrics', included: true },
        { text: '5 protocol audits/month', included: true },
        { text: 'Community support', included: true },
        { text: 'Real-time alerts', included: false },
        { text: 'API access', included: false },
        { text: 'Historical data', included: false },
      ],
      cta: 'Start Free',
      color: 'from-slate-500 to-gray-500'
    },
    { 
      name: 'Professional', 
      price: '$49', 
      period: 'per month',
      icon: Crown,
      popular: true,
      features: [
        { text: 'Unlimited wallet analyses', included: true },
        { text: 'Advanced analytics & charts', included: true },
        { text: 'Unlimited protocol audits', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Real-time alerts (Telegram/Email)', included: true },
        { text: 'Full API access (10k req/day)', included: true },
        { text: '1 year historical data', included: true },
      ],
      cta: 'Start 14-Day Trial',
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'Enterprise', 
      price: 'Custom', 
      period: 'Contact sales',
      icon: Building2,
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Custom integrations & webhooks', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: '99.9% uptime SLA', included: true },
        { text: 'Multi-user team access', included: true },
        { text: 'Unlimited API requests', included: true },
        { text: 'Full historical data (3+ years)', included: true },
        { text: 'White-label options', included: true },
      ],
      cta: 'Contact Sales',
      color: 'from-purple-500 to-pink-500'
    },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
          <span className="text-green-400 text-sm font-semibold">TRANSPARENT PRICING</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Scale with Confidence
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          Start free, upgrade when you need more. No hidden fees, cancel anytime.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
          <div className="flex items-center"><Check className="w-4 h-4 text-green-400 mr-1" />14-day money-back guarantee</div>
          <div className="flex items-center"><Check className="w-4 h-4 text-green-400 mr-1" />No credit card required</div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, y: -8 }}
            className={`relative ${plan.popular ? 'card-premium' : 'card'}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              </div>
            )}
            
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} p-4 mb-6`}>
              <plan.icon className="w-full h-full text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="mb-6">
              <div className="text-5xl font-bold text-white mb-1">
                {plan.price}
              </div>
              <div className="text-slate-400 text-sm">{plan.period}</div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start text-sm">
                  {f.included ? (
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-slate-600 mr-3 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={f.included ? 'text-slate-300' : 'text-slate-600'}>{f.text}</span>
                </li>
              ))}
            </ul>
            
            <button className={plan.popular ? 'btn-primary w-full text-lg py-4' : 'btn-secondary w-full text-lg py-4'}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="text-4xl font-bold text-white mb-2">10,000+</div>
          <div className="text-slate-400">Active Users</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-white mb-2">$2B+</div>
          <div className="text-slate-400">Assets Analyzed</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-white mb-2">99.9%</div>
          <div className="text-slate-400">Uptime SLA</div>
        </div>
      </motion.div>
    </div>
  )
}
