import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Sidebar } from './Components/Sidebar'
import { Navbar } from './Components/Navbar'
import { AllRoutes } from './Routes'
import { Grid,useMediaQuery,
  useTheme, } from '@mui/material'
import BasicMenu from './Components/MobileSide'
function App() {
  
  const theme = useTheme(null);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="App">
      
     <Grid container>
       <Grid xs={12}>
       <Navbar/>
      
       </Grid>
       
      <Grid xs={isMatch?0:2}>
      <Sidebar/>
      </Grid>
      <Grid xs={isMatch?12:10}>
      <AllRoutes/>
      </Grid>
     
     </Grid>
     
    </div>
  )
}

export default App
