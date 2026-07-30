import React from 'react'
import TopicPage from '../../components/TopicPage'

function Performance() {
  return (
    <TopicPage
      icon="⚡"
      title="Performance Questions"
      description="Practice performance optimization interview questions"
      backLink="/questions"
      backLabel="Back to Questions"
    >
      <p className="text-gray-600">Performance questions will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Performance
