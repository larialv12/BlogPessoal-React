import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './componentes/Footer/Footer'
import Navbar from './componentes/Navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
