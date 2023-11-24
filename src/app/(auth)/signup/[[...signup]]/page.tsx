import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className='min-h-screen'>
      <div className='cl-wrapper flex justify-center'>
        <SignUp redirectUrl={'/'} />
      </div>
    </main>
  );
}
