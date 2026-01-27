import { Link } from "react-router-dom"
import Postagem from "../../../models/Postagem"

interface CardPostagensProps {
  postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <div className="border border-slate-300 rounded-lg shadow p-6 flex flex-col gap-6 bg-white">

      {/* Avatar + Info */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full overflow-hidden border">
          <img
            src={postagem.usuario?.foto}
            alt={postagem.usuario?.nome}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="font-bold text-slate-800">
            {postagem.usuario?.nome}
          </p>
          <p className="text-sm text-slate-500">
            {postagem.tema?.descricao}
          </p>
        </div>
      </div>

      {/* Texto principal (testimonial) */}
      <div className="text-center">
        <p className="text-lg italic text-slate-700">
          “{postagem.texto}”
        </p>
      </div>

      

      {/* Data */}
      <p className="text-xs text-slate-400">
        {new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "full",
          timeStyle: "short"
        }).format(new Date(postagem.data))}
      </p>

      
    </div> 
  )
}

export default CardPostagem
