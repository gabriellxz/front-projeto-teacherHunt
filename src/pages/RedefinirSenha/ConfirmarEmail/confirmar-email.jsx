import { Box, FormGroup, TextField } from "@mui/material";
import Form from "../../../components/Form/form";
import Title from "../../../components/Form/Title/title";
import Header from "../../../components/Header/header";
import { Link } from "react-router-dom";

export default function ConfirmarEmail() {
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
                        title={"Redefinir senha"}
                        className={""}
                    >
                        <p className="text-white opacity-25 text-center p-3 text-[15px]">Insira o seu e-mail para receber o link da redefinição de senha</p>
                    </Title>
                    <FormGroup className="w-full">
                        <Box className="w-full mt-[50px] mb-[50px]">
                            <TextField
                                className="w-full"
                                variant="outlined"
                                label="Confirme seu e-mail"
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
                                        color: "#8C8C8C'",
                                    },
                                }}
                            />
                        </Box>
                        <Box className="w-full flex justify-center flex-col items-center">
                            <button
                                className="button-form font-bold mb-3"
                            >
                                enviar
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