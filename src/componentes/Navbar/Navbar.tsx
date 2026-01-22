import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import banner from '../../assets/banner.png'

function Navbar() {

  const navigate = useNavigate()
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate('/')
  }

  if (usuario.token === "") return null

  return (
    <header
      className="w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* overlay */}
      <div className="bg-black/60">
        <div className="container mx-auto flex justify-between items-center py-4 text-lg">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <nav className="flex gap-4">
            <Link to="/postagens" className="hover:underline">Postagens</Link>
            <Link to="/temas" className="hover:underline">Temas</Link>
            <Link to="/cadastrartema" className="hover:underline">Cadastrar tema</Link>
            <Link to="/perfil" className="hover:underline">Perfil</Link>
            <button onClick={logout} className="hover:underline">
              Sair
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
