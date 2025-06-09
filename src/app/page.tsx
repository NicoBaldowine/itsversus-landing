"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
      <div className="text-black text-opacity-50 font-inter-tight font-extrabold text-2xl">
        Redirecting...
      </div>
    </div>
  );
} 