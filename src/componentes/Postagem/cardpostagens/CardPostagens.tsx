import { Link } from "react-router-dom"
import Postagem from "../../../models/Postagem"

interface CardPostagensProps {
  postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <div className="border border-slate-300 rounded overflow-hidden flex flex-col justify-between shadow">

      {/* Cabeçalho */}
      <div className="flex items-center gap-4 bg-indigo-400 text-white px-4 py-2">
        <img
          src={postagem.usuario?.foto}
          alt={postagem.usuario?.nome}
          className="h-12 w-12 rounded-full object-cover"
        />
        <h3 className="text-lg font-bold uppercase">
          {postagem.usuario?.nome}
        </h3>
      </div>

      {/* Conteúdo */}
      <div className="p-4 space-y-2">
        <h4 className="text-lg font-semibold uppercase">
          {postagem.titulo}
        </h4>

        <p>{postagem.texto}</p>

        <p className="text-sm text-slate-600">
          Tema: {postagem.tema?.descricao}
        </p>

        <p className="text-sm text-slate-600">
          Data:{" "}
          {new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "full",
            timeStyle: "short"
          }).format(new Date(postagem.data))}
        </p>
      </div>

      {/* Ações */}
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full bg-indigo-400 hover:bg-indigo-700 text-white py-2 flex justify-center"
        >
          Editar
        </Link>

        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="w-full bg-red-400 hover:bg-red-700 text-white py-2 flex justify-center"
        >
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem
