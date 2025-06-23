"use client";

import { Header, Hero, FirstBlock, SecondBlock, ThirdBlock, Footer } from "@/components/ui";

export default function Home() {
  const handleButtonClick = () => {
    window.open('https://apps.apple.com/us/app/versus-app/id6747095068', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header 
        buttonText="Download App"
        onButtonClick={handleButtonClick}
      />
      
      <Hero />
      
      <FirstBlock />
      
      <SecondBlock />
      
      <ThirdBlock />
      
      <Footer />
    </div>
  );
} 