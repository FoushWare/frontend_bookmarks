import React from 'react'
import TopicPage from '../../components/TopicPage'

function PatternsQuestions() {
  return (
    <TopicPage
      icon="🧩"
      title="Patterns Questions"
      description="Practice design pattern interview questions"
      backLink="/questions"
      backLabel="Back to Questions"
    >
      <p className="text-gray-600">Patterns questions will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default PatternsQuestions
