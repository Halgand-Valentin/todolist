//********** Imports **********//
import { AppBarProps } from "./AppBar.types";
import { StyledAppBar } from "./AppBar.slots";
import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

//********** Component **********//
const AppBar = (props: AppBarProps) => {
  const { open, toggleDrawer } = props;

  return (
    <StyledAppBar open={open}>
      <Toolbar
        style={{ height: "5vh" }}
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          TODOList
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

AppBar.DisplayName = "AppBar";
export default AppBar;
