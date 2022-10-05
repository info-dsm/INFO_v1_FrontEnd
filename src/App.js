/* eslint-disable no-restricted-globals */
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Header from "./components/common/Header/index";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
