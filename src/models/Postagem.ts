import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number
  titulo: string
  texto: string
  data: string
  usuario?: {
    id: number
    nome: string
    foto: string
  }
  tema?: {
    id: number
    descricao: string
  }
}