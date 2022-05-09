import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export default function BasicMenu() {
  const [anchorEl,setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = (val) => {
    //restricting the close function to sidebar
  if(typeof  val=="string" ){
    setAnchorEl(null);
    if(val=="inbox"){
      navigate("/");
    }else{
      navigate(`/tags/${val}`);
    }
    navigate(`/tags/${val}`);
  }
   
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("all")}>View all</MenuItem>
        <MenuItem onClick={() => handleClose("inbox")}>Inbox</MenuItem>
        <MenuItem onClick={() => handleClose("draft")}>Draft</MenuItem>
        <MenuItem onClick={() => handleClose("spam")}>Spam</MenuItem>
        <MenuItem onClick={() => handleClose("trash")}>Trash</MenuItem>
      </Menu>
    </div>
  );
}
