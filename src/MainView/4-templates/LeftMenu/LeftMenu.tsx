//********** Imports **********//
import { Divider, IconButton, List, Toolbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { LeftMenuProps } from "./LeftMenu.types";
import { menuItems } from "./LeftMenu.consts";
import MenuListItem from "../../3-organisms/MenuListItem/MenuListItem";
import { StyledDrawer } from "./LeftMenu.slots";

//********** Component **********//
const LeftMenu = (props: LeftMenuProps) => {
  const { open, toggleDrawer, setSelectedItemId } = props;

  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar
        style={{ height: "5vh" }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {menuItems.map((menuItem) => (
          <MenuListItem
            key={menuItem.id}
            menuItem={menuItem}
            setSelectedItemId={setSelectedItemId}
          />
        ))}
      </List>
    </StyledDrawer>
  );
};

LeftMenu.DisplayName = "LeftMenu";
export default LeftMenu;
