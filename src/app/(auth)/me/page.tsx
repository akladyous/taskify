import { UserProfile, currentUser } from '@clerk/nextjs';

export default async function UserProfilePage() {
  console.group('[UserProfilePage]');
  const user = await currentUser();

  return (
    <main className='min-h-screen'>
      <div className='cl-wrapper flex justify-center'>
        <UserProfile />
      </div>
    </main>
  );
}
