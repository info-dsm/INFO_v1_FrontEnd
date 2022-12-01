export const TitleData = [
  { data: "대분류", data1: "소분류", margin: 140, width: 72 },
  { data: "채용인원", data1: "상세직무", margin: 95, width: 96 },
];
export const bundle = [
  { title: "대분류", width: 300 },
  { title: "직무", width: 400 },
  { title: "선택", width: 196 },
];
export const mainData = [
  { title: "웹프로그래밍", subtitle: ["풀스택", "프론트엔드", "백엔드"] },
  { title: "모바일", subtitle: ["전체", "안드로이드", "IOS"] },
  {
    title: "임베디드",
    subtitle: ["전체", "펌웨어", "응용프로그래밍", "시스템프로그래밍"],
  },
  { title: "게임", subtitle: ["프론트", "서버", "기획"] },
  {
    title: "응용프로그래밍",
    subtitle: ["윈도우프로그래밍", "시스템프로그래밍"],
  },
];
export const langData = [
  { skill: "C" },
  { skill: "javascript" },
  { skill: "typescript" },
  { skill: "html" },
];
export const skillData = [
  { skill: "react" },
  { skill: "next" },
  { skill: "vue" },
  { skill: "spring" },
  { skill: "springboot" },
];
export const mealData = ["조식제공", "중식제공", "석식제공"];
export const supportData = [
  "기숙사 지원",
  "자기개발비",
  "장비지원",
  "청년내일채움",
  "병특신청",
];
export const workData = [
  { clock: "출근시간", si: "시", workTime: 0 },
  { clock: "퇴근시간", si: "시", workTime: 0 },
  { clock: "근무시간 (주)", si: "시간", workTime: 0 },
];
export const interviewData = [
  { skill: "서류전형", request: "DOCUMENT" },
  { skill: "인적성 테스트", request: "PERSONALITY_TEST" },
  { skill: "코딩 테스트", request: "CODING_TEST" },
  { skill: "라이브 코딩", request: "LIVE_CODING" },
  { skill: "AI 면접", request: "AI_INTERVIEW" },
  { skill: "과제 제출", request: "ASSIGNMENT_REPORT" },
  { skill: "기술 면접", request: "TECHNOLOGY_INTERVIEW" },
  { skill: "컬쳐 면접", request: "CULTURE_INTERVIEW" },
  { skill: "임원 면접", request: "DIRECTOR_INTERVIEW" },
  { skill: "최종 면접", request: "FINAL_INTERVIEW" },
  { skill: "신체 검사", request: "PHYSICAL_TEST" },
];
export const SubmitData = [
  {
    text: "모집의뢰 종료",
    path: "/notice/approve",
    method: "delete",
    message: "거부되었습니다.",
  },
  {
    text: "모집의뢰 삭제",
    path: "/notice",
    method: "delete",
    message: "삭제되었습니다.",
  },
];
export const TeacherData = [
  {
    path: "/teacher",
    name: "기업관리",
  },
  {
    path: "/teacher/list",
    name: "모집공고 관리",
  },
];
export const CompanyData = [
  {
    path: "/company/signup",
    name: "기업정보",
  },
  {
    path: "",
    name: "모집의뢰 정보",
  },
];
export const CompanyData2 = [
  {
    path: "",
    name: "기업정보",
  },
  {
    path: "/company/list",
    name: "모집의뢰 정보",
  },
];
