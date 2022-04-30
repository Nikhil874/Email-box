import { styled, Toolbar, Typography,Box,InputBase,Badge  } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import EmailIcon from '@mui/icons-material/Email';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';

export const Navbar=()=>{
    const StyledToolbar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })
    const SearchBox=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width: "30%"
    }))
    const IconBox=styled(Box)(({theme})=>({
        // backgroundColor:"white",
        }))
      

return(
    <AppBar sx={{position:"static",backgroundColor:"#1A3C40"}}>
        <StyledToolbar>
          <Typography variant="h6"
          sx={{display:{xs:"none",sm:"block"}}}>
              Email
              </Typography>
              <EmailIcon sx={{display:{xs:"block",sm:"none"}}}/>
              <SearchBox><InputBase placeholder='search'/></SearchBox> 
              <IconBox sx={{display:"flex", gap:"25px"}}>
              <Badge badgeContent={4} color="error">
              <Mail />
              </Badge>
              <Badge badgeContent={4} color="error">
              <Notifications />
              </Badge>
              </IconBox> 
            </StyledToolbar> 
        </AppBar>
)
} 