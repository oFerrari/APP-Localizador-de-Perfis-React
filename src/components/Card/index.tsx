import { Avatar, Box, FormGroup, Typography, useRadioGroup } from '@mui/material'
import { User } from '../../types/index'
import { blueGrey, pink } from '@mui/material/colors'

export function Card(dados: User) {
    return (
        <>
            <FormGroup sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: 'rgb(81, 45, 168)',
                width: '500px',
                height: '300px',
                borderRadius: '15px',
                color: 'white',

            }}>{dados.avatar_url !== "" ? (
                <>
                    <img style={{ clipPath: 'circle(50%)' }} width={60} height={60} src={dados.avatar_url} alt="" />

                    <p>{dados.name}</p>

                    <a href={dados.html_url}>Link do Perfil</a>
                </>
            ) : (<Typography variant="body1"></Typography>
            )}
            </FormGroup>

        </>
    )
}