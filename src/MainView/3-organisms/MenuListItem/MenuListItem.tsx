//********** Imports **********//
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { MenuListItemProps } from "./MenuListItem.types";

//********** Component **********//
const MenuListItem = (props: MenuListItemProps) => {
  const { menuItem, setSelectedItemId } = props;

  return (
    <ListItemButton
      onClick={() => {
        setSelectedItemId?.(menuItem.id);
      }}
    >
      <ListItemIcon>
        <menuItem.icon />
      </ListItemIcon>
      <ListItemText primary={menuItem.label} />
    </ListItemButton>
  );
};

MenuListItem.DisplayName = "MenuListItem";
export default MenuListItem;
