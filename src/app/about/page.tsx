"use client";

import { Header, Footer } from "@/components/ui";

export default function About() {
  const handleButtonClick = () => {
    console.log("Download App clicked!");
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header 
        buttonText="Download App"
        onButtonClick={handleButtonClick}
      />
      
      <main className="w-full">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-extrabold font-inter-tight text-black text-4xl md:text-5xl mb-8">
              About Us
            </h1>

            <div className="prose prose-lg max-w-none text-black">
              <p className="text-lg mb-6 text-black">
                We&apos;re a group of humans with one simple intention: to play and have fun playing pickleball and other sports.
              </p>

              <p className="text-lg mb-6 text-black">
                When we looked at the market, we found apps that (sorry to say it) absolutely suck! They&apos;re overcomplicated, confusing, and honestly just not fun to use. So we decided to create something different – an app that&apos;s simple, easy to use, and gets straight to the point.
              </p>

              <p className="text-lg mb-6 text-black">
                With the help of AI and a lot of passion for the game, we built Versus App to bring together people who want to play according to their own schedule, location, and skill level. No fuss, no complicated features – just pure connection through sport.
              </p>

              <p className="text-lg mb-6 text-black">
                Join us and start playing more! It&apos;s free... 
                <span className="font-bold"> (FOR NOW!)</span> 😉
              </p>

              <div className="mt-12 p-6 bg-black/[0.05] rounded-2xl">
                <h2 className="font-bold font-inter-tight text-black text-2xl mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-black">
                  To turn your free time into play time by making it ridiculously easy to find players, schedule games, and enjoy the sports you love – starting with pickleball and expanding to many more.
                </p>
              </div>


            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 