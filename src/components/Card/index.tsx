import { Avatar, Box, FormGroup, Typography, useRadioGroup } from '@mui/material'
import { CardProps, User } from '../../types/index'
import { blueGrey, pink } from '@mui/material/colors'

export function Card({ user}: CardProps) {
    return (

        <FormGroup sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'rgb(81, 45, 168)',
            width: '500px',
            height: '300px',
            borderRadius: '15px',
            color: 'white',

        }}>
            {/* quantidade repositorio,quantidade de seguidores, quantas pessoas ele segue, bio */}
            <>
                {user.name ?

                    (
                        <>
                            <Avatar sx={{ width: 60, height: 60 }} src={user.avatar_url} />

                            <p>{user.name}</p>

                            <a href={user.html_url}>Link do Repositório</a>

                        </>
                    ):null
                }



            </>

        </FormGroup>


    )
}