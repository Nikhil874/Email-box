import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
export const Sidebar = () => {
  let navigate = useNavigate();
  const handleTags = (value) => {
    return navigate(`/tags/${value}`);
  };
  const theme = useTheme(null);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        ""
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              maxWidth: 300,
              bgcolor: "background.paper",
            }}
          >
            <List
              className="removePad"
              component="nav"
              aria-label="main mailbox folders"
            >
              <ListItemButton
                sx={{ backgroundColor: "#EDE6DB" }}
                onClick={() => {
                  handleTags("all");
                }}
              >
                {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
                <ListItemText primary="View all" />
              </ListItemButton>
              <ListItemButton
                sx={{ backgroundColor: "#EDE6DB" }}
                onClick={() => navigate("/")}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <ListItemButton
                sx={{ backgroundColor: "#EDE6DB" }}
                onClick={() => {
                  handleTags("draft");
                }}
              >
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              <Divider />
              <ListItemButton
                sx={{ backgroundColor: "#EDE6DB" }}
                onClick={() => {
                  handleTags("spam");
                }}
              >
                <ListItemText primary="spam" />
              </ListItemButton>
              <ListItemButton
                sx={{ backgroundColor: "#EDE6DB" }}
                onClick={() => {
                  handleTags("trash");
                }}
              >
                <ListItemText primary="Trash" />
              </ListItemButton>
            </List>
          </Box>
        </>
      )}
    </>
  );
};
