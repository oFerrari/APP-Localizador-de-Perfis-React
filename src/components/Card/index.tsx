import { Avatar, FormGroup, useRadioGroup } from '@mui/material'
import {User} from '../../types/index'

export function Card(dados:User){
    return(
        <>
        <FormGroup >
        <img src={dados.avatar_url} alt="" />
       {/*  <img src="${dadosUsuario.avatar_url}" alt="" />
        <p>dadosUsuario.name</p>
        <a href="${dadosUsuario.html_url}">Perfil no GitHub</a>  */}
        </FormGroup>
        </>
    )
}