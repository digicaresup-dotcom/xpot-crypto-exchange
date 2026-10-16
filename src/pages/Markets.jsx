import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ArrowDownLeft, ArrowUpRight, Coins, DollarSign, TrendingUp, Wallet } from 'lucide-react'

const portfolio = [{ name: 'Jan', value: 6 }, { name: 'Feb', value: 8 }, { name: 'Mar', value: 10 }, { name: 'Apr', value: 12 }, { name: 'May', value: 15 }, { name: 'Jun', value: 18 }, { name: 'Jul', value: 20 }]

const holdings = [
  { name: 'Bitcoin', ticker: 'BTC', balance: 1.81, value: 120400, change: 3.2 },
  { name: 'Ethereum', ticker: 'ETH', balance: 18.63, value: 56200, change: 2.5 },
  { name: 'Solana', ticker: 'SOL', balance: 925, value: 146000, change: 7.1 },
  { name: 'USD', ticker: 'USD', balance: 5240, value: 5240, change: 0 },
]

const activity = [
  { id: 'TX-2039', type: 'Deposit', amount: '+$2,400', time: 'Today · 09:40 AM', status: 'Completed' },
  { id: 'TX-2038', type: 'Buy BTC', amount: '+0.42 BTC', time: 'Yesterday · 04:10 PM', status: 'Completed' },
  { id: 'TX-2037', type: 'Withdrawal', amount: '-$1,200', time: 'Yesterday · 10:28 AM', status: 'Pending' },
]

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-8 pt-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.14em] text-muted">Portfolio</div>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Overview</h1>
        </div>
        <div className="status-pill"><TrendingUp size={14} /> +12.5% this month</div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Total balance', value: '$328,640.12', detail: '+$14,500.00', icon: DollarSign },
          { label: 'Invested', value: '$289,450.00', detail: '+$8,230.00', icon: Wallet },
          { label: 'Earnings', value: '$38,190.12', detail: '+$4,870.00', icon: Coins },
          { label: 'Net P/L', value: '+$17,890.12', detail: '+8.1%', icon: ArrowUpRight },
        ].map(({ label, value, detail, icon: Icon }) => (
          <div key={label} className="panel p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-muted">{label}</span>
              <div className="rounded-xl bg-green/10 p-2 text-green"><Icon size={18} /></div>
            </div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="mt-2 text-sm text-green">{detail}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr_.9fr]">
        <div className="panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-muted">Portfolio growth</div>
              <div className="text-2xl font-bold">$328.6K</div>
            </div>
            <div className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-green">Bullish</div>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolio} margin={{ left: 0, right: 0, top: 20, bottom: 0 }}>
                <defs>
                  <linearGradient id="fill-green" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22e08a" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#22e08a" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#8aa39a', fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: '#8aa39a', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ background: '#0c1614', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#22e08a" strokeWidth={3} fill="url(#fill-green)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-muted">Allocation</div>
            <div className="badge">Diversified</div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Bitcoin', value: '42%', color: 'bg-green' },
              { label: 'Ethereum', value: '28%', color: 'bg-blue' },
              { label: 'Solana', value: '20%', color: 'bg-emerald-400' },
              { label: 'Cash', value: '10%', color: 'bg-white/60' },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted">{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
        <div className="panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <h2 className="text-xl font-bold">Holdings</h2>
            <button className="secondary-btn !py-2 !px-4 text-sm">View all</button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-4">Asset</th>
                  <th className="px-5 py-4">Balance</th>
                  <th className="px-5 py-4 text-right">Value</th>
                  <th className="px-5 py-4 text-right">24h</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.ticker} className="border-t border-white/5">
                    <td className="px-5 py-4">
                      <div className="font-semibold">{holding.name}</div>
                      <div className="text-xs uppercase text-muted">{holding.ticker}</div>
                    </td>
                    <td className="px-5 py-4">{holding.balance.toLocaleString()} {holding.ticker}</td>
                    <td className="px-5 py-4 text-right font-semibold">${holding.value.toLocaleString()}</td>
                    <td className={`px-5 py-4 text-right font-semibold ${holding.change >= 0 ? 'text-green' : 'text-red'}`}>
                      {holding.change >= 0 ? '+' : ''}{holding.change.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Activity</h2>
            <span className="badge">Live</span>
          </div>

          <div className="space-y-4">
            {activity.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{item.type}</div>
                    <div className="text-xs text-muted">{item.id}</div>
                  </div>
                  <div className={item.amount.startsWith('+') ? 'text-green' : 'text-red'}>{item.amount}</div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted">
                  <span>{item.time}</span>
                  <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.1em]">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
