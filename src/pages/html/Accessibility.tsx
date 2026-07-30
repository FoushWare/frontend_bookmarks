import React from 'react'
import TopicPage from '../../components/TopicPage'

function Accessibility() {
  return (
    <TopicPage
      icon="♿"
      title="Accessibility"
      description="Master ARIA, screen readers, and inclusive design"
      backLink="/html"
      backLabel="Back to HTML"
    >
      <p className="text-gray-600">Accessibility content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Accessibility
