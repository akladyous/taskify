'use client';

import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { ThemeToggler } from '@/components/theme/ThemeToggler';
import { UserButton } from '@clerk/nextjs';
import { navItems } from '@/lib/appConfig';
import CurrentUser from './CurrentUser';

export default function NavBar() {
  const hamburgerRef = useRef<any>();
  const menuRef = useRef<any>();

  const handleClick = useCallback(() => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('hidden');
    }
  }, []);

  return (
    <header className='md:h-16 px-4'>
      <nav className='flex flex-wrap items-center justify-between w-full py-4 md:py-0 text-lg'>
        <section>
          <div>
            <Link href={'/'}>Taskify</Link>
          </div>
        </section>
        <section className='md:hidden'>
          <HamburgerMenu
            className='w-6 h-6 cursor-pointer block'
            handler={handleClick}
            ref={hamburgerRef}
          />
        </section>

        <section
          className='w-full md:flex md:items-center items-center md:w-auto hidden'
          ref={menuRef}>
          <ul
            role='list'
            className='pt-4 text-base md:flex md:items-center md:justify-between md:pt-0'>
            {navItems.map((item, i) => (
              <li
                key={i}
                className='block md:p-4 hover:md:border-l-0 hover:md:border-b-2 | py-1 my-1 pl-1 hover:border-l-4 hover:border-gray-300'>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className='text-base md:flex md:items-center md:justify-between md:pt-0 md: space-x-2'>
            <div className='md:block '>
              <CurrentUser />
            </div>
            <div className='md:block  hidden'>
              <ThemeToggler />
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
}
