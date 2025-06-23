"use client";

import { Header, Footer } from "@/components/ui";

export default function Terms() {
  const handleButtonClick = () => {
    window.open('https://apps.apple.com/us/app/versus-app/id6747095068', '_blank');
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
              Terms and Conditions – Versus App
            </h1>
            
            <div className="space-y-2 mb-8 text-black">
              <p><strong>Effective Date:</strong> June 9, 2025</p>
              <p><strong>Last Updated:</strong> June 9, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none text-black">
              <p className="text-lg mb-6 text-black">
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of Versus App (&quot;the App&quot;), operated by Lumina Digital Studio LLC. By creating an account or using the app, you agree to these Terms.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                1. Eligibility
              </h2>
              <p className="mb-6 text-black">
                You must be at least 18 years old to use Versus App. By registering, you confirm that you meet this requirement.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                2. Account Responsibility
              </h2>
              <p className="mb-4 text-black">
                You are responsible for maintaining the confidentiality of your account and password. You are also responsible for all activities under your account.
              </p>
              <p className="mb-6 text-black">
                You may recover and reset your password at any time through the app.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                3. User-Generated Content
              </h2>
              <p className="mb-4 text-black">When you use Versus App, you may input:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your full name</li>
                <li>Profile photo</li>
                <li>Pickleball skill level</li>
                <li>Game schedules and preferences</li>
                <li>Your partners&apos; names</li>
                <li>A phone number for contact purposes</li>
              </ul>
              <p className="mb-6 text-black">
                You are solely responsible for the content you provide and for ensuring that your phone number is shared responsibly.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                4. Proper Use of Contact Information
              </h2>
              <p className="mb-4 text-black">
                To coordinate matches, players must provide a valid phone number.
              </p>
              <p className="mb-4 text-black">By using this feature, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Only use contact information to coordinate games.</li>
                <li>Not engage in harassment, spam, or any misuse of another user&apos;s phone number.</li>
              </ul>
              <p className="mb-6 text-black">
                Versus App is not responsible for any issues, misuse, or inappropriate behavior that occurs through third-party communication (e.g., text messages, calls) between users.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                5. Rules of Conduct
              </h2>
              <p className="mb-4 text-black">By using Versus App, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Impersonate others or provide false information.</li>
                <li>Harass, threaten, or abuse other users.</li>
                <li>Attempt to access or misuse accounts that are not yours.</li>
                <li>Use the app for anything other than scheduling or coordinating pickleball games.</li>
              </ul>
              <p className="mb-6 text-black">
                We reserve the right to suspend or delete accounts violating these rules, at our sole discretion.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                6. Matchmaking & Liability Disclaimer
              </h2>
              <p className="mb-4 text-black">
                Versus App allows users to discover and organize pickleball matches. However:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>We are not responsible for missed games, injuries, accidents, or inappropriate behavior that may occur during in-person meetings or matches.</li>
                <li>We do not guarantee that users will attend, match your level, or behave appropriately.</li>
                <li>Your use of the app and participation in any game arranged through the app is at your own risk.</li>
              </ul>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                7. Courts and Locations
              </h2>
              <p className="mb-6 text-black">
                Court information is displayed to help users schedule games. These are not owned or maintained by Versus App, and we are not responsible for their availability, condition, or policies.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                8. Termination
              </h2>
              <p className="mb-6 text-black">
                We reserve the right to suspend or terminate your access to the app at any time, with or without notice, especially if you violate these Terms or act inappropriately with others.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                9. Governing Law
              </h2>
              <p className="mb-6 text-black">
                These Terms are governed by the laws of the State of Colorado, United States, without regard to its conflict of law principles.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                10. Future Changes
              </h2>
              <p className="mb-6 text-black">
                We may update these Terms as new features (like payments or subscriptions) are introduced. Continued use of the app after changes are posted constitutes acceptance of the new Terms.
              </p>

              <h2 className="font-bold font-inter-tight text-black text-2xl mt-8 mb-4">
                11. Contact
              </h2>
              <p className="mb-6 text-black">
                For questions or concerns, contact us at:
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