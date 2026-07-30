import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="container mx-auto max-w-[1200px] px-5 py-10">
      <div className="text-center mb-12">
        <h1 className="text-[3em] font-bold mb-4 text-gray-800">🎨 CSS Projects</h1>
        <p className="text-[1.2em] text-gray-600">
          Interactive projects to master CSS properties and concepts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link to="/projects/flexbox" className="bg-white rounded-2xl p-9 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline border-3 border-transparent hover:border-primary-600">
          <div className="text-[3.5em] mb-5">📦</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Flexbox</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master flexible box layout with interactive projects
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">3 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">8 Total</span>
          </div>
        </Link>

        <Link to="/projects/grid" className="bg-white rounded-2xl p-9 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-inherit no-underline border-3 border-transparent hover:border-primary-600">
          <div className="text-[3.5em] mb-5">🔲</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Grid</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master CSS grid for two-dimensional layouts
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">2 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">8 Total</span>
          </div>
        </Link>

        <div className="bg-white rounded-2xl p-9 shadow-md opacity-50 cursor-not-allowed border-3 border-transparent">
          <div className="text-[3.5em] mb-5">🖼️</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Background</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master background properties and techniques
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">0 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 shadow-md opacity-50 cursor-not-allowed border-3 border-transparent">
          <div className="text-[3.5em] mb-5">🔲</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Border</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master border properties and styling
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">0 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 shadow-md opacity-50 cursor-not-allowed border-3 border-transparent">
          <div className="text-[3.5em] mb-5">🖼️</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Images</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master image styling and optimization
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">0 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 shadow-md opacity-50 cursor-not-allowed border-3 border-transparent">
          <div className="text-[3.5em] mb-5">📏</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Spacing</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master padding, margin, and spacing techniques
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">0 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 shadow-md opacity-50 cursor-not-allowed border-3 border-transparent">
          <div className="text-[3.5em] mb-5">📐</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Sizing</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master width, height, and sizing properties
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">0 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 shadow-md opacity-50 cursor-not-allowed border-3 border-transparent">
          <div className="text-[3.5em] mb-5">🔤</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Typography</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master fonts, text styling, and typography
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">0 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 shadow-md opacity-50 cursor-not-allowed border-3 border-transparent">
          <div className="text-[3.5em] mb-5">📱</div>
          <h2 className="text-[1.6em] font-semibold mb-3 text-gray-800">Responsive</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Master responsive design and media queries
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">0 Projects</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-8 rounded-2xl">
          <h3 className="text-[1.4em] font-semibold mb-4">🎯 How It Works</h3>
          <p className="leading-relaxed opacity-95">
            Each project focuses on a specific CSS property. You'll see the property description, try different values interactively, and build your understanding through hands-on practice.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-8 rounded-2xl">
          <h3 className="text-[1.4em] font-semibold mb-4">📚 Progressive Learning</h3>
          <p className="leading-relaxed opacity-95">
            Start with basic properties and work your way up to advanced concepts. Each project builds on the previous ones, helping you develop a deep understanding of CSS.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-8 rounded-2xl">
          <h3 className="text-[1.4em] font-semibold mb-4">🔄 Interactive Practice</h3>
          <p className="leading-relaxed opacity-95">
            Use the live code editor to experiment with different property values and see the results instantly. Learn by doing, not just reading.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
