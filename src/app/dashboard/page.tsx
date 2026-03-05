'use client'

import { useSession, signOut } from 'next-auth/react'

export default function Dashboard() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#e07a5f]/20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-[#e07a5f]/10" />
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border-4 border-[#e07a5f]/20 animate-spin" />
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#e07a5f] animate-spin" />
          </div>
          <p className="text-[#f5f0e8]/70 text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Loading your workspace...
          </p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full border border-[#e07a5f]/10" />
      <div className="absolute top-60 right-40 w-64 h-64 rounded-full border border-[#e07a5f]/5" />
      <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full border border-[#e07a5f]/8" />

      <nav className="relative z-10 bg-[#242424]/80 backdrop-blur-xl border-b border-[#f5f0e8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-[#f5f0e8]" style={{ fontFamily: 'Syne, sans-serif' }}>
                Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-[#1a1a1a] border border-[#f5f0e8]/10">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-[#f5f0e8] font-medium">{session.user?.name}</span>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="px-5 py-2.5 bg-linear-to-r from-[#e07a5f] to-[#c75f4a] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e07a5f]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Welcome Back, {session.user?.name?.split(' ')[0]}
          </h2>
          <p className="text-[#f5f0e8]/60 text-xl">
            Your workspace is ready and waiting for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group relative bg-[#242424] rounded-2xl p-6 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f5f0e8]/90 mb-2">User Profile</h3>
              <p className="text-[#f5f0e8]/60 text-sm mb-3">Account Information</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#f5f0e8]/50 text-sm">Username</span>
                  <span className="text-[#f5f0e8] font-medium">{session.user?.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#f5f0e8]/50 text-sm">Email</span>
                  <span className="text-[#f5f0e8] font-medium text-sm">{session.user?.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative bg-[#242424] rounded-2xl p-6 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f5f0e8]/90 mb-2">Session Status</h3>
              <p className="text-[#f5f0e8]/60 text-sm mb-3">Authentication State</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[#f5f0e8] font-medium">{status === 'authenticated' ? 'Active Session' : 'Inactive'}</span>
              </div>
              <p className="text-[#f5f0e8]/50 text-xs mt-2">
                Securely connected via {session.user?.image ? 'GitHub OAuth' : 'Credentials'}
              </p>
            </div>
          </div>

          <div className="group relative bg-[#242424] rounded-2xl p-6 border border-[#f5f0e8]/10 hover:border-[#e07a5f]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#e07a5f]/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#e07a5f]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#e07a5f] to-[#c75f4a] flex items-center justify-center mb-4">
                {session.user?.image ? (
                  <svg className="w-6 h-6 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold text-[#f5f0e8]/90 mb-2">Authentication</h3>
              <p className="text-[#f5f0e8]/60 text-sm mb-3">Login Provider</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#f5f0e8]/10">
                {session.user?.image && (
                  <img src={session.user.image} alt="GitHub" className="w-5 h-5 rounded-full" />
                )}
                <span className="text-[#f5f0e8] font-medium">
                  {session.user?.image ? 'GitHub' : 'Email & Password'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#242424] rounded-2xl p-8 border border-[#f5f0e8]/10">
          <h3 className="text-2xl font-bold text-[#f5f0e8] mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="group p-4 rounded-xl bg-[#1a1a1a] border border-[#f5f0e8]/10 hover:border-[#e07a5f]/50 hover:shadow-lg hover:shadow-[#e07a5f]/10 transition-all duration-300 text-left">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#e07a5f]/20 to-[#c75f4a]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#e07a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="text-[#f5f0e8] font-semibold mb-1">Edit Profile</h4>
              <p className="text-[#f5f0e8]/50 text-sm">Update your information</p>
            </button>

            <button className="group p-4 rounded-xl bg-[#1a1a1a] border border-[#f5f0e8]/10 hover:border-[#e07a5f]/50 hover:shadow-lg hover:shadow-[#e07a5f]/10 transition-all duration-300 text-left">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#e07a5f]/20 to-[#c75f4a]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#e07a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-[#f5f0e8] font-semibold mb-1">Security</h4>
              <p className="text-[#f5f0e8]/50 text-sm">Password & privacy</p>
            </button>

            <button className="group p-4 rounded-xl bg-[#1a1a1a] border border-[#f5f0e8]/10 hover:border-[#e07a5f]/50 hover:shadow-lg hover:shadow-[#e07a5f]/10 transition-all duration-300 text-left">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#e07a5f]/20 to-[#c75f4a]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#e07a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-[#f5f0e8] font-semibold mb-1">Settings</h4>
              <p className="text-[#f5f0e8]/50 text-sm">Preferences & config</p>
            </button>

            <button className="group p-4 rounded-xl bg-[#1a1a1a] border border-[#f5f0e8]/10 hover:border-[#e07a5f]/50 hover:shadow-lg hover:shadow-[#e07a5f]/10 transition-all duration-300 text-left">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#e07a5f]/20 to-[#c75f4a]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#e07a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-[#f5f0e8] font-semibold mb-1">Help Center</h4>
              <p className="text-[#f5f0e8]/50 text-sm">Docs & support</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
