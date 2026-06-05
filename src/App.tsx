import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/styles/theme";
import Dashboard from "./MainView/5-panels/Dashboard";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
