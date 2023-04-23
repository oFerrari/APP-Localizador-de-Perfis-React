import { Avatar, FormGroup, useRadioGroup } from '@mui/material'
import {User} from '../../types/index'

export function Card(dados:User){
    return(
        <>
        <FormGroup >
        <img src={dados.avatar_url} alt="" />
        <p>{dados.name}</p>
        
        </FormGroup>
        </>
    )
}