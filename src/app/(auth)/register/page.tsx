'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isGithubLoading, setIsGithubLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsSubmitting(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        setError(data.error || 'Registration failed')
        setIsSubmitting(false)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/login')
      }, 2500)
    } catch (error) {
      setError('Something went wrong. Please try again')
      setIsSubmitting(false)
    }
  }

  const handleGithubSignIn = async () => {
    setIsGithubLoading(true)
    await signIn('github', { callbackUrl: '/dashboard' })
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#e07a5f]/20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-[#e07a5f]/10" />

        <div className="relative z-10 text-center">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-[#e07a5f] animate-ping opacity-20" />
              <div className="relative w-32 h-32 rounded-full bg-[#e07a5f] flex items-center justify-center">
                <svg className="w-16 h-16 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-[#f5f0e8] mb-4 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Welcome Aboard
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden p-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#e07a5f]/20" />
      <div className="absolute top-40 right-40 w-32 h-32 rounded-full border border-[#e07a5f]/10" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-[#e07a5f]/15" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg h-[95%] max-h-150 bg-[#e07a5f]/10 rounded-3xl blur-2xl" />

      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-[#242424] rounded-3xl p-8 md:p-12 border border-[#f5f0e8]/10 shadow-2xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                Create Account
              </h1>
            </div>
            <p className="text-[#f5f0e8]/60 text-sm md:text-base ml-1">
              Join thousands of creators building the future
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* GitHub Sign Up Button */}
          <button
            onClick={handleGithubSignIn}
            disabled={isGithubLoading || isSubmitting}
            className="w-full mb-6 px-6 py-4 bg-[#242424] border-2 border-[#f5f0e8]/20 text-[#f5f0e8] font-semibold text-lg rounded-xl hover:bg-[#2a2a2a] hover:border-[#f5f0e8]/30 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            {isGithubLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Connecting to GitHub...
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Continue with GitHub
              </>
            )}
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#f5f0e8]/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#242424] text-[#f5f0e8]/50">Or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label
                htmlFor="username"
                className="block text-[#f5f0e8]/90 text-sm font-medium mb-2 ml-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#1a1a1a] border-2 border-[#f5f0e8]/10 rounded-xl text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#e07a5f] focus:ring-4 focus:ring-[#e07a5f]/10 transition-all duration-200"
                placeholder="Choose a unique username"
                required
                disabled={isSubmitting || isGithubLoading}
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-[#f5f0e8]/90 text-sm font-medium mb-2 ml-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#1a1a1a] border-2 border-[#f5f0e8]/10 rounded-xl text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#e07a5f] focus:ring-4 focus:ring-[#e07a5f]/10 transition-all duration-200"
                placeholder="your@email.com"
                required
                disabled={isSubmitting || isGithubLoading}
              />
            </div>

            <div className="group">
              <label
                htmlFor="password"
                className="block text-[#f5f0e8]/90 text-sm font-medium mb-2 ml-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#1a1a1a] border-2 border-[#f5f0e8]/10 rounded-xl text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#e07a5f] focus:ring-4 focus:ring-[#e07a5f]/10 transition-all duration-200"
                placeholder="Minimum 6 characters"
                required
                disabled={isSubmitting || isGithubLoading}
              />
            </div>

            <div className="group">
              <label
                htmlFor="confirmPassword"
                className="block text-[#f5f0e8]/90 text-sm font-medium mb-2 ml-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#1a1a1a] border-2 border-[#f5f0e8]/10 rounded-xl text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#e07a5f] focus:ring-4 focus:ring-[#e07a5f]/10 transition-all duration-200"
                placeholder="Re-enter your password"
                required
                disabled={isSubmitting || isGithubLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isGithubLoading}
              className="w-full mt-8 px-6 py-4 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold text-lg rounded-xl hover:shadow-lg hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account with Email
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#f5f0e8]/60 text-sm">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-[#e07a5f] font-semibold hover:text-[#c75f4a] transition-colors duration-200 relative group"
              >
                Sign In
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e07a5f] group-hover:w-full transition-all duration-200" />
              </a>
            </p>
          </div>

          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#e07a5f]/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#e07a5f]/20 rounded-br-3xl" />
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-[#e07a5f]/40 animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-[#e07a5f]/30 animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 rounded-full bg-[#e07a5f]/35 animate-bounce" style={{ animationDelay: '2s' }} />
    </div>
  )
}
