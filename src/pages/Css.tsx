import React from 'react'
import { Link } from 'react-router-dom'
import cssTopics from '../data/css-topics.json'

const getBadgeColor = (level: string) => {
  switch (level) {
    case 'beginner':
      return 'bg-green-100 text-green-800'
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800'
    case 'advanced':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function Css() {
  return (
    <div className="container mx-auto max-w-[1400px] px-5 py-10">
      <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-[60px_20px] rounded-2xl mb-10 text-center">
        <h1 className="text-[3em] font-bold mb-4">🎨 CSS</h1>
        <p className="text-[1.2em] opacity-90">
          Master CSS layouts with Flexbox and Grid, styling, animations, and responsive design
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cssTopics.map((topic) => (
          <div key={topic.slug} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex flex-col">
            <Link to={`/css/${topic.slug}`} className="flex-1 text-inherit no-underline">
              <div className="text-3xl mb-4">{topic.icon}</div>
              <h3 className="text-[1.5em] font-semibold mb-3 text-gray-800">{topic.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{topic.description}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-5 ${getBadgeColor(topic.level)}`}>
                {topic.level.charAt(0).toUpperCase() + topic.level.slice(1)}
              </span>
            </Link>
            <div className="flex gap-2 flex-wrap pt-4 border-t border-gray-200">
              {topic.referenceUrl && (
                <a href={topic.referenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors text-gray-700 no-underline">
                  <span>📖</span> Reference
                </a>
              )}
              {topic.examplesUrl && (
                <a href={topic.examplesUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors text-gray-700 no-underline">
                  <span>💡</span> Examples
                </a>
              )}
              {topic.projectsUrl && (
                <a href={topic.projectsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors text-gray-700 no-underline">
                  <span>🚀</span> Projects
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Css
