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
// HTML subpages
import Semantics from './pages/html/Semantics'
import Accessibility from './pages/html/Accessibility'
import Forms from './pages/html/Forms'
import Media from './pages/html/Media'
import Seo from './pages/html/Seo'
// CSS subpages
import Flexbox from './pages/css/Flexbox'
import Grid from './pages/css/Grid'
import Background from './pages/css/Background'
import Border from './pages/css/Border'
import Images from './pages/css/Images'
import Spacing from './pages/css/Spacing'
import Sizing from './pages/css/Sizing'
import Typography from './pages/css/Typography'
import Responsive from './pages/css/Responsive'
import Frameworks from './pages/css/Frameworks'
// JavaScript subpages
import Fundamentals from './pages/javascript/Fundamentals'
import Es6 from './pages/javascript/Es6'
import Async from './pages/javascript/Async'
import Dom from './pages/javascript/Dom'
import Functional from './pages/javascript/Functional'
import Oop from './pages/javascript/Oop'
// Questions subpages
import CssQuestions from './pages/questions/Css'
import HtmlQuestions from './pages/questions/Html'
import JavascriptQuestions from './pages/questions/Javascript'
import PatternsQuestions from './pages/questions/Patterns'
import Performance from './pages/questions/Performance'
import ReactQuestions from './pages/questions/React'

function App() {
  return (
    <BrowserRouter basename="/frontend_bookmarks">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<Html />} />
          <Route path="/html/semantics" element={<Semantics />} />
          <Route path="/html/accessibility" element={<Accessibility />} />
          <Route path="/html/forms" element={<Forms />} />
          <Route path="/html/media" element={<Media />} />
          <Route path="/html/seo" element={<Seo />} />
          <Route path="/css" element={<Css />} />
          <Route path="/css/flexbox" element={<Flexbox />} />
          <Route path="/css/grid" element={<Grid />} />
          <Route path="/css/background" element={<Background />} />
          <Route path="/css/border" element={<Border />} />
          <Route path="/css/images" element={<Images />} />
          <Route path="/css/spacing" element={<Spacing />} />
          <Route path="/css/sizing" element={<Sizing />} />
          <Route path="/css/typography" element={<Typography />} />
          <Route path="/css/responsive" element={<Responsive />} />
          <Route path="/css/frameworks" element={<Frameworks />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/javascript/fundamentals" element={<Fundamentals />} />
          <Route path="/javascript/es6" element={<Es6 />} />
          <Route path="/javascript/async" element={<Async />} />
          <Route path="/javascript/dom" element={<Dom />} />
          <Route path="/javascript/functional" element={<Functional />} />
          <Route path="/javascript/oop" element={<Oop />} />
          <Route path="/patterns" element={<Patterns />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/css" element={<CssQuestions />} />
          <Route path="/questions/html" element={<HtmlQuestions />} />
          <Route path="/questions/javascript" element={<JavascriptQuestions />} />
          <Route path="/questions/patterns" element={<PatternsQuestions />} />
          <Route path="/questions/performance" element={<Performance />} />
          <Route path="/questions/react" element={<ReactQuestions />} />
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
