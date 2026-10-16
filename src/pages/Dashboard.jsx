import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SignUp() {
  return (
    <div className="mx-auto max-w-lg pb-16 pt-10">
      <div className="panel p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green/10 text-green">
            <CheckCircle2 size={22} />
          </div>
          <h1 className="text-3xl font-bold">Create account</h1>
          <p className="mt-2 text-sm text-muted">Start trading digital assets securely.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-muted">Full name</label>
            <input type="text" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-muted">Email address</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-muted">Country</label>
            <select>
              <option>Canada</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-muted">Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <Link to="/dashboard" className="primary-btn w-full justify-center">
            Create account <ArrowRight size={16} />
          </Link>

          <p className="text-center text-sm text-muted">
            Already have an account? <Link to="/signin" className="text-green">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
