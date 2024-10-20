import { Box, FormGroup, TextField } from "@mui/material";
import "./style.css"
import Form from "../../components/Form/form";
import Header from "../../components/Header/header";
import Title from "../../components/Form/Title/title";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <Header>
                <div className="flex items-center gap-[30px] text-white uppercase font-semibold text-[12px]">
                    <span className="cursor-pointer">início</span>
                    <Link to={"/signin-aluno"} className="cursor-pointer">seja aluno</Link>
                    <Link to={"/"} className="bg-white text-blueProject-100 px-3 rounded-full cursor-pointer">seja um professor</Link>
                </div>
            </Header>
            <div className="flex justify-center items-center mt-[50px]">
                <Form
                    title="consultar minhas aulas"
                    className="m-3 sm:max-w-[630px] w-full p-[30px] rounded-[15px] box-form"
                >
                    <Title
                        title={"Consultar minha aulas"}
                        className={"p-[30px]"}
                    >
                        <p className="text-white opacity-25 text-center p-3 text-[15px]">Faça login para poder consultar as aulas</p>
                    </Title>
                    <FormGroup className="w-full mt-[20px]">
                        <Box className="flex flex-col gap-5 mb-3">
                            <Box className="w-full">
                                <TextField
                                    className="w-full"
                                    variant="outlined"
                                    label="E-mail"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#8C8C8C",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#8C8C8C",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#8C8C8C",
                                            },
                                            "& input": {
                                                color: "#8C8C8C",
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#8C8C8C",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "#8C8C8C",
                                        },
                                    }}
                                />
                            </Box>
                            <Box className="w-full">
                                <TextField
                                    className="w-full"
                                    variant="outlined"
                                    label="Senha"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#8C8C8C",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#8C8C8C",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#8C8C8C",
                                            },
                                            "& input": {
                                                color: "#8C8C8C",
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#8C8C8C",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "#8C8C8C",
                                        },
                                    }}
                                />
                                <p className="text-[#8C8C8C]">
                                    Esqueceu a senha? <Link to={"/confirmar-email"}>Redefinir senha.</Link>
                                </p>
                            </Box>
                        </Box>
                        <Box className="w-full flex justify-center flex-col items-center">
                            <button
                                className="button-form font-bold mb-3"
                            >
                                acessar
                            </button>
                            <p className="text-[#8C8C8C]">
                                Não possui conta? <Link to={"/signup"}>Cadastre-se agora.</Link>
                            </p>
                        </Box>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}