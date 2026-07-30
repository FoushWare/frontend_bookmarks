import React from 'react'
import TopicPage from '../../components/TopicPage'

function HtmlQuestions() {
  return (
    <TopicPage
      icon="📄"
      title="HTML Questions"
      description="Practice HTML interview questions"
      backLink="/questions"
      backLabel="Back to Questions"
    >
      <p className="text-gray-600">HTML questions will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default HtmlQuestions
