import { Button, CssBaseline, TextField } from "@mui/material";
import { BaseLayout } from "../../layout/BaseLayout";
import { Theme } from "../../Theme/ThemeProvider";
import FormControl from '@mui/material/FormControl';



export function Home() {
    return (
        <Theme>
            <CssBaseline />
            <BaseLayout appBarTitle='Buscador de Perfis'>
            <div>
            <TextField id="outlined-basic" label="Buscar" variant="outlined" sx={{
                        background: 'white',
                        color: 'white',
                        marginTop:'10px',
                    }} />
            <form action="">

            </form>
            </div>
            <Button sx={{background:'#5e35b1',color:'white'}}>Consultar</Button>
            </BaseLayout>
        </Theme>
    )
}