//********** Imports **********//
import { LeftMenuItem } from "./LeftMenu.types";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AddIcon from "@mui/icons-material/Add";

//********** Consts **********//
export const menuItems: LeftMenuItem[] = [
  {
    id: "add",
    icon: AddIcon,
    label: "Ajouter une tâche",
  },
  {
    id: "todoList",
    icon: ChecklistRtlIcon,
    label: "Liste des tâches",
  },
];
