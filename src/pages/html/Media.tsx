import React from 'react'
import TopicPage from '../../components/TopicPage'

function Media() {
  return (
    <TopicPage
      icon="🎬"
      title="Media"
      description="Master images, video, audio, and responsive media"
      backLink="/html"
      backLabel="Back to HTML"
    >
      <p className="text-gray-600">Media content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Media
