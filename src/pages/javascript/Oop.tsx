import React from 'react'
import TopicPage from '../../components/TopicPage'

function Oop() {
  return (
    <TopicPage
      icon="🏗️"
      title="OOP"
      description="Master classes, prototypes, and object-oriented patterns"
      backLink="/javascript"
      backLabel="Back to JavaScript"
    >
      <p className="text-gray-600">OOP content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Oop
