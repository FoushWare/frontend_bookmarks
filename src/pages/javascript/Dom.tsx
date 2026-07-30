import React from 'react'
import TopicPage from '../../components/TopicPage'

function Dom() {
  return (
    <TopicPage
      icon="🌐"
      title="DOM Manipulation"
      description="Master DOM selection, manipulation, and event handling"
      backLink="/javascript"
      backLabel="Back to JavaScript"
    >
      <p className="text-gray-600">DOM Manipulation content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Dom
