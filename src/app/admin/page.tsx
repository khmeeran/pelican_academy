'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, User, ShieldCheck } from 'lucide-react'

export default function AdminLoginPage() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdmin')
    if (isAdmin === 'true') {
      router.push('/admin/dashboard')
    }
  }, [router])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (id === 'admin' && password === 'admin123') {
      sessionStorage.setItem('isAdmin', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid ID or Password')
    }
  }

  return (
    <div className="min-h-screen bg-background-warm flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl border border-primary/5"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-6">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-poppins font-bold text-primary-deep">Admin Login</h1>
          <p className="text-text-secondary text-sm mt-2">Enter credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-2 ml-2">Admin ID</label>
            <div className="relative">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" size={18} />
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID"
                required
                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-inter"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-2 ml-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/30" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-inter"
              />
            </div>
          </div>
          
          {error && (
            <p className="text-red-500 text-xs text-center font-bold uppercase tracking-wider">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary-deep text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-primary/20"
          >
            Access Dashboard
          </button>
        </form>
      </motion.div>
    </div>
  )
}
