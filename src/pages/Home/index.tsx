import { Button, CssBaseline, TextField } from "@mui/material";
import { BaseLayout } from "../../layout/BaseLayout";
import { Theme } from "../../Theme/ThemeProvider";
import {useQuery} from '@tanstack/react-query' 
import { FormEvent, useRef, useState } from "react";
import { getUser } from "../../services/api";


type User = {
    avatarURL:string,
    htmlURL:string,
    name:string
  }

export function Home() {

/* const [search,setSearch] = useState("")
const inputRef = useRef(null)

const handleClick = () =>{
    const username = inputRef.current
    console.log(username)
} */

const [userName, setUsername] = useState("")

const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{
  event.preventDefault()
    const inputUserName:HTMLInputElement = event.currentTarget.value
}

    return (
        <Theme>
            <CssBaseline />
            <BaseLayout appBarTitle='Buscador de Perfis'>
              
            <form onSubmit={handleSubmit}>

            <TextField value={userName} /* ref={inputRef} */ id="outlined-basic" label="Buscar" variant="outlined" sx={{
              background: 'white',
              color: 'white',
              marginTop:'10px',
            }} />
            
            <Button type="submit" sx={{background:'#5e35b1',color:'white'}}>Consultar</Button>
            </form>
            </BaseLayout>
        </Theme>
    )
}