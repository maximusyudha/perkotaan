"use client"
import { useRouter } from 'next/navigation';
import SignIn from '@/components/auth/SignIn/SignIn';

const Page = () => {
  const router = useRouter();

  const handleSignInSuccess = () => {
    router.push('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn onSignInSuccess={handleSignInSuccess} />
    </div>
  );
};

export default Page;
