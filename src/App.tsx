import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BaseLayout } from './layout/BaseLayout'
import { CssBaseline } from '@mui/material'
import { Theme } from './Theme/ThemeProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Theme>
    <CssBaseline></CssBaseline>
    <BaseLayout appBarTitle='Buscador de Perfis'>
    
    </BaseLayout>
    </Theme>
    </>
  )
}

export default App
