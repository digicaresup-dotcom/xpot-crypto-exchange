import React from 'react'
import { ArrowDownLeft, ArrowUpRight, CreditCard, Landmark, Wallet as WalletIcon } from 'lucide-react'

const assets = [
  { label: 'BTC Wallet', value: '1.84 BTC', fiat: '$122,980' },
  { label: 'ETH Wallet', value: '18.63 ETH', fiat: '$56,200' },
  { label: 'US Dollar', value: '$5,240', fiat: 'Available' },
]

export default function Wallet() {
  return (
    <div className="space-y-8 pb-8 pt-6">
      <div>
        <div className="text-sm uppercase tracking-[0.14em] text-muted">Wallet</div>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">Deposit & withdraw</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {assets.map((asset) => (
          <div key={asset.label} className="panel p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted">{asset.label}</div>
              <div className="rounded-xl bg-green/10 p-2 text-green"><WalletIcon size={16} /></div>
            </div>
            <div className="mt-5 text-2xl font-bold">{asset.value}</div>
            <div className="mt-2 text-sm text-muted">{asset.fiat}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <div className="panel p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-green/10 p-2 text-green"><ArrowDownLeft size={18} /></div>
            <div>
              <div className="text-sm text-muted">Deposit</div>
              <div className="text-xl font-bold">Bank transfer / card</div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-muted">Method</label>
              <select>
                <option>Credit / debit card</option>
                <option>Bank transfer</option>
                <option>Crypto transfer</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted">Amount</label>
              <input type="text" placeholder="$1,000.00" />
            </div>
            <button className="primary-btn w-full justify-center">Submit deposit</button>
          </div>
        </div>

        <div className="panel p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-green/10 p-2 text-green"><ArrowUpRight size={18} /></div>
            <div>
              <div className="text-sm text-muted">Withdraw</div>
              <div className="text-xl font-bold">To account</div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-muted">Destination</label>
              <select>
                <option>Bank account: Canada</option>
                <option>Bank account: Europe</option>
                <option>Crypto withdrawal</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted">Amount</label>
              <input type="text" placeholder="$500.00" />
            </div>
            <button className="secondary-btn w-full justify-center">Request withdrawal</button>
          </div>
        </div>
      </div>
    </div>
  )
}
