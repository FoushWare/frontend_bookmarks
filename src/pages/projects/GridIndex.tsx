import React from 'react'
import { Link } from 'react-router-dom'
import TopicPage from '../../components/TopicPage'

function GridIndex() {
  return (
    <TopicPage
      icon="🔲"
      title="Grid Projects"
      description="Interactive projects to master CSS Grid properties"
      backLink="/projects"
      backLabel="Back to All Projects"
    >
      <p className="text-gray-600 mb-6">Grid projects will be migrated from the archive.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/projects/grid/grid-template-columns" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">grid-template-columns</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
        <Link to="/projects/grid/grid-template-rows" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">grid-template-rows</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
        <Link to="/projects/grid/gap" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors no-underline text-inherit">
          <div className="font-medium text-gray-800">gap</div>
          <div className="text-sm text-gray-600">Beginner</div>
        </Link>
      </div>
    </TopicPage>
  )
}

export default GridIndex
