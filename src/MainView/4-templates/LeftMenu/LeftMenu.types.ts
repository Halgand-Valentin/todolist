//********** Types **********//
export interface LeftMenuItem {
  // The item's id.
  id: string;
  // The item's label.
  label: string;
  // The item's icon.
  icon: React.ElementType;
}

//********** Props **********//
export interface LeftMenuProps {
  // True if the AppBar should be tightened.
  open: boolean;
  // Callback fired to update open value.
  toggleDrawer?: () => void;
  // Selected menu item id.
  selectedItemId?: number;
  // Callback fired when selected item change.
  setSelectedItemId?: (newId: string | undefined) => void;
}
