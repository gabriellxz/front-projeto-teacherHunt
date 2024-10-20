import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Cadastro from "../pages/Cadastro/cadastro";
import LoginAluno from "../pages/LoginAluno/login-aluno";
import CadastroAluno from "../pages/CadastroAluno/cadastro-aluno";
import ConfirmarEmail from "../pages/RedefinirSenha/ConfirmarEmail/confirmar-email";
import NovaSenha from "../pages/RedefinirSenha/NovaSenha/nova-senha";

export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login/>}
                />
                <Route
                    path="signup"
                    element={<Cadastro/>}
                />
                <Route
                    path="signin-aluno"
                    element={<LoginAluno/>}
                />
                <Route
                    path="signup-aluno"
                    element={<CadastroAluno/>}
                />
                <Route
                    path="confirmar-email"
                    element={<ConfirmarEmail/>}
                />
                <Route
                    path="nova-senha"
                    element={<NovaSenha/>}
                />
            </Routes>
        </BrowserRouter>
    )
}