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
    text: "모집의뢰 승인",
    path: "/notice/approve",
    method: "put",
    message: "승인되었습니다.",
  },
  {
    text: "모집의뢰 거부",
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
  {
    text: "모집의뢰 출력",
    path: "/notice/out",
    method: "post",
    message: "출력페이지로 이동합니다.",
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
export const initialCompany = {
  companyNumber: "123-45-67890",
  contactorEmail: "email@dsm.hs.kr",
  companyName: "INFO",
  homeAddressInfo: {
    fullAddress: "대전광역시 유성구 가정북로 76",
    addressNumber: "34111",
  },
  businessTagged: [
    {
      name: "산업보안",
    },
    {
      name: "정보통신업",
    },
  ],
  workerCount: 97,
  annualSales: 1000000000,
  isLeading: true,
  isAssociated: true,
  latestNoticeYear: 0,
  totalEmployedCount: 0,
  companyIntroductionResponse: {
    introduction:
      "INFO 프로젝트는 기존 직접 담당자와 연락하여 이루어지던 대덕sw마이스터고 현장 실습생 채용 의뢰를 전산화하여 소통 과정에서 발생하는 불필요한 연락을 제거하고, 웹 어플리케이션으로 전환하여 학교 산학부 담당자 부재 시에도 원활한 채용 프로세스 진행이 가능하게 하여  가용성 및 안정성 확보를 기대할 수 있습니다.",
    businessCertificate: {
      fileId: "string",
      fileUrl: "string",
      fileType: "FileType",
      extension: "string",
      fileName: "사업자 등록증",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    companyIntroductionFile: [
      {
        fileId: "string",
        fileUrl: "string",
        fileType: "FileType",
        extension: "string",
        fileName: "정보처리기능사",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl: "string",
        fileType: "FileType",
        extension: "string",
        fileName: "워드프로세서",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
    ],
    companyLogo: {
      fileId: "string",
      fileUrl:
        "https://cdn.discordapp.com/attachments/872481713949917228/1047896135374741565/image.png",
      fileType: "FileType",
      extension: "string",
      fileName: "string",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    companyPhotoList: [
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047896544994664478/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047896784699142174/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
    ],
  },
};
export const initialCompanyDetail = {
  companyNumber: "123-45-67890",
  companyName: "INFO",
  contactor: {
    name: "이동현",
    email: "ldh7228@gmail.com",
    rank: "웹 개발 부서",
    phoneNumber: "010-5742-7228",
    passwordHint: "hint",
    companyNumber: "010-5742-7228",
  },
  companyInformation: {
    homeAddressInfo: {
      fullAddress: "대전광역시 유성구 가정북로 76",
      addressNumber: "34111",
    },
    agentAddress: {
      fullAddress: "대전 서구 가수원로 5 (가수원동, 은아아파트5단지)",
      addressNumber: "35389",
    },
    representativeName: "안진우",
    establishedAt: 2015,
    workerCount: 13,
    annualSales: 100000000,
    companyPhone: "010-5742-7228",
  },
  businessTagged: [
    {
      name: "산업보안",
    },
    {
      name: "정보통신업",
    },
  ],
  isLeading: true,
  isAssociated: true,
  latestNoticeYear: 0,
  totalEmployedCount: 0,
  companyIntroductionResponse: {
    introduction:
      "INFO 프로젝트는 기존 직접 담당자와 연락하여 이루어지던 대덕sw마이스터고 현장 실습생 채용 의뢰를 전산화하여 소통 과정에서 발생하는 불필요한 연락을 제거하고, 웹 어플리케이션으로 전환하여 학교 산학부 담당자 부재 시에도 원활한 채용 프로세스 진행이 가능하게 하여  가용성 및 안정성 확보를 기대할 수 있습니다.",
    businessCertificate: {
      fileId: "string",
      fileUrl: "string",
      fileType: "FileType",
      extension: "string",
      fileName: "사업자 등록증",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    companyIntroductionFile: [
      {
        fileId: "string",
        fileUrl: "string",
        fileType: "FileType",
        extension: "string",
        fileName: "정보처리기능사",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl: "string",
        fileType: "FileType",
        extension: "string",
        fileName: "워드프로세서",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
    ],
    companyLogo: {
      fileId: "string",
      fileUrl:
        "https://cdn.discordapp.com/attachments/872481713949917228/1047896135374741565/image.png",
      fileType: "FileType",
      extension: "string",
      fileName: "string",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    companyPhotoList: [
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047912633459814471/b5daae0658da3445fe74871b3ffdc540.jpg",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047912633141055608/abdcad6d457953cf7b27414eca389337.jpg",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047912632914554920/648d064683f16838178075b92bd48d3a.jpg",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047912632637739028/14e1d9713c5b4c605892a46ab30a15c2.jpg",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047912632411234364/2d6f3315e8bc0050339a5a695e09c2c9.jpg",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1047912632172163092/f77c7e2afc0d2ccca4945157b3970f68.jpg",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
    ],
  },
};
export const initialNotice = {
  noticeId: "[INFO] 프론트엔드 엔지니어",
  company: {
    companyNumber: "123-45-67890",
    companyName: "[INFO] 프론트엔드 엔지니어",
  },
  classificationResponse: {
    bigClassifiction: {
      bigClassification: "전공동아리",
    },
    name: "보안동아리",
  },
  detailBusinessDescription:
    "이상적인 지원자는 웹 프론트엔드 개발 경험을 지닌 분으로, React 기반의 프레임워크 및 디자인과의 협업에 능숙한 분입니다. 사용자 경험에 큰 임팩트를 주는 역할인 만큼, 디자인에 관한 디테일을 놓치지 않는 분이길 기대합니다.",
  numberOfEmployee: 5,
  gradeCutLine: 25,
  applicantCount: 9,
  isPersonalContact: false,
};
export const initialNoticeDetail = {
  noticeId: "string",
  company: {
    companyNumber: "[INFO] 프론트엔드 엔지니어",
  },
  classificationResponse: [
    {
      bigClassification: {
        bigClassification: "전공동아리",
      },
      name: "보안동아리",
    },
  ],
  detailBusinessDescription:
    "이상적인 지원자는 웹 프론트엔드 개발 경험을 지닌 분으로, React 기반의 프레임워크 및 디자인과의 협업에 능숙한 분입니다. 사용자 경험에 큰 임팩트를 주는 역할인 만큼, 디자인에 관한 디테일을 놓치지 않는 분이길 기대합니다.",
  numberOfEmployee: 5,
  gradeCutLine: 25,
  interviewProcessList: {
    1: "지원서 제출",
    2: "1차 면접",
    3: "2차 면접",
  },
  languageList: [
    { languageName: "Javascript" },
    { languageName: "Typescript" },
  ],
  technologyList: [{ technologyName: "React" }, { technologyName: "Next" }],
  certificteList: [{ certificateName: "정보처리기능사" }],
  workTime: {
    untilCommuteStartTime: 0,
    isFlexible: false,
  },
  mealSupport: {
    mealSupportPay: 0,
    breakfast: true,
    lunch: true,
    dinner: false,
  },
  welfare: {
    dormitorySupport: true,
    selfDevelopmentPay: true,
    equipmentSupport: true,
    youthTomorrowChaeumDeduction: false,
    alternativeMilitaryPlan: false,
    elseSupport: "string?",
  },
  noticeOpenPeriod: {
    startDate: "2022-12-1",
    endDate: "2022-12-20",
  },
  needDocuments: "string?",
  otherFeatures: "string?",
  workPlace: {
    isSameWithCompanyAddress: false,
    otherPlace: "string?",
  },
  applicantCount: 0,
  attachmentFileList: [
    {
      fileId: "string",
      fileUrl: "string",
      fileType: "FileType",
      extension: "string",
      fileName: "string",
      noticeId: "string",
    },
  ],
  isPersonalContact: false,
};
