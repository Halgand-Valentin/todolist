//********** Imports **********//
import { TODO } from "../../../utils/types";

import { useSelector } from "../../../store";
import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { todoGlobalizedSelector } from "../../../redux/todoSlice";

//********** Component **********//
const ListComponent = () => {
  const todos = useSelector((state) =>
    todoGlobalizedSelector.selectAll(state.todos)
  );
  console.log(todos);
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo: TODO) => (
        <>
          <ListItem disablePadding id={todo.id.toString()} key={Math.random()}>
            <ListItemButton>
              <ListItemText primary={todo.text} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </Box>
  );
};
ListComponent.displayName = "ListComponent";
export default ListComponent;
