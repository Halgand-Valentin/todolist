//********** Imports **********//
import { LeftMenuItem } from "../../4-templates/LeftMenu/LeftMenu.types";

//********** Props **********//
export interface MenuListItemProps {
  // The displayed menu item.
  menuItem: LeftMenuItem;
  // Callback fired when selected item change.
  setSelectedItemId?: (newId: string) => void;
}
