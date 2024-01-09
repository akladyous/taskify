'use client';

import { useCallback } from 'react';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  return (
    <Button className='rounded-full' variant='outline' size='icon' onClick={toggleTheme}>
      <SunIcon className='h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='h-[1rem] w-[1rem] rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100 absolute' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
  // 4
  // 5
}
