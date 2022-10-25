/* eslint-disable no-restricted-globals */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./style/theme";
import Footer from "./components/common/footer";
import { Provider } from "react-redux";
import { store } from "./redux";
import RequsetResistration from "./components/pages/companyPage/requestResistration";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <RequsetResistration />
          <Footer />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
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
