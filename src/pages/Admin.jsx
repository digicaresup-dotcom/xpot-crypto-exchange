import React, { useState } from 'react'

const tickets = [
  { id: '#TK-101', topic: 'Deposit verification', status: 'Open', user: 'Alicia P.', date: 'Today' },
  { id: '#TK-098', topic: 'Withdrawal delay', status: 'Pending', user: 'Marta K.', date: 'Yesterday' },
  { id: '#TK-087', topic: 'Account security', status: 'Resolved', user: 'Theo M.', date: '2 days ago' },
]

export default function Support() {
  const [message, setMessage] = useState('')

  return (
    <div className="space-y-8 pb-8 pt-6">
      <div>
        <div className="text-sm uppercase tracking-[0.14em] text-muted">Support</div>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">How can we help?</h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_.9fr]">
        <div className="panel p-6">
          <h2 className="mb-5 text-xl font-bold">Create ticket</h2>
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-muted">Topic</label>
              <select>
                <option>Account access</option>
                <option>Deposit / withdrawal</option>
                <option>Verification</option>
                <option>General support</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted">Message</label>
              <textarea rows="6" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what happened..." />
            </div>
            <button className="primary-btn w-full justify-center">Submit ticket</button>
          </div>
        </div>

        <div className="panel p-6">
          <h2 className="mb-5 text-xl font-bold">Recent tickets</h2>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{ticket.topic}</div>
                    <div className="text-xs text-muted">{ticket.id} · {ticket.user}</div>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.1em] ${ticket.status === 'Open' ? 'bg-green/10 text-green' : ticket.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-white/10 text-muted'}`}>
                    {ticket.status}
                  </span>
                </div>
                <div className="mt-3 text-xs text-muted">{ticket.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
