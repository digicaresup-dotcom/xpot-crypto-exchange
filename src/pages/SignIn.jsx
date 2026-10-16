import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function SignIn() {
  return (
    <div className="mx-auto max-w-md pb-16 pt-10">
      <div className="panel p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green/10 text-green">
            <ShieldCheck size={22} />
          </div>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-sm text-muted">Sign in to continue your crypto journey.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-muted">Email address</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-muted">Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted"><input type="checkbox" className="h-4 w-4" /> Remember me</label>
            <Link to="/signup" className="text-green">Need account?</Link>
          </div>

          <Link to="/dashboard" className="primary-btn w-full justify-center">
            Sign in <ArrowRight size={16} />
          </Link>
        </form>
      </div>
    </div>
  )
}
