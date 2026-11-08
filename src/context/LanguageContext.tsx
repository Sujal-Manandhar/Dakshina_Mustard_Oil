'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Locale, Translations, getTranslations } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Load saved preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dakshina_locale') as Locale | null;
      if (saved === 'en' || saved === 'ne') {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('dakshina_locale', newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === 'en' ? 'ne' : 'en';
      if (typeof window !== 'undefined') {
        localStorage.setItem('dakshina_locale', next);
        document.documentElement.lang = next;
      }
      return next;
    });
  }, []);

  const t = getTranslations(locale);

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
