import React from 'react'
import TopicPage from '../../components/TopicPage'

function Responsive() {
  return (
    <TopicPage
      icon="📱"
      title="Responsive"
      description="Master responsive design and media queries"
      backLink="/css"
      backLabel="Back to CSS"
    >
      <p className="text-gray-600">Responsive content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Responsive
