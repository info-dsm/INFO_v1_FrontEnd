/* eslint-disable no-restricted-globals */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./style/theme";
import Footer from "./components/common/footer";
import { Provider } from "react-redux";
import { store } from "./redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RequstResistration from "./components/pages/companyPage/requestResistration";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import RecruitmentList from "./components/pages/companyPage/recruitmentList";
import RequstManage from "./components/pages/teacherPage/manage";
import TeacherList from "./components/pages/teacherPage/list";
import CompanySignIn from "./components/pages/companyPage/auth/signIn";
import CompanySignUp from "./components/pages/companyPage/auth/signUp";
import StudentSignIn from "./components/pages/studentPage/auth/signIn";
import StudentSignUp from "./components/pages/studentPage/auth/signUp";
import TeacherSignUp from "./components/pages/teacherPage/auth/signUp";
import TeacherSignIn from "./components/pages/teacherPage/auth/signIn";
import ShowCompany from "./components/pages/teacherPage/company/list";
import SearchProps from "./components/pages/teacherPage/company/search";
import CompanyInfo from "./components/pages/companyPage/info";
import Applicant from "./components/pages/teacherPage/manage/applicant";
import ErrorPage from "./components/common/error";
import MainView from "./components/pages/studentPage/Main";
import CompanyDetailView from "./components/pages/studentPage/Company/detail";
import NoticeView from "./components/pages/studentPage/Notice";
import CompanyView from "./components/pages/studentPage/Company/index";
import EmploymentStatus from "./components/pages/studentPage/employmentStatus";
import Select from "./components/pages/studentPage/auth/Select";
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
              <Route
                exact
                path="/"
                element={
                  sessionStorage.getItem("accessToken") ? (
                    <MainView />
                  ) : (
                    <StudentSignIn />
                  )
                }
              />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/company/login" element={<CompanySignIn />} />
              <Route path="/company/signup" element={<CompanySignUp />} />
              <Route path="/student/login" element={<StudentSignIn />} />
              <Route path="/student/signup" element={<StudentSignUp />} />
              <Route path="/teacher/login" element={<TeacherSignIn />} />
              <Route path="/teacher/signup" element={<TeacherSignUp />} />
              <Route path="/company/list" element={<RecruitmentList />} />
              <Route path="/student" element={<MainView />} />
              <Route path="/student/notice" element={<NoticeView />} />
              <Route path="/student/company" element={<CompanyView />} />
              <Route
                path="/student/company/:id"
                element={<CompanyDetailView />}
              />
              <Route path="/student/status" element={<EmploymentStatus />} />
              <Route
                path="/company/list/write"
                element={<RequstResistration />}
              />
              <Route path="/teacher" element={<ShowCompany />} />
              <Route path="/teacher/company/:id" element={<CompanyInfo />} />
              <Route path="/teacher/:companyId" element={<SearchProps />} />
              <Route
                path="/teacher/list/:noticeId"
                element={<RequstManage />}
              />
              <Route path="/teacher/list" element={<TeacherList />} />
              <Route
                path="/teacher/manage/user/:teacherId"
                element={<Applicant />}
              />
              <Route
                path="/company/manage/user/:teacherId"
                element={<Applicant />}
              />
              <Route
                path="/auth/select"
                element={<Select/>}
              />
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
    scroll-behavior: smooth;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  
  .scrollban {
    overflow: hidden;
    overflow-y: hidden;
  }
`;
