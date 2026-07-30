import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Html from './pages/Html'
import Css from './pages/Css'
import Javascript from './pages/Javascript'
import Patterns from './pages/Patterns'
import Questions from './pages/Questions'
import Challenges from './pages/Challenges'
import Projects from './pages/Projects'
import FrontendMentor from './pages/FrontendMentor'

function App() {
  return (
    <BrowserRouter basename="/frontend_bookmarks">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/patterns" element={<Patterns />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/frontend-mentor" element={<FrontendMentor />} />
          <Route path="/senior-interview" element={<Questions />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
