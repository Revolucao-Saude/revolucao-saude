import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from '../../services/Service';
import { Link } from "react-router-dom";
import './CadastroUsuario.css';


function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>({

        id: 0,
        nome: '',
        email: '',
        senha: '',
        foto: ''
    })
    const [userResult, setUserResult] = useState<User>({

        id: 0,
        nome: '',
        email: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/Login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container justifyContent='center'>
            <Box padding={10} >
                <form onSubmit={onSubmit} >
                    <Typography variant='h5' gutterBottom component='h3' align='center'> Criar uma conta </Typography>

                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='nome' label='Nome Completo *' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='email' label='E-mail *' variant="outlined" name='email' margin='normal' fullWidth />
                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha *' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar senha *' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                    <Box marginTop={2} textAlign='center' className="space">
                        <Link to='/Login' className='text-decorator-none formatar'>
                            <Button variant='contained' color='secondary' className='btnCancelar '>
                                Cancelar
                            </Button>
                        </Link>
                        <Button type='submit' variant='contained' color='primary'>
                            Cadastrar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Grid>
    )


}
export default CadastroUsuario;