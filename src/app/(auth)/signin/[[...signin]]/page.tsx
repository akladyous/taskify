'use client';

import { SignIn } from '@clerk/nextjs';
import type { SignInProps } from '@clerk/types';

export default function SignInPage() {
  return (
    <section className='flex h-screen justify-center items-center '>
      <SignIn
        afterSignInUrl={'/'}
        appearance={{
          variables: {},
          elements: {
            footer: 'hidden',
            footerAction: { display: 'none' },
            formButtonPrimary: '',
          },
        }}
      />
    </section>
  );
}
