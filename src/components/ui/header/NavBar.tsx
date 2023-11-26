'use client';

import Link from 'next/link';
import { useCallback, useRef } from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { ThemeToggler } from '@/components/theme/ThemeToggler';
import { UserButton } from '@clerk/nextjs';

const navItems = [
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Customers',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
];

export default function NavBar() {
  const hamburgerRef = useRef<any>();
  const menuRef = useRef<any>();

  const handleClick = useCallback(() => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('hidden');
    }
  }, []);

  return (
    <>
      <header>
        <nav className='flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg'>
          <section>
            <div>
              <a href='#'>Taskify</a>
            </div>
          </section>
          <section className='md:hidden'>
            <HamburgerMenu
              className='w-6 h-6 cursor-pointer block'
              handler={handleClick}
              ref={hamburgerRef}
            />
          </section>

          <section className='w-full md:flex md:items-center md:w-auto hidden' ref={menuRef}>
            <ul className='pt-4 text-base md:flex md:justify-between md:pt-0'>
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className='md:p-4 hover:md:border-l-0 hover:md:border-b-2  py-1 block my-1 pl-1 hover:border-l-4  hover:border-gray-300'>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggler />
            <UserButton />
          </section>
        </nav>
      </header>
    </>
  );
}
