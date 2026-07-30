import React from 'react'
import TopicPage from '../../components/TopicPage'

function Images() {
  return (
    <TopicPage
      icon="🖼️"
      title="Images"
      description="Master image styling and optimization"
      backLink="/css"
      backLabel="Back to CSS"
    >
      <p className="text-gray-600">Images content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Images
