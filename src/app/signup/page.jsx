"use client"
import { useRouter } from 'next/navigation';
import SignUp from "@/components/auth/SignUp/SignUp";


const Page = () => {
  const router = useRouter();

  const handleSignUpSuccess = () => {
    router.push('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp onSignUpSuccess={handleSignUpSuccess}/>
    </div>
  );
};

export default Page;
