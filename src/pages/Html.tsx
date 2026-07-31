"use client";
import Link from 'next/link';
import React from 'react';

function Html() {
  return (
    <div className="container mx-auto max-w-[1400px] px-5 py-10">
      <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-[60px_20px] rounded-2xl mb-10 text-center">
        <h1 className="text-[3em] font-bold mb-4">📄 HTML</h1>
        <p className="text-[1.2em] opacity-90">
          Master HTML semantics, accessibility, and modern best practices for building structured web pages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/html/semantics" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">🏗️</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">Semantics</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master semantic HTML elements and proper document structure
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Beginner</span>
        </Link>

        <Link href="/html/accessibility" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">♿</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">Accessibility</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master ARIA, screen readers, and inclusive design
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
        </Link>

        <Link href="/html/forms" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">📝</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master form elements, validation, and user input
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
        </Link>

        <Link href="/html/media" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">🎬</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">Media</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master images, video, audio, and responsive media
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Beginner</span>
        </Link>

        <Link href="/html/seo" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">🔍</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">SEO</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master meta tags, structured data, and search optimization
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
        </Link>
      </div>
    </div>
  );
}

export default Html;
