import React from 'react'
import { ArrowUpRight, Search, TrendingUp } from 'lucide-react'

const marketRows = [
  { name: 'Bitcoin', ticker: 'BTC', price: 67432.21, change: 2.4, vol: '$38.2B' },
  { name: 'Ethereum', ticker: 'ETH', price: 3248.17, change: 3.1, vol: '$18.6B' },
  { name: 'Solana', ticker: 'SOL', price: 158.32, change: 5.6, vol: '$7.1B' },
  { name: 'BNB', ticker: 'BNB', price: 595.41, change: 1.8, vol: '$2.8B' },
  { name: 'Cardano', ticker: 'ADA', price: 0.62, change: -0.9, vol: '$1.1B' },
]

export default function Markets() {
  return (
    <div className="space-y-8 pb-8 pt-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.14em] text-muted">Markets</div>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Top crypto assets</h1>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 md:min-w-[260px]">
          <Search size={16} className="text-muted" />
          <input type="text" placeholder="Search markets" className="border-0 bg-transparent p-0 text-sm" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          { title: 'Market cap', value: '$2.78T', change: '+4.1%' },
          { title: '24h volume', value: '$94.6B', change: '+7.3%' },
          { title: 'BTC dominance', value: '48.2%', change: '+1.2%' },
        ].map((item) => (
          <div key={item.title} className="panel p-5">
            <div className="text-sm text-muted">{item.title}</div>
            <div className="mt-4 text-3xl font-bold">{item.value}</div>
            <div className="mt-2 inline-flex items-center gap-2 text-sm text-green"><TrendingUp size={14} /> {item.change}</div>
          </div>
        ))}
      </div>

      <div className="panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-xl font-bold">Market overview</h2>
          <div className="badge">Updated now</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="text-xs uppercase tracking-[0.12em] text-muted">
              <tr>
                <th className="px-5 py-4">Asset</th>
                <th className="px-5 py-4 text-right">Price</th>
                <th className="px-5 py-4 text-right">24h change</th>
                <th className="px-5 py-4 text-right">Volume</th>
                <th className="px-5 py-4 text-right">Trade</th>
              </tr>
            </thead>
            <tbody>
              {marketRows.map((row) => (
                <tr key={row.ticker} className="border-t border-white/5 hover:bg-white/[0.02]">
                  <td className="px-5 py-4">
                    <div className="font-semibold">{row.name}</div>
                    <div className="text-xs uppercase text-muted">{row.ticker}</div>
                  </td>
                  <td className="px-5 py-4 text-right font-semibold">${row.price.toLocaleString()}</td>
                  <td className={`px-5 py-4 text-right font-semibold ${row.change >= 0 ? 'text-green' : 'text-red'}`}>
                    {row.change >= 0 ? '+' : ''}{row.change.toFixed(1)}%
                  </td>
                  <td className="px-5 py-4 text-right text-muted">{row.vol}</td>
                  <td className="px-5 py-4 text-right">
                    <button className="secondary-btn !px-3 !py-2 text-sm">Trade</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
