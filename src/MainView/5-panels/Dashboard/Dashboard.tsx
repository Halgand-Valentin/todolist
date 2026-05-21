//********** Imports **********//
import { Box, CssBaseline } from "@mui/material";
import AppBar from "../../4-templates/AppBar/AppBar";
import { useEffect, useState } from "react";
import LeftMenu from "../../4-templates/LeftMenu";
import DashboardContent from "../../4-templates/DashboardContent";

//********** Component **********//
export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | undefined>();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer} />
      <LeftMenu
        open={open}
        toggleDrawer={toggleDrawer}
        setSelectedItemId={(newId: string | undefined) => {
          setSelectedItem(newId);
        }}
      />
      <DashboardContent selectedItemId={selectedItem} />
    </Box>
  );
};

Dashboard.displayName = "Dashboard";
export default Dashboard;
