import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Bell, BriefcaseBusiness, LayoutDashboard, LifeBuoy, ShieldCheck, Wallet } from 'lucide-react'

const navItems = [
  { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Markets', to: '/markets', icon: BriefcaseBusiness },
  { label: 'Wallet', to: '/wallet', icon: Wallet },
  { label: 'Support', to: '/support', icon: LifeBuoy },
  { label: 'Admin', to: '/admin', icon: ShieldCheck },
]

export default function Layout({ children }) {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="app-shell">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05090a]/80 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1400px,calc(100%-32px))] items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-wide text-green">
            XPOT<span className="text-text">Exchange</span>
          </Link>

          {!isLanding ? (
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map(({ label, to, icon: Icon }) => (
                <Link key={to} to={to} className={`flex items-center gap-2 text-sm ${location.pathname === to ? 'text-green' : 'text-muted hover:text-green'}`}>
                  <Icon size={16} /> {label}
                </Link>
              ))}
            </nav>
          ) : (
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#markets" className="text-sm text-muted hover:text-green">Markets</a>
              <a href="#features" className="text-sm text-muted hover:text-green">Features</a>
              <a href="#how" className="text-sm text-muted hover:text-green">How it works</a>
            </nav>
          )}

          <div className="flex items-center gap-3">
            {isLanding ? (
              <>
                <Link to="/signin" className="text-sm font-medium text-text">Sign in</Link>
                <Link to="/signup" className="primary-btn">Get started</Link>
              </>
            ) : (
              <>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted">
                  <Bell size={16} />
                </button>
                <Link to="/signin" className="primary-btn">New trade</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="route-container">{children}</main>
    </div>
  )
}
