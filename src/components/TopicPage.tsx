import React from 'react'
import { Link } from 'react-router-dom'

interface TopicPageProps {
  icon: string
  title: string
  description: string
  backLink: string
  backLabel: string
  children?: React.ReactNode
}

function TopicPage({ icon, title, description, backLink, backLabel, children }: TopicPageProps) {
  return (
    <div className="container mx-auto max-w-[1400px] px-5 py-10">
      <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-[60px_20px] rounded-2xl mb-10 text-center">
        <h1 className="text-[3em] font-bold mb-4">{icon} {title}</h1>
        <p className="text-[1.2em] opacity-90">{description}</p>
      </div>
      <div className="bg-white rounded-2xl p-10 shadow-md">
        {children || <p className="text-gray-600">Content will be added soon...</p>}
        <div className="mt-8">
          <Link to={backLink} className="inline-block px-5 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700 no-underline">
            ← {backLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopicPage
