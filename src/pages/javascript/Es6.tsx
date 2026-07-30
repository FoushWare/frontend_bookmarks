import React from 'react'
import TopicPage from '../../components/TopicPage'

function Es6() {
  return (
    <TopicPage
      icon="✨"
      title="ES6+"
      description="Master modern JavaScript features, arrow functions, destructuring"
      backLink="/javascript"
      backLabel="Back to JavaScript"
    >
      <p className="text-gray-600">ES6+ content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Es6
