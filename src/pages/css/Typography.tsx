import React from 'react'
import TopicPage from '../../components/TopicPage'

function Typography() {
  return (
    <TopicPage
      icon="🔤"
      title="Typography"
      description="Master fonts, text styling, and typography"
      backLink="/css"
      backLabel="Back to CSS"
    >
      <p className="text-gray-600">Typography content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Typography
