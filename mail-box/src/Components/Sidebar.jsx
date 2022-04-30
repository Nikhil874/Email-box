import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useNavigate } from 'react-router-dom';
export const Sidebar=()=>{
      //for navigation to different pages
      let navigate=useNavigate();
      const handleTags=(value)=>{
          return navigate(`/tags/${value}`)
      }
    return(
        <>
          <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper',border:"1px solid black"}}>
          <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
          sx={{backgroundColor:"#EDE6DB"}}
          onClick={()=>{handleTags("all")}}
        >
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText primary="View all" />
        </ListItemButton>
        <ListItemButton
          sx={{backgroundColor:"#EDE6DB"}}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
            sx={{backgroundColor:"#EDE6DB"}}
            onClick={()=>{handleTags("draft")}}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          sx={{backgroundColor:"#EDE6DB"}}
          onClick={()=>{handleTags("spam")}}
        >
          <ListItemText primary="spam" />
        </ListItemButton>
        <ListItemButton
          sx={{backgroundColor:"#EDE6DB"}}
          onClick={()=>{handleTags("trash")}}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        </List>

          </Box>
        </>
    )
}