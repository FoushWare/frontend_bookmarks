import React from 'react'
import TopicPage from '../../components/TopicPage'

function Fundamentals() {
  return (
    <TopicPage
      icon="📚"
      title="Fundamentals"
      description="Master variables, data types, operators, and basic concepts"
      backLink="/javascript"
      backLabel="Back to JavaScript"
    >
      <p className="text-gray-600">Fundamentals content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Fundamentals
