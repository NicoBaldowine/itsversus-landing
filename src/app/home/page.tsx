"use client";

import { Header, Hero, FirstBlock, SecondBlock, ThirdBlock, Footer } from "@/components/ui";

export default function Home() {
  const handleButtonClick = () => {
    console.log("Download App clicked!");
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
