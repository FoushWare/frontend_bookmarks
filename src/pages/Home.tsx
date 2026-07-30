import React from 'react'

function Home() {
  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to Learning Hub</h1>
      <p className="text-lg text-text-secondary mb-4">
        Your comprehensive resource for frontend development learning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-primary-600">Fundamentals</h2>
          <p className="text-text-secondary">HTML, CSS, JavaScript, and Design Patterns</p>
        </div>
        <div className="bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-primary-600">Practice</h2>
          <p className="text-text-secondary">Questions, Challenges, and Projects</p>
        </div>
        <div className="bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-primary-600">Resources</h2>
          <p className="text-text-secondary">Frontend Mentor and Senior Interview prep</p>
        </div>
      </div>
    </div>
  )
}

export default Home
