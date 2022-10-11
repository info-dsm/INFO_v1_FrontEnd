/* eslint-disable no-restricted-globals */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./style/theme";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { Provider } from "react-redux";
import { store } from "./redux";
import RequsetResistration from "./components/pages/companyPage/requestResistration";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Footer />
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <RequsetResistration />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
export default App;
const GlobalStyle = createGlobalStyle`
  body,html {
    user-select:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }
`;
