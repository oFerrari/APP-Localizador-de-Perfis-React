import { Box, Button, CircularProgress, CssBaseline, TextField } from "@mui/material";
import { BaseLayout } from "../../layout/BaseLayout";
import { Theme } from "../../Theme/ThemeProvider";
import { useQuery } from '@tanstack/react-query'
import { FormEvent, useEffect, useRef, useState } from "react";
import {User} from '../../types/index'
import { getUser } from "../../services/api";
import { Card } from "../../components/Card"


export function Home() {

  const [user, setUser] = useState<User>({avatar_url:"",html_url:"",name:""})
  const [isLoading,setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const inputUserName: HTMLInputElement = form.userName
    setLoading(true)
    setUser(await getUser(inputUserName.value))
    setLoading(false)
  }
 
  return (
    
    <Theme>
      <CssBaseline />
      <BaseLayout appBarTitle='Buscador de Perfis'>
      <Box sx={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            
        <form onSubmit={handleSubmit}>

          <TextField id="outlined-basic" name="userName" label="Buscar" variant="outlined" sx={{
            background: 'white',
            color: 'white',
            marginTop: '10px',
            width:"100%",
            marginBottom:"20px"
          }} />

          
        {isLoading?
          (<CircularProgress />)  :  (<Card avatar_url={user.avatar_url} name={user.name} html_url={user.html_url} />) 
        }

        <Button type="submit" sx={{ background: '#5e35b1', color: 'white', marginTop:"150px",}}>Consultar</Button>
        </form>
        
      </Box>
      </BaseLayout>
    </Theme>
    
  )
}