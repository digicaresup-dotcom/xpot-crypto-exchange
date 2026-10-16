import React from 'react'

const users = [
  { name: 'Alicia Parker', country: 'Canada', tier: 'Advance', status: 'Verified', balance: '$128,540' },
  { name: 'Marta Krüger', country: 'Germany', tier: 'Pro', status: 'Pending', balance: '$72,180' },
  { name: 'Theo Martin', country: 'United Kingdom', tier: 'Standard', status: 'Verified', balance: '$42,610' },
  { name: 'Ibrahim Saleh', country: 'United Arab Emirates', tier: 'Pro', status: 'Verified', balance: '$180,900' },
]

const metrics = [
  { label: 'Active users', value: '18.4K' },
  { label: 'Transactions', value: '8.2K' },
  { label: 'Disputes', value: '34' },
  { label: 'KYC pending', value: '216' },
]

export default function Admin() {
  return (
    <div className="space-y-8 pb-8 pt-6">
      <div>
        <div className="text-sm uppercase tracking-[0.14em] text-muted">Admin</div>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">Operations dashboard</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="panel p-5">
            <div className="text-sm text-muted">{metric.label}</div>
            <div className="mt-4 text-3xl font-bold">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-xl font-bold">Users</h2>
          <button className="secondary-btn !px-3 !py-2 text-sm">Export</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="text-xs uppercase tracking-[0.12em] text-muted">
              <tr>
                <th className="px-5 py-4">User</th>
                <th className="px-5 py-4">Country</th>
                <th className="px-5 py-4">Tier</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name} className="border-t border-white/5">
                  <td className="px-5 py-4 font-semibold">{user.name}</td>
                  <td className="px-5 py-4 text-muted">{user.country}</td>
                  <td className="px-5 py-4 text-muted">{user.tier}</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.1em] ${user.status === 'Verified' ? 'bg-green/10 text-green' : 'bg-yellow-500/10 text-yellow-400'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-semibold">{user.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
