import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BaseLayout } from './layout/BaseLayout'
import { CssBaseline, TextField } from '@mui/material'
import { Theme } from './Theme/ThemeProvider'
import { Home } from './pages/Home'




function App() {
  

  const [count, setCount] = useState(0)

  return (
    <>
        
        <Home/>

    </>
  )
}

export default App
