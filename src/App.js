/* eslint-disable no-restricted-globals */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./style/theme";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import RequsetResistration from  "./components/pages/companyPage/requestResistration";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <RequsetResistration/>
      <Footer />
    </ThemeProvider>
  );
}
export default App;
const GlobalStyle = createGlobalStyle`
  user-select:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
`;
