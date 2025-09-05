'use client'
import { useHeader } from './HeaderProvider'
import Image from 'next/image'

export default function Header() {
  const { mode } = useHeader()
  const isTransparent = mode === 'transparent'

  return (
    <div className="bg-brand-secondary">
      {/* Announcement bar */}
      <div className="bg-brand-primary text-brand-light py-2 font-body text-xs">
        <div className="container mx-auto text-center">
          Book Your Tickets For Wigmore Presents 2026
        </div>
      </div>
      {/* Header section */}
      <header
        className={`
          ${isTransparent
            ? 'bg-transparent text-white'
            : 'bg-white/80 backdrop-blur border-b text-slate-900'}
          font-body text-sm
        `}
      >
        <div className="container mx-auto py-6 flex flex-row justify-between items-center">
          <div className="flex flex-row gap-12 items-center">
            <Image
              className="dark:invert"
              src="/assets/wigmore-logo.svg"
              alt="Wigmore Logo"
              width={60}
              height={38}
              priority
            />
            <nav className="">
              <ul className="list-none flex flex-row gap-12">
                <li>Home</li>
                <li>Products</li>
                <li className="flex flex-row gap-2">
                  <span>Training</span>
                  <Image
                    className="dark:invert"
                    src="/assets/icon-chevron.svg"
                    alt="chevron"
                    width={12}
                    height={12}
                    priority
                  />
                </li>
                <li>Exclusives</li>
                <li>Offers</li>
                <li>News</li>
              </ul>
            </nav>
          </div>
          <div className={`
            flex flex-row gap-2 w-full max-w-52 rounded-full border px-3 py-1
            ${isTransparent
            ? 'border-brand-light'
            : 'border-brand-dark'}
          `}>
            <Image
              className="dark:invert"
              src="/assets/icon-search.svg"
              alt="arrow"
              width={12}
              height={12}
              priority
            />
            <span>Search</span>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="text-sm">
              Login
            </div>
            <button className="flex flex-row text-sm gap-2 rounded-full border border-transparent bg-brand-primary text-brand-light px-4 py-1">
              <span>Sign up</span>
              <Image
                className="dark:invert"
                src="/assets/icon-arrow.svg"
                alt="arrow"
                width={16}
                height={16}
                priority
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
