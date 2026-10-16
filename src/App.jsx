import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      {/* future routes: /dashboard, /auth, /admin, /support */}
    </Routes>
  )
}

export default App
