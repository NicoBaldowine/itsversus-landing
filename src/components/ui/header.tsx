"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from './button';

interface HeaderProps {
  logo?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  buttonText = "Download App",
  onButtonClick,
}) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className="w-full border-b border-black/[0.07] sticky top-0 bg-[#FFF8E7] z-50">
      <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center">
          {logo || (
            <button
              onClick={handleLogoClick}
              className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/logo.svg"
                alt="Versus logo"
                width={58}
                height={58}
                className="object-contain"
              />
            </button>
          )}
        </div>
        
        {/* Button section */}
        <div>
          <Button onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </header>
  );
}; 