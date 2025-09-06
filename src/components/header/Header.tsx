'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useHeader } from './HeaderProvider'

export default function Header() {
  const { mode } = useHeader()
  const isTransparent = mode === 'transparent'

  const barRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const [pastBar, setPastBar] = useState(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setPastBar(entry.intersectionRatio === 0),
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const baseHeader =
    'font-body text-sm border-b border-brand-light w-full fixed left-0 right-0 z-50'

  const positionClass = pastBar ? 'top-0' : 'top-[var(--ann-h)]'

  const skinClass = pastBar || !isTransparent
    ? 'bg-brand-light text-brand-dark shadow-sm'
    : 'bg-transparent text-brand-light'

  const paddingClass = pastBar ? 'py-3' : 'py-6'

  const logoWidth = pastBar ? 'w-10' : 'w-14';

  const LogoSvg = () => <svg width="100%" height="100%" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.3088 0H60V0.929294C58.0562 1.23906 56.4362 3.66576 54.0388 9.96465L43.542 38H41.2093L31.3606 13.9918L20.6047 38H18.272L5.89628 6.60865C4.21159 2.32336 2.78626 1.13597 0 0.929294V0H15.0973V0.929294C11.1448 1.13572 10.1081 2.06527 11.2744 5.21458L20.9936 30.0489L29.7408 10.0163L28.3152 6.60865C26.5009 2.27169 25.2698 1.13572 22.2893 0.929294V0H37.3866V0.929294C33.4991 1.13572 32.3975 2.06527 33.6933 5.21458L43.6069 29.4294L50.9288 9.44846C53.1966 3.20124 53.5206 1.23906 49.309 0.929294L49.3088 0Z" fill="currentColor"/></svg>;

  return (
    <div className="relative z-40">
      {/* Announcement bar */}
      <div ref={barRef} className="bg-brand-primary text-brand-light py-2 font-body text-xs">
        <div className="container text-center">
          Book Your Tickets For Wigmore Presents 2026
        </div>
      </div>

      {/* Header */}
      <header ref={headerRef} className={`${baseHeader} ${positionClass} ${skinClass}`}>
        <div className={`container mx-auto flex items-center justify-between transition-[padding] duration-200 ${paddingClass}`}>
          <div className="flex items-center gap-12">
            {/* <Image
              src="/assets/wigmore-logo.svg"
              alt="Wigmore Logo"
              width={60}
              height={38}
              priority
            /> */}
            <div className={`${logoWidth}`}>
              <LogoSvg />
            </div>

            {/* Primary nav (collapse to a tighter look past the bar if you want) */}
            <nav aria-label="Primary" className="hidden md:block">
              <ul className={`flex items-center gap-8 ${pastBar ? 'text-sm' : 'text-base'}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li className="flex items-center gap-2">
                  <span>Training</span>
                  <Image src="/assets/icon-chevron.svg" alt="" width={12} height={12} />
                </li>
                <li><a href="/exclusives">Exclusives</a></li>
                <li><a href="/offers">Offers</a></li>
                <li><a href="/news">News</a></li>
              </ul>
            </nav>
          </div>

          {/* Search */}
          <div
            className={`flex w-full max-w-52 items-center gap-2 rounded-full border px-3 py-1.5
              ${isTransparent && !pastBar ? 'border-brand-light' : 'border-brand-dark'}`}
          >
            <Image src="/assets/icon-search.svg" alt="" width={12} height={12} />
            <span>Search</span>
          </div>

          {/* Auth / CTA */}
          <div className="flex items-center gap-4">
            <a className="text-sm" href="/login">Login</a>
            <a
              href="/signup"
              className="flex items-center gap-2 rounded-full border border-transparent bg-brand-secondary px-4 py-1.5 text-brand-light"
            >
              <span>Sign up</span>
              <Image src="/assets/icon-arrow.svg" alt="" width={16} height={16} />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}
