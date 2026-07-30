import React from 'react'
import TopicPage from '../../components/TopicPage'

function ReactQuestions() {
  return (
    <TopicPage
      icon="⚛️"
      title="React Questions"
      description="Practice React interview questions"
      backLink="/questions"
      backLabel="Back to Questions"
    >
      <p className="text-gray-600">React questions will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default ReactQuestions
