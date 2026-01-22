import { useNavigate } from "react-router-dom";
import CardPostagens from "../cardpostagens/CardPostagens";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { DNA } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { postagensMock } from "../../../mocks/postagensMock"

function ListaPostagens() {
  return (
    <section className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {postagensMock.map(postagem => (
        <CardPostagens key={postagem.id} postagem={postagem} />
      ))}
    </section>
  )
}


export default ListaPostagens;