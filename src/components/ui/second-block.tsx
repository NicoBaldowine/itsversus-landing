import React from 'react';
import Image from 'next/image';

interface SecondBlockProps {
  className?: string;
}

export const SecondBlock: React.FC<SecondBlockProps> = ({ className = '' }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left Image */}
          <div className="flex-shrink-0 order-last md:order-first">
            <Image
              src="/second-image.png"
              alt="Versus App screen"
              width={316}
              height={632}
              className="object-contain w-[260px] h-[520px] md:w-[316px] md:h-[632px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            {/* Heading */}
            <h2 
              className="font-extrabold font-inter-tight text-black"
              style={{ 
                fontSize: '32px',
                lineHeight: '110%'
              }}
            >
              <span className="md:hidden">
                Set up games based on your availability and favorite courts.
              </span>
              <span className="hidden md:inline" style={{ fontSize: '80px', lineHeight: '120%' }}>
                Set up games based on your availability and favorite courts.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}; 