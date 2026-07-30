import React from 'react'
import TopicPage from '../../components/TopicPage'

function Border() {
  return (
    <TopicPage
      icon="🔲"
      title="Border"
      description="Master border properties and styling"
      backLink="/css"
      backLabel="Back to CSS"
    >
      <p className="text-gray-600">Border content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Border
