import ListaPostagens from "../../componentes/Postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../componentes/Postagem/modalpostagem/ModalPostagem"
import banner from '../../assets/banner.png'

function Home() {
  return (
    <>
      <main
        className="w-full  h-150 bg-cover bg-center text-white
                   flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">
            Seja Bem-Vindo!
          </h2>

          <p className="text-xl">
            Expresse aqui seus pensamentos e opiniões
          </p>

          <ModalPostagem />
        </div>
      </main>

      <ListaPostagens />
    </>
  )
}

export default Home
