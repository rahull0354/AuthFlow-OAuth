'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const { data: session, status } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Background Circles */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-[#e07a5f]/10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-40 right-40 w-64 h-64 rounded-full border border-[#e07a5f]/5 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full border border-[#e07a5f]/8 animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-[#e07a5f]/3 blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 bg-[#242424]/30 backdrop-blur-xl border-b border-[#f5f0e8]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center shadow-lg shadow-[#e07a5f]/20">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#f5f0e8]" style={{ fontFamily: 'Syne, sans-serif' }}>
                AuthFlow
              </span>
            </div>
            <div className="flex items-center gap-4">
              {status === 'authenticated' ? (
                <Link
                  href="/dashboard"
                  className="px-6 py-2.5 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-5 py-2.5 text-[#f5f0e8] font-medium rounded-xl hover:bg-[#242424] border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="px-6 py-2.5 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#242424] border border-[#f5f0e8]/10 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-2 h-2 rounded-full bg-[#e07a5f] animate-pulse" />
              <span className="text-[#f5f0e8]/70 text-sm">Secure Authentication Platform</span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-[#f5f0e8] mb-6 leading-tight animate-fade-in"
              style={{ fontFamily: 'Syne, sans-serif', animationDelay: '0.2s' }}
            >
              Authenticate with
              <span className="block mt-2 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] bg-clip-text text-transparent">
                Confidence & Style
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-[#f5f0e8]/60 mb-12 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Enterprise-grade authentication seamlessly integrated into your Next.js application.
              Beautiful, secure, and effortless.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {status === 'authenticated' ? (
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-xl hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-xl hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    Start Authentication
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="#features"
                    className="w-full sm:w-auto px-8 py-4 text-[#f5f0e8] font-medium rounded-xl border border-[#f5f0e8]/10 hover:bg-[#242424] hover:border-[#e07a5f]/30 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    Learn More
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Powerful Features
            </h2>
            <p className="text-xl text-[#f5f0e8]/60 max-w-2xl mx-auto">
              Everything you need for secure, seamless user authentication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative bg-[#242424] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Enterprise Security
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  Industry-standard encryption, secure session management, and protection against common vulnerabilities.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-[#242424] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  GitHub OAuth
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  One-click authentication with GitHub. Streamlined onboarding for developers and technical users.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-[#242424] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Username & Password
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  Traditional credential-based authentication with secure password hashing and validation.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-[#242424] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Lightning Fast
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  Optimized performance with minimal overhead. Authentication flows complete in milliseconds.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative bg-[#242424] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Beautiful UI
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  Pre-designed, responsive components that look stunning out of the box. Fully customizable.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative bg-[#242424] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Developer First
                </h3>
                <p className="text-[#f5f0e8]/60 leading-relaxed">
                  Simple API, TypeScript support, and comprehensive documentation. Integration in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication Methods Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-[#242424] rounded-3xl p-8 md:p-12 border border-[#f5f0e8]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#e07a5f]/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-[#e07a5f]/5 to-transparent rounded-tr-full" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2
                  className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Choose Your Path
                </h2>
                <p className="text-xl text-[#f5f0e8]/60 max-w-2xl mx-auto">
                  Multiple authentication methods to suit your users' preferences
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* GitHub OAuth */}
                <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#f5f0e8]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#f5f0e8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#f5f0e8]" style={{ fontFamily: 'Syne, sans-serif' }}>
                      GitHub OAuth
                    </h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-[#f5f0e8]/70">
                      <svg className="w-5 h-5 text-[#e07a5f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>One-click authentication</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#f5f0e8]/70">
                      <svg className="w-5 h-5 text-[#e07a5f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No password to remember</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#f5f0e8]/70">
                      <svg className="w-5 h-5 text-[#e07a5f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Perfect for developers</span>
                    </li>
                  </ul>
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Connect with GitHub
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>

                {/* Email & Password */}
                <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#f5f0e8]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#f5f0e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#f5f0e8]" style={{ fontFamily: 'Syne, sans-serif' }}>
                      Username & Password
                    </h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-[#f5f0e8]/70">
                      <svg className="w-5 h-5 text-[#e07a5f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Traditional authentication</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#f5f0e8]/70">
                      <svg className="w-5 h-5 text-[#e07a5f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Secure password hashing</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#f5f0e8]/70">
                      <svg className="w-5 h-5 text-[#e07a5f] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Familiar user experience</span>
                    </li>
                  </ul>
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Sign In with Username
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative bg-linear-to-br from-[#e07a5f]/20 to-[#c75f4a]/10 rounded-3xl p-12 md:p-16 text-center border border-[#e07a5f]/20 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-[#e07a5f]/30 animate-pulse" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-[#e07a5f]/20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10">
              <h2
                className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-6"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Ready to Get Started?
              </h2>
              <p className="text-xl text-[#f5f0e8]/70 mb-10 max-w-2xl mx-auto">
                Join thousands of developers who trust AuthFlow for their authentication needs.
              </p>

              {status === 'authenticated' ? (
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#e07a5f]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Access Your Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-[#e07a5f]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Start Your Journey
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#f5f0e8]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-[#f5f0e8]/60 text-sm">© 2025 AuthFlow. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="text-[#f5f0e8]/60 hover:text-[#e07a5f] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-[#f5f0e8]/60 hover:text-[#e07a5f] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-[#f5f0e8]/60 hover:text-[#e07a5f] transition-colors text-sm">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
