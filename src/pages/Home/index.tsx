import { Button, CssBaseline, TextField } from "@mui/material";
import { BaseLayout } from "../../layout/BaseLayout";
import { Theme } from "../../Theme/ThemeProvider";

export function Home() {
    return (
        <Theme>
            <CssBaseline />
            <BaseLayout appBarTitle='Buscador de Perfis'>
            <TextField id="outlined-basic" label="Buscar" variant="outlined" sx={{
                        background: 'white',
                        color: 'white',
                        marginTop:'10px',
                    }} />
                <Button sx={{background:'#5e35b1',color:'white'}}>Consultar</Button>
            </BaseLayout>
        </Theme>
    )
}