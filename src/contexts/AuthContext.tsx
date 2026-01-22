import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  // ?? Usuário fake (simula login)
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 1,
    nome: "Visitante",
    usuario: "visitante",
    senha: "",
    foto: "",
    token: "fake-token"
  });

  const [isLoading] = useState(false);

  async function handleLogin() {
    // login desativado (backend removido)
    return;
  }

  function handleLogout() {
    // opcional: manter usuário logado
    return;
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
