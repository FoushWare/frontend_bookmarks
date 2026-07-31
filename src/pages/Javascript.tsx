import React from 'react'
import Link from 'next/link'

function Javascript() {
  return (
    <div className="container mx-auto max-w-[1400px] px-5 py-10">
      <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-[60px_20px] rounded-2xl mb-10 text-center">
        <h1 className="text-[3em] font-bold mb-4">⚡ JavaScript</h1>
        <p className="text-[1.2em] opacity-90">
          Master JavaScript fundamentals, ES6+, async programming, DOM manipulation, and modern patterns
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/javascript/fundamentals" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">📚</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">Fundamentals</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master variables, data types, operators, and basic concepts
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Beginner</span>
        </Link>

        <Link href="/javascript/es6" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">ES6+</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master modern JavaScript features, arrow functions, destructuring
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
        </Link>

        <Link href="/javascript/async" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">⏳</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">Async Programming</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master promises, async/await, and asynchronous patterns
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Advanced</span>
        </Link>

        <Link href="/javascript/dom" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">🌐</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">DOM Manipulation</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master DOM selection, manipulation, and event handling
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
        </Link>

        <Link href="/javascript/functional" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">🔧</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">Functional Programming</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master map, filter, reduce, and functional patterns
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Advanced</span>
        </Link>

        <Link href="/javascript/oop" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-inherit no-underline border border-gray-200">
          <div className="text-3xl mb-4">🏗️</div>
          <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">OOP</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master classes, prototypes, and object-oriented patterns
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Intermediate</span>
        </Link>
      </div>
    </div>
  )
}

export default Javascript
