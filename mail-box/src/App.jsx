import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Sidebar } from './Components/Sidebar'
import { Navbar } from './Components/Navbar'
import { AllRoutes } from './Routes'
import { Grid } from '@mui/material'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Grid container>
       <Grid xs={12}>
       <Navbar/>
       </Grid>
      <Grid xs={2} sx={{border:"1px solid red"}}>
      <Sidebar/>
      </Grid>
      <Grid xs={10}>
      <AllRoutes/>
      </Grid>
     
     </Grid>
     
    </div>
  )
}

export default App
