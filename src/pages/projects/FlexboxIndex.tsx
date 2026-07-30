import React from 'react'
import { Link } from 'react-router-dom'
import TopicPage from '../../components/TopicPage'

function FlexboxIndex() {
  return (
    <TopicPage
      icon="📦"
      title="Flexbox Projects"
      description="Interactive projects to master Flexbox properties one at a time"
      backLink="/projects"
      backLabel="Back to All Projects"
    >
      <p className="text-gray-600 mb-6">Flexbox projects will be migrated from the archive.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/projects/flexbox/justify-content" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">justify-content</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
        <Link to="/projects/flexbox/align-items" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">align-items</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
        <Link to="/projects/flexbox/flex-direction" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">flex-direction</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
        <Link to="/projects/flexbox/gap" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">gap</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
        <Link to="/projects/flexbox/flex-wrap" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">flex-wrap</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
        <Link to="/projects/flexbox/align-content" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">align-content</div>
          <div className="text-sm text-gray-600">Intermediate</div>
        </Link>
        <Link to="/projects/flexbox/flex-grow" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">flex-grow</div>
          <div className="text-sm text-gray-600">Intermediate</div>
        </Link>
      </div>
    </TopicPage>
  )
}

export default FlexboxIndex
