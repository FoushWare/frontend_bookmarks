import React from 'react'
import TopicPage from '../../components/TopicPage'

function Functional() {
  return (
    <TopicPage
      icon="🔧"
      title="Functional Programming"
      description="Master map, filter, reduce, and functional patterns"
      backLink="/javascript"
      backLabel="Back to JavaScript"
    >
      <p className="text-gray-600">Functional Programming content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Functional
