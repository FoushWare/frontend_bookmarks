import React from 'react'
import TopicPage from '../../components/TopicPage'

function Seo() {
  return (
    <TopicPage
      icon="🔍"
      title="SEO"
      description="Master meta tags, structured data, and search optimization"
      backLink="/html"
      backLabel="Back to HTML"
    >
      <p className="text-gray-600">SEO content will be migrated from the archive.</p>
    </TopicPage>
  )
}

export default Seo
