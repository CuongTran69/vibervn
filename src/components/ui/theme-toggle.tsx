'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 border border-black dark:border-gray-600 p-1">
        <div className="w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 border border-black dark:border-gray-600 p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-1 rounded ${theme === 'light' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        title="Light"
        aria-label="Light theme"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-1 rounded ${theme === 'dark' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        title="Dark"
        aria-label="Dark theme"
      >
        <Moon className="w-4 h-4" />
      </button>

    </div>
  );
}

