import React from 'react';
import { TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10 text-gray-900 font-normal">
        {/* Intro */}
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-black">
          hey, i'm eddy xu
        </h1>
        <p className="text-base mb-6 text-gray-900 font-normal">
          i build things to help people. my singular goal is to have a net-positive impact on the world.
        </p>

        {/* Current */}
        <h3 className="text-xl font-semibold mb-2 text-black">what i'm up to:</h3>
        <p className="mb-6 text-gray-900 font-normal">
          incoming cs @ columbia. spending my senior year getting technical to justify taking a gap year
        </p>

        {/* Previous */}
        <h3 className="text-xl font-semibold mb-2 text-black">previously:</h3>
        <div className="mb-6 space-y-4 text-gray-900">
          <div>
            <p className="font-medium">sold an edtech startup at 16 (acquired for $135k)</p>
            <div className="ml-4 mt-1 space-y-0.5 font-normal">
              <p> - helped 178k students across 185 countries find accessible opportunities</p>
              <p> - cracked influencer marketing: $275 → 5m views</p>
            </div>
          </div>
          <div>
            <p className="font-medium">built a robotics education company at 13</p>
            <div className="ml-4 mt-1 space-y-0.5 font-normal">
              <p> - $120k revenue bootstrapped from a garage</p>
              <p> - outperformed multiple incumbent companies with 10-30x less funding</p>
            </div>
          </div>
          <div>
            <p className="font-medium">won some competitions</p>
            <div className="ml-4 mt-1 space-y-0.5 font-normal">
              <p> - vex robotics national signature champion (10k teams)</p>
              <p> - deca business world champion (200k competitors)</p>
            </div>
          </div>
        </div>

        {/* Thinking */}
        <h3 className="text-xl font-semibold mb-2 text-black">thinking about:</h3>
        <div className="mb-6 text-gray-900 font-normal">
          <p>attention</p>
          <p>long games</p>
          <p>startups</p>
        </div>

        {/* Connect */}
        <h3 className="text-xl font-semibold mb-2 text-black">get in touch:</h3>
        <div className="flex items-center space-x-4 mb-2">
          <p className="text-gray-900 font-normal italic">edwardxu1569@gmail.com</p>
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/edwardxu1569/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={18} className="text-gray-900 hover:text-gray-600" />
            </a>
            <a href="https://x.com/eddybuild" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={18} className="text-gray-900 hover:text-gray-600" />
            </a>
            <a href="https://www.instagram.com/eddyxu_/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={18} className="text-gray-900 hover:text-gray-600" />
            </a>
          </div>
        </div>
        <p className="text-gray-900 font-normal">lets hypergamble into greatness together before agi makes us the permanent underclass!</p>
      </main>
    </div>
  );
}