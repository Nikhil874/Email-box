import {
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import EmailIcon from "@mui/icons-material/Email";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SearchBox = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "18%",
    display: "flex",
    justifyContent: "space-between",
  }));
  const IconBox = styled(Box)(({ theme }) => ({
    // backgroundColor:"white",
  }));
  const theme = useTheme(null);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  return (
    <AppBar sx={{ position: "static", backgroundColor: "#1A3C40" }}>
      <StyledToolbar>
        {isMatch ? (
          <Mail />
        ) : (
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Email
          </Typography>
        )}

        {/* <EmailIcon sx={{display:{xs:"block",sm:"none"}}}/> */}
        <SearchBox>
          <InputBase
            placeholder="search"
            sx={{ border: "1px solid transparent" }}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <SearchIcon
            sx={{
              color: "black",
              marginTop: "4px",
              padding: "2px",
              marginRight: "-10px",
            }}
            onClick={() => {
              navigate(`/search/${keyword}`);
            }}
          />
        </SearchBox>
        <IconBox sx={{ display: "flex", gap: "25px" }}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconBox>
      </StyledToolbar>
    </AppBar>
  );
};
