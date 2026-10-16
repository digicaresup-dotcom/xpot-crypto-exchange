import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'

const initialCoins = [
  { name: 'Bitcoin', sym: 'BTC', price: 67432.21, change: 2.4 },
  { name: 'Ethereum', sym: 'ETH', price: 3248.17, change: 3.1 },
  { name: 'Solana', sym: 'SOL', price: 158.32, change: 5.6 },
  { name: 'BNB', sym: 'BNB', price: 595.41, change: 1.8 },
  { name: 'Cardano', sym: 'ADA', price: 0.62, change: -0.9 },
]

const fmt = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value)

export default function Landing() {
  const coins = useMemo(() => initialCoins, [])

  return (
    <>
      <section className="grid items-center gap-12 pb-20 pt-12 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green">
            <Sparkles size={12} /> Trade • Invest • Grow
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[1.04] tracking-tight md:text-6xl">
            Crypto trading, <span className="text-green">made simple.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted">
            Buy, sell and track Bitcoin, Ethereum, Solana and more with live prices,
            digital asset expertise, secure accounts and a modern crypto experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/signup" className="primary-btn">Create free account</Link>
            <a href="#markets" className="secondary-btn">View markets</a>
          </div>
        </div>

        <div className="panel overflow-hidden p-6 shadow-glow">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-muted">Total balance</div>
              <div className="mt-2 text-4xl font-bold">$12,458.32</div>
            </div>
            <div className="status-pill"><TrendingUp size={14} /> +12.5% (24h)</div>
          </div>

          <svg className="mt-4 h-24 w-full" viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="heroFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#22e08a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#22e08a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,70 L30,62 L60,66 L90,50 L120,56 L150,40 L180,46 L210,30 L240,36 L270,20 L300,12 L300,90 L0,90 Z" fill="url(#heroFill)" />
            <path d="M0,70 L30,62 L60,66 L90,50 L120,56 L150,40 L180,46 L210,30 L240,36 L270,20 L300,12" fill="none" stroke="#22e08a" strokeWidth="2.5" />
          </svg>

          <div className="mt-8 space-y-3">
            {coins.slice(0, 3).map((item) => (
              <div key={item.sym} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs uppercase text-muted">{item.sym}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{fmt(item.price)}</div>
                  <div className={item.change >= 0 ? 'text-sm text-green' : 'text-sm text-red'}>
                    {item.change >= 0 ? '+' : ''}{item.change.toFixed(1)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Live markets</h2>
          <p className="mt-3 max-w-2xl text-muted">Prices update in real time. Trade the top assets in a few taps.</p>
        </div>

        <div className="panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-4">Asset</th>
                  <th className="px-5 py-4 text-right">Price</th>
                  <th className="px-5 py-4 text-right">24h change</th>
                  <th className="px-5 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((item) => (
                  <tr key={item.sym} className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
                    <td className="px-5 py-4">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs uppercase text-muted">{item.sym}</div>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold">{fmt(item.price)}</td>
                    <td className={`px-5 py-4 text-right font-semibold ${item.change >= 0 ? 'text-green' : 'text-red'}`}>
                      {item.change >= 0 ? '+' : ''}{item.change.toFixed(1)}%
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link to="/signup" className="primary-btn !px-4 !py-2 text-sm">Trade</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="features" className="pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Why XPOT</h2>
          <p className="mt-3 max-w-2xl text-muted">Everything you need to trade with confidence, on any device.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: '⚡', title: 'Real-time market data', desc: 'Live prices, charts and trends, updated continuously.' },
            { icon: '🛡️', title: 'Secure & reliable', desc: 'Modern security practices protect your account and funds.' },
            { icon: '📱', title: 'Fully responsive', desc: 'A consistent experience on phone, tablet and desktop.' },
            { icon: '🎨', title: 'Clean, modern UI', desc: 'Designed to be easy to read and fast to use.' },
          ].map((feature) => (
            <div key={feature.title} className="panel p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-green">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="mt-3 max-w-2xl text-muted">Start trading in three simple steps.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: 'Create an account', desc: 'Sign up with your email in under a minute.' },
            { title: 'Add funds', desc: 'Deposit using a bank transfer or card.' },
            { title: 'Start trading', desc: 'Buy or sell any supported asset at live prices.' },
          ].map((step, idx) => (
            <div key={step.title} className="panel p-6">
              <div className="mb-4 text-3xl font-black text-green/70">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="signup" className="pb-20">
        <div className="panel bg-gradient-to-br from-[#0d3d2b] to-[#071a13] p-10 text-center">
          <h2 className="text-4xl font-bold">Your next big move starts here</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">Join XPOT today. No hidden fees on your first deposit.</p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="you@example.com" aria-label="Email address" className="sm:flex-1" />
            <button type="submit" className="primary-btn min-w-[180px]">Get started</button>
          </form>
        </div>
      </section>
    </>
  )
}
