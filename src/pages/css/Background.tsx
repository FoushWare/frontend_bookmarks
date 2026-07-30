import React from 'react'
import TopicPage from '../../components/TopicPage'

function Background() {
  return (
    <TopicPage
      icon="🖼️"
      title="Background"
      description="Master background properties and techniques"
      backLink="/css"
      backLabel="Back to CSS"
    >
      <p className="text-gray-600">Background content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Background
