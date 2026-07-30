import React from 'react'
import TopicPage from '../../components/TopicPage'

function Grid() {
  return (
    <TopicPage
      icon="🔲"
      title="Grid"
      description="Master CSS grid for two-dimensional layouts"
      backLink="/css"
      backLabel="Back to CSS"
    >
      <p className="text-gray-600">Grid content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Grid
