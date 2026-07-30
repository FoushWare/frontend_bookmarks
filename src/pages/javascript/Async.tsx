import React from 'react'
import TopicPage from '../../components/TopicPage'

function Async() {
  return (
    <TopicPage
      icon="⏳"
      title="Async Programming"
      description="Master promises, async/await, and asynchronous patterns"
      backLink="/javascript"
      backLabel="Back to JavaScript"
    >
      <p className="text-gray-600">Async Programming content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Async
