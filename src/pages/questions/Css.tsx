import React from 'react'
import TopicPage from '../../components/TopicPage'

function CssQuestions() {
  return (
    <TopicPage
      icon="🎨"
      title="CSS Questions"
      description="Practice CSS interview questions"
      backLink="/questions"
      backLabel="Back to Questions"
    >
      <p className="text-gray-600">CSS questions will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default CssQuestions
