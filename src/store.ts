import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
