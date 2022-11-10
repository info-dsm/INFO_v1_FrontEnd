/* eslint-disable no-restricted-globals */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./style/theme";
import Footer from "./components/common/footer";
import { Provider } from "react-redux";
import { store } from "./redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RequstResistration from "./components/pages/companyPage/requestResistration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecruitmentList from "./components/pages/companyPage/recruitmentList";
import RequstManage from "./components/pages/teacherPage/manage";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/company/list" element={<RecruitmentList />} />
              <Route
                path="/company/list/write"
                element={<RequstResistration />}
              />
              <Route path="/teacher/list/item" element={<RequstManage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
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
    overflow-x: hidden;
  }

  * {
    outline: none;
    box-sizing: border-box;
    
  }
`;
