import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
    window.dispatchEvent(new CustomEvent('lokoto:theme', { detail: { isDark: next } }));
  };

  return { isDark, toggle };
}

export function useThemeListener() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const handler = (e: Event) => setIsDark((e as CustomEvent<{ isDark: boolean }>).detail.isDark);
    window.addEventListener('lokoto:theme', handler);
    return () => window.removeEventListener('lokoto:theme', handler);
  }, []);

  return isDark;
}
