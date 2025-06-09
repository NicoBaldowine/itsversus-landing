"use client";

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-16">
          {/* Left Phone Image */}
          <div className="flex-shrink-0">
            <Image
              src="/home-image.png"
              alt="Versus App mobile mockup"
              width={316}
              height={632}
              className="object-contain w-[316px] h-[632px]"
            />
          </div>
          
          {/* Right Text Content */}
          <div className="flex-1">
            <h1 
              className="font-extrabold font-inter-tight text-black"
              style={{ 
                fontSize: '80px',
                lineHeight: '120%'
              }}
            >
              Turn your free time into play time.<br />
              Pickleball made easy.
            </h1>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden text-center">
          <h1 
            className="font-extrabold font-inter-tight text-black mb-8"
            style={{ 
              fontSize: '32px',
              lineHeight: '110%'
            }}
          >
            Turn your free time into play time.<br />
            Pickleball made easy.
          </h1>
          
          {/* Mobile Phone Image */}
          <div className="flex justify-center">
            <Image
              src="/home-image.png"
              alt="Versus App mobile mockup"
              width={316}
              height={632}
              className="object-contain w-[260px] h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 