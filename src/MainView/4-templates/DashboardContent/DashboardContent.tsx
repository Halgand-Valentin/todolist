//********** Imports **********//
import { Box, Toolbar } from "@mui/material";
import { DashboardContentProps } from "./DashboardContent.types";
import AddForm from "../../../AddTODO/4-template/AddForm";

//********** Component **********//
const DashboardContent = (props: DashboardContentProps) => {
  const { selectedItemId } = props;
  let content;
  switch (selectedItemId) {
    case "add":
      content = <AddForm />;
      break;
    default:
      content = <></>;
      break;
  }

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/** Petit jardinage */}
      <Toolbar style={{ height: "5vh" }} />
      {content}
    </Box>
  );
};

DashboardContent.displayName = "DashboardContent";
export default DashboardContent;
