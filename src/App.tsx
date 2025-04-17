import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'



function App() {

  return (
    <div>
     <Navbar />
      <Home />
     <Footer/>

    </div>

  );
}

export default App
