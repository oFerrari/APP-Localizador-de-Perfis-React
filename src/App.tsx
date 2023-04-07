import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BaseLayout } from './layout/BaseLayout'
import { CssBaseline } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CssBaseline></CssBaseline>
    <BaseLayout appBarTitle='Buscador de Perfis'>
    
    </BaseLayout>
      ola vc esta programando em react
    </>
  )
}

export default App
