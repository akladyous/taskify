import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <section className='flex h-screen justify-center items-center '>
      <SignUp redirectUrl={'/'} />
    </section>
  );
}
