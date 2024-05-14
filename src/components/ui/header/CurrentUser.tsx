'use client';

import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function CurrentUser() {
  const { isLoaded, isSignedIn } = useAuth();

  if (isLoaded && isSignedIn) {
    return <UserButton afterSignOutUrl='/' userProfileUrl='/me' />;
  }

  return (
    <section className='md:flex justify-center items-center py-0'>
      <Link className='block md:p-4 py-1 my-1' href='/signup'>
        Join Now
      </Link>
      <Link className='block md:p-4 py-1 my-1' href='/signin'>
        Sign In
      </Link>
    </section>
  );
}
