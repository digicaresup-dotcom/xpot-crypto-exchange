import React, { useEffect, useState } from 'react'

const initialCoins = [
  { name: "Bitcoin", sym: "BTC", price: 67432.21, change: 2.4 },
  { name: "Ethereum", sym: "ETH", price: 3248.17, change: 3.1 },
  { name: "Solana", sym: "SOL", price: 158.32, change: 5.6 },
  { name: "BNB", sym: "BNB", price: 595.41, change: 1.8 },
  { name: "Cardano", sym: "ADA", price: 0.62, change: -0.9 }
]

const fmt = n => n.toLocaleString("en-US", { style: "currency", currency: "USD",
  minimumFractionDigits: n < 1 ? 2 : 2, maximumFractionDigits: n < 1 ? 4 : 2 });

export default function Landing(){
  const [coins, setCoins] = useState(initialCoins)
  const [msg, setMsg] = useState('')

  useEffect(()=>{
    const id = setInterval(()=>{
      setCoins(prev => prev.map(c => {
        const drift = (Math.random() - 0.5) * 0.002
        const price = +(c.price * (1 + drift)).toFixed(6)
        const change = +((Math.random()-0.5)*2 + c.change*0.5).toFixed(2)
        return {...c, price, change}
      }))
    }, 3000)
    return ()=> clearInterval(id)
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    const email = e.target.email.value
    setMsg(`Thanks! We'll be in touch at ${email} .`)
    e.target.reset()
  }

  return (
    <div>
      <header>
        <div className="logo">XPOT<span>Exchange</span></div>
        <nav>
          <a href="#markets">Markets</a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#signup">Sign up</a>
        </nav>
        <a className="btn" href="#signup">Get started</a>
      </header>

      <section className="hero">
        <div>
          <span className="tag">Trade &bull; Invest &bull; Grow</span>
          <h1>Crypto trading, <em>made simple.</em></h1>
          <p>Buy, sell and track Bitcoin, Ethereum, Solana and more with live prices, bank-grade security and a clean interface built for everyone.</p>
          <div className="hero-actions">
            <a className="btn" href="#signup">Create free account</a>
            <a className="btn ghost" href="#markets">View markets</a>
          </div>
        </div>

        <div className="card" aria-label="Portfolio preview">
          <div className="balance-label">Total balance</div>
          <div className="balance" id="balance">$12,458.32</div>
          <div className="up">+12.5% (24h)</div>
          <svg className="sparkline" viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#22e08a" stopOpacity=".35"/>
                <stop offset="100%" stopColor="#22e08a" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,70 L30,62 L60,66 L90,50 L120,56 L150,40 L180,46 L210,30 L240,36 L270,20 L300,12 L300,90 L0,90 Z" fill="url(#g)"/>
            <path d="M0,70 L30,62 L60,66 L90,50 L120,56 L150,40 L180,46 L210,30 L240,36 L270,20 L300,12" fill="none" stroke="#22e08a" strokeWidth="2.5"/>
          </svg>
          <div className="coin-list">
            {coins.slice(0,3).map(c => (
              <div className="coin" key={c.sym}>
                <div><strong>{c.name}</strong><small style={{color:'var(--muted)'}}>{c.sym}</small></div>
                <div className="price"><strong>{fmt(c.price)}</strong><span className={c.change>=0? 'up' : 'down'}>{c.change>=0?'+':''}{c.change}%</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="markets">
        <h2>Live markets</h2>
        <p className="sub">Prices update in real time. Trade the top assets in a few taps.</p>
        <div className="card table-wrap">
          <table>
            <thead>
              <tr><th>Asset</th><th className="num">Price</th><th className="num">24h change</th><th className="num">Action</th></tr>
            </thead>
            <tbody>
              {coins.map(c => (
                <tr key={c.sym}>
                  <td><strong>{c.name}</strong> <small style={{color:'var(--muted)'}}>{c.sym}</small></td>
                  <td className="num">{fmt(c.price)}</td>
                  <td className={`num ${c.change >= 0 ? 'up' : 'down'}`}>{c.change >= 0 ? '+' : ''}{c.change.toFixed(1)}%</td>
                  <td className="num"><a className="btn" style={{padding:'8px 16px', fontSize:'.85rem'}} href="#signup">Trade</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="features">
        <h2>Why XPOT</h2>
        <p className="sub">Everything you need to trade with confidence, on any device.</p>
        <div className="features">
          <div className="card feature"><div className="icon">⚡</div><h3>Real-time market data</h3><p>Live prices, charts and trends, updated continuously.</p></div>
          <div className="card feature"><div className="icon">🛡️</div><h3>Secure & reliable</h3><p>Modern security practices protect your account and funds.</p></div>
          <div className="card feature"><div className="icon">📱</div><h3>Fully responsive</h3><p>A consistent experience on phone, tablet and desktop.</p></div>
          <div className="card feature"><div className="icon">🎨</div><h3>Clean, modern UI</h3><p>Designed to be easy to read and fast to use.</p></div>
        </div>
      </section>

      <section id="how">
        <h2>How it works</h2>
        <p className="sub">Start trading in three simple steps.</p>
        <div className="steps">
          <div className="card step"><h3>Create an account</h3><p>Sign up with your email in under a minute.</p></div>
          <div className="card step"><h3>Add funds</h3><p>Deposit using a bank transfer or card.</p></div>
          <div className="card step"><h3>Start trading</h3><p>Buy or sell any supported asset at live prices.</p></div>
        </div>
      </section>

      <section id="signup">
        <div className="cta">
          <h2>Your next big move starts here</h2>
          <p>Join XPOT today. No hidden fees on your first deposit.</p>
          <form className="signup" id="signup-form" onSubmit={handleSubmit}>
            <input type="email" id="email" name="email" placeholder="you@example.com" required aria-label="Email address" />
            <button className="btn" type="submit">Get started</button>
          </form>
          <div id="signup-msg">{msg}</div>
        </div>
      </section>

      <footer>
        <div><strong className="logo">XPOT<span>Exchange</span></strong><br/>&copy; 2026 XPOT. All rights reserved.</div>
        <div>Crypto assets are volatile. Trade responsibly.</div>
      </footer>
    </div>
  )
}
