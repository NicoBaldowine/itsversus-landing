"use client";

import { Header, Footer } from "@/components/ui";

export default function Privacy() {
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
              Privacy Policy for Versus App
            </h1>
            
            <div className="space-y-2 mb-8 text-black">
              <p><strong>Effective Date:</strong> June 9, 2025</p>
              <p><strong>Last Updated:</strong> June 9, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none text-black">
              <p className="text-lg mb-6 text-black">
                Versus App (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is operated by Lumina Digital Studio LLC. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile app or visit our website https://itsversus.app.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4 text-black">We collect the following information when you sign up or use the app:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Name and last name</li>
                <li>Email address</li>
                <li>Pickleball skill level</li>
                <li>Profile photo</li>
                <li>Location (GPS-based, only while using court-related features)</li>
                <li>Names of your pickleball partners (first and last name)</li>
                <li>Phone number (used but not stored)</li>
              </ul>
              <p className="mb-6 text-black">We also collect usage data and logs through our backend (Supabase).</p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 text-black">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Let you find and schedule pickleball games</li>
                <li>Match you with players near your location</li>
                <li>Personalize your experience</li>
                <li>Maintain and improve the functionality of the app</li>
              </ul>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                3. Location Data
              </h2>
              <p className="mb-6 text-black">
                We access your location only when you are using features that require it (e.g. finding nearby courts). We do not track your location in the background.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                4. Data Storage
              </h2>
              <p className="mb-6 text-black">
                All data is stored securely using Supabase. We do not store your phone number or any payment information. Your data is retained until you request your account be deleted.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                5. Account and Data Deletion
              </h2>
              <p className="mb-6 text-black">
                If you&apos;d like your account or data removed, you can contact our support team via the Help section in the app or email us at quizlandhelp@gmail.com. We will handle your request promptly.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                6. Analytics and Ads
              </h2>
              <p className="mb-6 text-black">
                We currently use Supabase&apos;s built-in tools to understand app usage. We do not show ads at this time, but this may change in the future — in which case, this policy will be updated.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="mb-6 text-black">
                Versus App is intended for users 18 years of age and older. We do not knowingly collect data from individuals under 18.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                8. Data Sharing
              </h2>
              <p className="mb-6 text-black">
                We do not sell, rent, or share your personal data with third parties unless required by law.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                9. Security
              </h2>
              <p className="mb-6 text-black">
                While we store your data in secure third-party systems (Supabase), we do not currently apply specific additional encryption or security layers beyond standard industry practices.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="mb-6 text-black">
                We may update this Privacy Policy from time to time. When we do, we will notify users by updating the date at the top of this page.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                11. Contact Us
              </h2>
              <p className="mb-6 text-black">
                For questions or requests related to this Privacy Policy, please contact us at:
                <br />
                📧 <a href="mailto:quizlandhelp@gmail.com" className="text-black underline">quizlandhelp@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 