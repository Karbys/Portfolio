export type Locale = 'en' | 'th';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'th'];

export function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function t(messages: Record<string, unknown>, key: string): string {
  const value = getNested(messages, key);
  if (typeof value === 'string') return value;
  return key;
}

async function loadLocale(locale: Locale): Promise<Record<string, unknown>> {
  const mod = await import(`@/locale/${locale}.json`);
  return mod.default as Record<string, unknown>;
}

const cache: Partial<Record<Locale, Record<string, unknown>>> = {};

export function getMessagesSync(locale: Locale): Record<string, unknown> | null {
  return cache[locale] ?? null;
}

export async function loadMessages(locale: Locale): Promise<Record<string, unknown>> {
  if (cache[locale]) return cache[locale]!;
  const messages = await loadLocale(locale);
  cache[locale] = messages;
  return messages;
}
