import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Footer from './footer'
import Landing from './pages/landing'

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  )
}

function MainApp() {
  const location = useLocation(); // ✅ top-level pe call karo
  const hideNavFoot = location.pathname === "/offers";

  return (
    <>
       <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offers" element={<Landing />} />
      </Routes>
      {!hideNavFoot && <Footer />}
    </>
  )
}

export default App
