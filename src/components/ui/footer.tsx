"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const router = useRouter();

  const handleButtonClick = (buttonName: string) => {
    if (buttonName === 'Privacy Policy') {
      router.push('/privacy');
    } else if (buttonName === 'Terms') {
      router.push('/terms');
    } else if (buttonName === 'About us') {
      router.push('/about');
    } else if (buttonName === 'Contact us') {
      router.push('/contact/');
    } else {
      console.log(`${buttonName} clicked!`);
    }
  };

  return (
    <footer className={`w-full border-t border-black/[0.07] ${className}`}>
      <div className="max-w-[1280px] mx-auto px-6 py-3 md:py-0 md:min-h-[82px] md:flex md:items-center">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Buttons section - stacked vertically and centered */}
          <div className="flex flex-col items-center gap-3">
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('About us')}
            >
              About us
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('Contact us')}
            >
              Contact us
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('Privacy Policy')}
            >
              Privacy Policy
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('Terms')}
            >
              Terms
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center w-full">
          {/* Buttons section - centered */}
          <div className="flex items-center gap-4">
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('About us')}
            >
              About us
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('Contact us')}
            >
              Contact us
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('Privacy Policy')}
            >
              Privacy Policy
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('Terms')}
            >
              Terms
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}; 