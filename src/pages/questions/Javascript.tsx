import React from 'react'
import TopicPage from '../../components/TopicPage'

function JavascriptQuestions() {
  return (
    <TopicPage
      icon="⚡"
      title="JavaScript Questions"
      description="Practice JavaScript interview questions"
      backLink="/questions"
      backLabel="Back to Questions"
    >
      <p className="text-gray-600">JavaScript questions will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default JavascriptQuestions
