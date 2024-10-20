import { Box, FormGroup, TextField } from "@mui/material";
import Title from "../../components/Form/Title/title";
import Header from "../../components/Header/header";
import Form from "../../components/Form/form";
import { Link } from "react-router-dom";

export default function CadastroAluno() {
    return (
        <>
            <Header>
                <div className="flex items-center gap-[30px] text-white uppercase font-semibold text-[12px]">
                    <span className="cursor-pointer">início</span>
                    <Link to={"/signin-aluno"} className="cursor-pointer">seja aluno</Link>
                    <Link to={"/"} className="bg-white text-blueProject-100 px-3 rounded-full cursor-pointer">seja um professor</Link>
                </div>
            </Header>
            <div className="flex justify-center items-center">
                <Form
                    title="consultar minhas aulas"
                    className="m-3 sm:max-w-[880px] w-full p-[30px] rounded-[15px] box-form"
                >
                    <Title
                        title={"cadastrar dados (aluno)"}
                        className={"pt-[30px]"}
                    />
                    <FormGroup className="w-full mt-[30px]">
                        <Box className="flex flex-col gap-3">
                            <Box className="w-full">
                                <TextField
                                    className="w-full"
                                    variant="outlined"
                                    label="Nome"
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
                            <Box className="w-full">
                                <TextField
                                    className="w-full"
                                    variant="outlined"
                                    label="Idade"
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
                                    label="Valor por aula"
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
                        </Box>

                        <div className="bg-[#8C8C8C] p-[0.2px] mt-[50px] mb-[50px]"></div>

                        <Box className="flex flex-col gap-3">
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
                            </Box>
                            <Box className="w-full">
                                <TextField
                                    className="w-full"
                                    variant="outlined"
                                    label="Confirmar senha"
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
                        </Box>

                        <Box className="w-full flex justify-center flex-col items-center mt-[70px]">
                            <button
                                className="button-form font-bold"
                            >
                                cadastrar
                            </button>
                        </Box>
                    </FormGroup>
                </Form>
            </div>

            <p className="text-[#8C8C8C] text-center m-[50px]">Você pode apagar sua conta, desse modo não será mais exibida na plataforma.</p>
        </>
    )
}