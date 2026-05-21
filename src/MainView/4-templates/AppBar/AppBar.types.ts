//********** Imports **********//
import { AppBarProps as MuiAppBarProps } from "@mui/material";

//********** Props **********//
export interface AppBarProps extends MuiAppBarProps {
  // True if the AppBar should be tightened.
  open: boolean;
  // Callback fired to update open value.
  toggleDrawer?: () => void;
}
