import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="website-react/" element={<Home />} />
          <Route path="website-react/portfolio" element={<Portfolio />} />
          <Route path="website-react/about" element={<AboutMe />} />
          <Route path="website-react/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
