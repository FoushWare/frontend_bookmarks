import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter basename="/frontend_bookmarks">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as we migrate pages */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
