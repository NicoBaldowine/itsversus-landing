import React from 'react';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/7">
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold text-black mb-2">
              Verify Your Email
            </h1>
            <p className="text-black/70 text-base">
              Open this link in your Versus app to verify your email
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-[#F5E9CF] rounded-xl">
              <p className="text-sm text-black/80">
                If you have the Versus app installed, it should open automatically.
              </p>
            </div>
            
            <a 
              href="versus-app://verify-email"
              className="block w-full py-3 px-6 bg-black text-white font-extrabold rounded-xl hover:bg-black/90 transition-colors"
            >
              Open Versus App
            </a>
            
            <p className="text-xs text-black/50">
              Don&apos;t have the app? Download it from the App Store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 