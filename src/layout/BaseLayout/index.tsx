import { AppBar, Box, Toolbar, Typography } from '@mui/material'

type BaseLayoutProps = {
    children: React.ReactNode
    appBarTitle: string
}

export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h5'>{appBarTitle}</Typography>
                </Toolbar>
            </AppBar>
            <Box padding={2} mt={10} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width:'100%'
                }}>
                {children}
            </Box>
        </>
    )
}