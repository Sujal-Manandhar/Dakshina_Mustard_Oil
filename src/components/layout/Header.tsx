'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X
} from 'lucide-react';

export default function Header() {
  const { locale, setLocale, toggleLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/products', label: t.nav.products },
    { href: '/process', label: t.nav.process },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Sleek, Single Integrated Unified Navigation Bar */}
      <div className={`bg-white/95 backdrop-blur-md border-b border-amber-500/25 transition-all duration-300 ${
        isScrolled ? 'py-2.5 shadow-md' : 'py-3.5 shadow-sm'
      }`}>
        <div className="container-custom mx-auto">
          <nav className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Identity */}
            <Link href="/" className="flex items-center gap-3.5 group shrink-0">
              <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-amber-500 shadow-md group-hover:scale-105 transition-transform duration-300 bg-white p-0.5 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Dakshina Brand Emblem"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif-heading font-bold text-[#2D1F07] leading-tight tracking-wide">
                  {locale === 'ne' ? 'दक्षिणा तोरीको तेल' : 'Dakshina Mustard Oil'}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 tracking-wider uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-600 inline" />
                  <span>{locale === 'ne' ? 'दक्षिणा तेल मिल • हेटौंडा' : 'Dakshina Tel Mill • Hetauda'}</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#FFF8E7] px-3.5 py-1.5 rounded-full border border-amber-500/30">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-[#2D1F07] shadow-sm'
                        : 'text-[#2D1F07] hover:text-amber-800 hover:bg-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Actions: Segmented Language Switcher + Trade CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              
              {/* Direct Integrated Language Switcher */}
              <div className="inline-flex rounded-full bg-[#FFF8E7] p-1 border border-amber-500/40 shadow-inner">
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    locale === 'en'
                      ? 'bg-amber-500 text-[#2D1F07] shadow-sm font-extrabold'
                      : 'text-amber-900/70 hover:text-amber-900'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('ne')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    locale === 'ne'
                      ? 'bg-amber-500 text-[#2D1F07] shadow-sm font-extrabold'
                      : 'text-amber-900/70 hover:text-amber-900'
                  }`}
                >
                  नेपाली
                </button>
              </div>

              {/* Direct Trade CTA */}
              <Link
                href="/contact"
                className="btn-gold-luxury text-xs xl:text-sm py-2 px-5 shadow-sm"
              >
                <span>{t.nav.enquireNow}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleLocale}
                className="px-3 py-1.5 rounded-full bg-[#FFF8E7] border border-amber-500/40 text-xs font-bold text-[#2D1F07] hover:bg-amber-400 transition-colors cursor-pointer"
              >
                {locale === 'en' ? '🇳🇵 नेपाली' : '🇬🇧 EN'}
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-[#2D1F07] hover:bg-amber-50 border border-amber-500/30 cursor-pointer"
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6 text-red-700" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b-2 border-amber-500/40 shadow-2xl">
          <div className="container-custom mx-auto py-5 space-y-3">
            
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                      isActive
                        ? 'bg-amber-500 text-[#2D1F07]'
                        : 'text-[#2D1F07] hover:bg-[#FFF8E7]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-amber-500/20">
              <Link
                href="/contact"
                className="btn-gold-luxury w-full text-center text-sm font-bold py-3.5"
              >
                <span>{t.nav.enquireNow}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
