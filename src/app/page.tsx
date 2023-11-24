import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at eius eum, facere ipsa qui
        praesentium ab vero deleniti delectus eveniet doloribus minus ex pariatur reiciendis quos
        officia optio aliquid.
      </p>
      <UserButton />
    </main>
  );
}
