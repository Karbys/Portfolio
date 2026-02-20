'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { type Locale, defaultLocale, loadMessages, t as translate, getMessagesSync, getNested } from '@/lib/i18n';

const COOKIE_NAME = 'locale';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=31536000`;
}

type MessagesMap = Partial<Record<Locale, Record<string, unknown>>>;

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  get: <T = unknown>(key: string) => T | undefined;
  messages: MessagesMap | null;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<MessagesMap | null>(null);

  useEffect(() => {
    const fromCookie = getCookie(COOKIE_NAME);
    if (fromCookie === 'en' || fromCookie === 'th') {
      setLocaleState(fromCookie);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    Promise.all([loadMessages('en'), loadMessages('th')]).then(([en, th]) => {
      if (!cancelled) {
        setMessages({ en, th });
      }
    });
    return () => { cancelled = true; };
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setCookie(COOKIE_NAME, newLocale);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const t = useCallback(
    (key: string): string => {
      const ms = messages?.[locale] ?? getMessagesSync(locale);
      if (!ms) return key;
      return translate(ms as Record<string, unknown>, key);
    },
    [locale, messages]
  );

  const get = useCallback(
    <T = unknown>(key: string): T | undefined => {
      const ms = messages?.[locale] ?? getMessagesSync(locale);
      if (!ms) return undefined;
      return getNested(ms as Record<string, unknown>, key) as T | undefined;
    },
    [locale, messages]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, get, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
