import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componentes/Footer/Footer'
import Navbar from './componentes/Navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './componentes/Temas/listatemas/ListaTemas'
import FormTema from './componentes/Temas/formtema/FormTema'
import DeletarTema from './componentes/Temas/DeletarTema/DeletarTema'
import ListaPostagens from './componentes/Postagem/listapostagens/ListaPostagens'
import FormPostagem from './componentes/Postagem/formpostagem/FormPostagem'
import DeletarPostagem from './componentes/Postagem/deletarpostagem/DeletarPostagem'
import Perfil from './pages/perfil/Perfil'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <AuthProvider>
    <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App

