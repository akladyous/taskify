'use client';

import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function CurrentUser() {
  const { isLoaded, isSignedIn } = useAuth();

  if (isLoaded && isSignedIn) {
    return <UserButton />;
  }

  return (
    <section className='md:flex justify-center items-center py-0  gap-x-2'>
      <div>
        <Link className='block md:p-4 py-1 my-1' href='/signup'>
          Join Now
        </Link>
      </div>
      <div>
        <Link className='block md:p-4 py-1 my-1' href='/signin'>
          Sign In
        </Link>
      </div>
    </section>
  );
}
