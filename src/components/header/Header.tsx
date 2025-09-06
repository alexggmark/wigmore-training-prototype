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
    'font-body text-sm border-b border-brand-light w-full left-0 right-0 z-50'

  const positionClass = pastBar ? 'top-0 fixed' : 'top-[var(--ann-h)] absolute top'

  const skinClass = pastBar || !isTransparent
    ? 'bg-brand-light text-brand-dark shadow-md'
    : 'bg-transparent text-brand-light'

  const paddingClass = pastBar ? 'py-4' : 'py-6'

  const logoWidth = pastBar ? 'w-10' : 'w-14';

  const LogoSvg = () => <svg width="100%" height="100%" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.3088 0H60V0.929294C58.0562 1.23906 56.4362 3.66576 54.0388 9.96465L43.542 38H41.2093L31.3606 13.9918L20.6047 38H18.272L5.89628 6.60865C4.21159 2.32336 2.78626 1.13597 0 0.929294V0H15.0973V0.929294C11.1448 1.13572 10.1081 2.06527 11.2744 5.21458L20.9936 30.0489L29.7408 10.0163L28.3152 6.60865C26.5009 2.27169 25.2698 1.13572 22.2893 0.929294V0H37.3866V0.929294C33.4991 1.13572 32.3975 2.06527 33.6933 5.21458L43.6069 29.4294L50.9288 9.44846C53.1966 3.20124 53.5206 1.23906 49.309 0.929294L49.3088 0Z" fill="currentColor"/></svg>;
  const SearchSvg = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.36523 0.5C5.44109 0.500035 6.34016 0.87319 7.09082 1.62891C7.84264 2.38579 8.21289 3.28681 8.21289 4.35938C8.21287 4.78975 8.14542 5.19836 8.01172 5.58691C7.87855 5.97375 7.6781 6.34007 7.40625 6.68652L7.13086 7.03711L7.44727 7.35059L11.4766 11.3467L11.4795 11.3496C11.4911 11.361 11.4941 11.3677 11.4951 11.3701C11.4964 11.3733 11.5 11.3841 11.5 11.4072C11.5 11.4309 11.4959 11.4421 11.4941 11.4463C11.4925 11.4503 11.4886 11.4586 11.4756 11.4717L11.4736 11.4736C11.4597 11.4877 11.4507 11.4923 11.4463 11.4941C11.442 11.4959 11.4303 11.5 11.4072 11.5C11.3859 11.5 11.3773 11.4966 11.376 11.4961C11.3752 11.4958 11.3738 11.4954 11.3721 11.4941L11.3496 11.4717L7.33594 7.46191L7.01074 7.13672L6.65918 7.43457C6.44744 7.61429 6.2064 7.76687 5.93359 7.89062L5.64941 8.00488C5.2621 8.14254 4.84366 8.21382 4.39062 8.21387C3.29383 8.21387 2.38311 7.83884 1.62891 7.08398C0.872518 6.3267 0.5 5.42636 0.5 4.35645C0.500061 3.28684 0.872617 2.38715 1.62988 1.62988C2.38659 0.873075 3.28911 0.5 4.36523 0.5ZM4.375 0.641602C3.34542 0.641602 2.45383 1.00667 1.73047 1.72949V1.73047C1.00864 2.45211 0.641664 3.3365 0.641602 4.35645C0.641602 5.37646 1.00791 6.26166 1.72949 6.9834C2.4526 7.70663 3.34461 8.07227 4.375 8.07227C5.3977 8.07222 6.28179 7.70546 6.99707 6.98145C7.71054 6.25925 8.07227 5.37456 8.07227 4.35645C8.07221 3.40193 7.754 2.56501 7.12598 1.86914L6.99609 1.73242C6.2806 1.00856 5.39707 0.64165 4.375 0.641602Z" fill="currentColor" stroke="currentColor"/></svg>;
  const CaretSvg = () => <svg width="12" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L7 7L1 1" stroke="currentColor"/></svg>;
  const AccountSvg = () => <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7956 14.6815C12.4537 13.6892 11.7004 12.8124 10.6526 12.187C9.6047 11.5616 8.32081 11.2227 7 11.2227C5.6792 11.2227 4.3953 11.5616 3.34743 12.187C2.29957 12.8124 1.5463 13.6892 1.20445 14.6815" stroke="currentColor" strokeLinecap="round"/><ellipse cx="7" cy="4.11111" rx="3" ry="3.11111" stroke="currentColor" strokeLinecap="round"/></svg>;

  return (
    <div className="relative z-40">
      {/* Announcement bar */}
      <div ref={barRef} className="bg-brand-primary text-brand-light py-2 font-body text-xs">
        <div className="container mx-auto text-center">
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
                  {/* <Image src="/assets/icon-chevron.svg" alt="" width={12} height={12} /> */}
                  <CaretSvg />
                </li>
                <li><a href="/exclusives">Exclusives</a></li>
                <li><a href="/offers">Offers</a></li>
                <li><a href="/news">News</a></li>
              </ul>
            </nav>
          </div>

          {/* Search */}
          <div
            className={`flex w-full max-w-52 items-center gap-2 rounded-full border bg-brand-dark/5 px-3 py-1.5
              ${isTransparent && !pastBar ? 'border-brand-light' : 'border-brand-dark'}`}
          >
            {/* <Image src="/assets/icon-search.svg" alt="" width={12} height={12} /> */}
            <SearchSvg />
            <span>Search</span>
          </div>

          {/* Auth / CTA */}
          <div className="flex items-center gap-4">
            <a className="flex flex-row items-center gap-2" href="/login">
              <AccountSvg />
              <span className="text-sm">Login</span>
            </a>
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
