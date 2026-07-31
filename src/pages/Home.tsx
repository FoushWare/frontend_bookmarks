"use client";
import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-400 pt-[70px]">
      <div className="container mx-auto max-w-[1400px] px-5 py-5">
        {/* Hero Section */}
        <div className="bg-white/95 rounded-2xl p-[60px_40px] mb-10 shadow-2xl text-center">
          <h1 className="text-[3.5em] font-bold mb-4 bg-gradient-to-br from-primary-600 to-primary-400 bg-clip-text text-transparent">
            🚀 Frontend Learning Hub
          </h1>
          <p className="text-[1.3em] text-gray-600 mb-8">
            Master modern frontend development with interactive examples, interview prep, and comprehensive resources
          </p>
          <div className="flex justify-center gap-10 flex-wrap">
            <div className="text-center">
              <div className="text-[2.5em] font-bold text-primary-600">6+</div>
              <div className="text-gray-600 text-sm">Live Examples</div>
            </div>
            <div className="text-center">
              <div className="text-[2.5em] font-bold text-primary-600">9+</div>
              <div className="text-gray-600 text-sm">Interview Topics</div>
            </div>
            <div className="text-center">
              <div className="text-[2.5em] font-bold text-primary-600">100+</div>
              <div className="text-gray-600 text-sm">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-[2.5em] font-bold text-primary-600">∞</div>
              <div className="text-gray-600 text-sm">Learning</div>
            </div>
          </div>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          <Link href="/html" className="bg-white/95 rounded-2xl p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline">
            <div className="text-4xl mb-5">📄</div>
            <h3 className="text-gray-800 text-[1.8em] font-semibold mb-4">HTML</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Master HTML semantics, accessibility, and modern best practices for building structured web pages
            </p>
            <div className="flex justify-center gap-4 items-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Beginner</span>
              <span className="text-gray-500 text-sm">5 Topics</span>
            </div>
          </Link>

          <Link href="/css" className="bg-white/95 rounded-2xl p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline">
            <div className="text-4xl mb-5">🎨</div>
            <h3 className="text-gray-800 text-[1.8em] font-semibold mb-4">CSS</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Master CSS layouts with Flexbox and Grid, styling, animations, and responsive design
            </p>
            <div className="flex justify-center gap-4 items-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
              <span className="text-gray-500 text-sm">12 Topics</span>
            </div>
          </Link>

          <Link href="/javascript" className="bg-white/95 rounded-2xl p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline">
            <div className="text-4xl mb-5">⚡</div>
            <h3 className="text-gray-800 text-[1.8em] font-semibold mb-4">JavaScript</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Master JavaScript fundamentals, ES6+, async programming, DOM manipulation, and modern patterns
            </p>
            <div className="flex justify-center gap-4 items-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Advanced</span>
              <span className="text-gray-500 text-sm">15 Topics</span>
            </div>
          </Link>

          <Link href="/patterns" className="bg-white/95 rounded-2xl p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline">
            <div className="text-4xl mb-5">🧩</div>
            <h3 className="text-gray-800 text-[1.8em] font-semibold mb-4">Patterns</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Master design patterns, rendering patterns, and architectural patterns for building scalable applications
            </p>
            <div className="flex justify-center gap-4 items-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Advanced</span>
              <span className="text-gray-500 text-sm">10+ Patterns</span>
            </div>
          </Link>

          <Link href="/senior-interview" className="bg-white/95 rounded-2xl p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline">
            <div className="text-4xl mb-5">💼</div>
            <h3 className="text-gray-800 text-[1.8em] font-semibold mb-4">Senior Interview</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Prepare for senior developer interviews with advanced questions, system design, and best practices
            </p>
            <div className="flex justify-center gap-4 items-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">Senior</span>
              <span className="text-gray-500 text-sm">20 Topics</span>
            </div>
          </Link>

          <Link href="/frontend-mentor" className="bg-white/95 rounded-2xl p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline">
            <div className="text-4xl mb-5">🎨</div>
            <h3 className="text-gray-800 text-[1.8em] font-semibold mb-4">Frontend Mentor</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Practice your frontend skills with real-world design challenges from Frontend Mentor
            </p>
            <div className="flex justify-center gap-4 items-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
              <span className="text-gray-500 text-sm">2 Challenges</span>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-white/80 py-8 mt-10">
          <p>Built for frontend developers by frontend developers | 🚀 Continuous Learning</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
