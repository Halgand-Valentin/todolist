//********** Imports **********//
import { Box, Toolbar } from "@mui/material";
import { DashboardContentProps } from "./DashboardContent.types";
import AddForm from "../../../AddTODO/4-template/AddForm";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/todoSlice";
import List from "../../../List/4-template/List";

//********** Component **********//
const DashboardContent = (props: DashboardContentProps) => {
  const { selectedItemId } = props;
  let content;
  const dispatch = useDispatch();
  switch (selectedItemId) {
    case "add":
      content = (
        <AddForm
          onSubmitClick={(newTodo: string) => {
            dispatch(addTodo({ id: Date.now(), text: newTodo }));
          }}
        />
      );
      break;
    case "todoList":
      content = <List />;
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
