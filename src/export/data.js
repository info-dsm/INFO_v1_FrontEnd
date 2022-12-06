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
    text: "모집공고 승인",
    path: "",
    method: "post",
    message: "승인되었습니다.",
  },
  {
    text: "모집공고 종료",
    path: "/conclude",
    method: "delete",
    message: "종료되었습니다.",
  },
  {
    text: "모집공고 삭제",
    path: "",
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
          "https://cdn.discordapp.com/attachments/872481713949917228/1048056364045443162/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048056756762312714/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048056994919104542/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048058046523379782/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060414921015417/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060859798274048/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060964714578014/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060676381356042/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060715606478980/image.png",
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
        "https://cdn.discordapp.com/attachments/872481713949917228/1048056889407189012/image.png",
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
          "https://cdn.discordapp.com/attachments/872481713949917228/1048056364045443162/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048056756762312714/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048056994919104542/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048058046523379782/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060414921015417/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060859798274048/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060964714578014/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060676381356042/image.png",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      {
        fileId: "string",
        fileUrl:
          "https://cdn.discordapp.com/attachments/872481713949917228/1048060715606478980/image.png",
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
    otherPlace: "대전 유성구 가정북로 76 (대덕소프트웨어마이스터고등학교)",
  },
  applicantCount: 0,
  attachmentFileList: [
    {
      fileId: "string",
      fileUrl: "https://cdn-icons-png.flaticon.com/512/1388/1388902.png",
      fileType: "FileType",
      extension:
        "https://cdn.discordapp.com/attachments/872481713949917228/1048065150265069628/Self-introduction_form.hwp",
      fileName: "지원서 양식",
      noticeId: "string",
    },
  ],
  isPersonalContact: false,
};
export const CompanyList = {
  list1: {
    totalPages: 3,
    totalElements: 17,
    size: 8,
    number: 0,
    numberOfElements: 0,
    first: true,
    last: false,
    content: [
      {
        companyNumber: "123-45-67890",
        contactorEmail: "ldh7228@gmail.com",
        companyName: "INFO",
        homeAddressInfo: {
          fullAddress: "대전광역시 유성구 가정북로 76",
          addressNumber: "34111",
        },
        businessTagged: [
          {
            id: "산업보안",
          },
          {
            id: "정보통신업",
          },
        ],
        workerCount: 13,
        annualSales: 6000000,
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
                "https://cdn.discordapp.com/attachments/872481713949917228/1048056364045443162/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048056756762312714/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048056994919104542/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048058046523379782/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048060414921015417/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048060859798274048/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048060964714578014/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048060676381356042/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
            {
              fileId: "string",
              fileUrl:
                "https://cdn.discordapp.com/attachments/872481713949917228/1048060715606478980/image.png",
              fileType: "FileType",
              extension: "string",
              fileName: "string",
              companyNumber: "string",
              companyFileClassificationType: "CompanyFileClassificationType",
            },
          ],
        },
      },

      {
        companyNumber: "779-81-00425",
        contactorEmail: "email@jaranda.com",
        companyName: "자란다",
        homeAddressInfo: {
          fullAddress:
            "서울특별시 강남구 테헤란로 152 강남파이낸스센터빌딩 40층 자란다",
          addressNumber: 35389,
        },
        businessTagged: [
          {
            id: "교육 서비스업",
          },
        ],
        workerCount: 105,
        annualSales: 476000000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "자란다는 아이들의 교육과 돌봄에서 발생하는 문제를 데이터와 머신러닝 알고리즘으로 해결하는 에듀테크 스타트업 ",
          businessCertificate: null,
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa52ce4d8-40f9-401d-bd49-36fab283557a%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_%E1%84%8C%E1%85%A1%E1%84%85%E1%85%A1%E1%86%AB%E1%84%83%E1%85%A1_%E1%84%90%E1%85%AE%E1%84%8C%E1%85%A1_%E1%84%8B%E1%85%B2%E1%84%8E%E1%85%B5_%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_1.png&blockId=7d156199-2e46-4955-ba7d-f07e9b54efb3",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/2512/pl4aplgjv2blao65__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/2512/hf1jlslp2gqef0ya__1080_790.png",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/2512/ctb5ihkvynfrvybt__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "105-87-52823",
        contactorEmail: "contact@tumblbug.com",
        companyName: "텀블벅",
        homeAddressInfo: {
          fullAddress: "서울 서초구 서초대로 398, 19층",
          addressNumber: 35389,
        },
        businessTagged: [
          {
            id: "금융 및 보험업",
          },
        ],
        workerCount: 49,
        annualSales: 240800000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "텀블벅은 국내에서 가장 많은 27,000개 프로젝트를 성공으로 이끈 크라우드펀딩 플랫폼입니다.",
          businessCertificate: null,
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/1615/zot7yn88mmch7z64__1080_790.jpg",
            },
            {
              fileUrl:
                "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1615%2F6srs2wg7snhjcmbi__1080_790.jpg&w=1000&q=75",
            },
            {
              fileUrl:
                "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1615%2Fqscmiiytxxmjxu6c__1080_790.jpg&w=1000&q=75",
            },
            {
              fileUrl:
                "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1615%2Fdny2eopzmu2lhog8__1080_790.jpg&w=1000&q=75",
            },
          ],
        },
      },
      {
        companyNumber: "220-87-17483",
        contactorEmail: "contact-us@nexon.co.kr",
        companyName: "넥슨코리아(NEXON)",
        homeAddressInfo: {
          fullAddress: "경기도 성남시 분당구 판교로 256번길 7",
          addressNumber: 35389,
        },
        businessTagged: [
          {
            id: "예술, 스포츠 및 여가관련 서비스업",
          },
        ],
        workerCount: 3259,
        annualSales: 6082000000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "1994년 설립하여 2014년 12월에 창립 20주년을 맞이한 넥슨 컴퍼니(NEXON COMPANY)는 연 매출 2조 2987억원(2017년 넥슨 일본법인 연결 매출 기준), 전체 사원수 약 4,500명 규모의 글로벌 게임회사입니다.",
          businessCertificate: null,
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/886/yqtgeicovcst4nfc__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/886/bx7zxeirqqeboq0q__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/886/17445_2_3.4ddc3d40__1080_790.png",
            },
          ],
        },
      },
      {
        companyNumber: "120-87-65763",
        contactorEmail: "contact@woowahan.co.kr",
        companyName: "우아한형제들",
        homeAddressInfo: {
          fullAddress: "서울시 송파구 위례성대로 2 (방이동, 장은빌딩)",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "서비스업",
          },
        ],
        workerCount: 1817,
        annualSales: 608200000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "우아한형제들은 1등 배달앱 배달의민족으로 음식 문화를 선도하고 있습니다. ‘배민1’으로 더 빠르게 배달 받을 수 있고, ‘배민쇼핑라이브’를 보면서 판매자와 직접 소통할 수도 있습니다. ‘B마트‘로 집에서 장보기까지 할 수 있습니다.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/102/lhnzt8yqwqslevr1__1080_790.png",
            },

            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/102/tctoiyptqao6u3jl__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/102/ipzvm43pf83xec4z__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "423-88-00370",
        contactorEmail: "contact@millie.town",
        companyName: "밀리의 서재",
        homeAddressInfo: {
          fullAddress:
            "서울특별시 마포구 양화로 45, 16층 (메세나폴리스 세아타워)",
          addressNumber: 45008,
        },
        businessTagged: [
          {
            id: "교육 및 서비스업",
          },
        ],
        workerCount: 122,
        annualSales: 523600000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction: `"독서와 무제한 친해지리, 당신의 일상을 1밀리+"
          밀리의 서재는 독서로 더 가치 있는 일상을 만듭니다.`,
          businessCertificate: null,
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/2331/oc1oxldmboa07st2__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "107-87-83297",
        contactorEmail: "support@backpac.kr",
        companyName: "백패커",
        homeAddressInfo: {
          fullAddress: "서울특별시 마포구 동교로 19길 12",
          addressNumber: 35389,
        },
        businessTagged: [
          {
            id: "예술, 스포츠 및 여가관련 서비스업",
          },
        ],
        workerCount: 253,
        annualSales: 465800000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "백패커는 Unique Lifestyle Guide ‘아이디어스(idus)’를 운영하고 있습니다.",
          businessCertificate: {
            fileId: "6476d38d-f3dc-4935-a827-057db62fa7c6",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/100-00-00000/BUSINESS_CERTIFICATE/6476d38d-f3dc-4935-a827-057db62fa7c6/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "100-00-00000",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/282/zboz7vde9tpegvbo__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "810-86-00658",
        contactorEmail: "help@coloso.co.kr",
        companyName: "데이원컴퍼니",
        homeAddressInfo: {
          fullAddress: "서울시 강남구 테헤란로 231, 6층 7층 (센터필드 웨스트)",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "교육 및 서비스업",
          },
        ],
        workerCount: 303,
        annualSales: 384300000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "데이원컴퍼니의 비전은 Life-changing Education 입니다. 우리는 지금 누군가의 인생을 바꾸는 일을 하고 있습니다.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F49%2Fwghgmlmdm2ophquz__1080_790.png&w=1000&q=75",
            },
          ],
        },
      },
    ],
  },
  list2: {
    content: [
      {
        companyNumber: "021-67-09917",
        contactorEmail: "contact@lezhin.com",
        companyName: "키다리 스튜디오",
        homeAddressInfo: {
          fullAddress: "서울특별시 강남구 도산대로 170 큐빅타워",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "예술, 스포츠 및 여가관련 서비스업",
          },
        ],
        workerCount: 179,
        annualSales: 418700000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "콘텐츠를 사랑하는 사람들이 모인 레진 엔터테인먼트는, 글로벌 웹툰 플랫폼 ‘레진’그리고 ‘봄툰’ 과 ‘델리툰’을 운영하는 키다리 스튜디오와 함께 글로벌 플랫폼으로 도약하고 있습니다.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/853/2fxappnyjl554wwe__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/853/6qvjr8pjti1n6kmr__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/853/bbll2tciulks55gl__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "787-87-00729",
        contactorEmail: "partnership@kcar.com",
        companyName: "케이카",
        homeAddressInfo: {
          fullAddress:
            "서울특별시 영등포구 선유로 43길 27, 3층(양평동3가, 청우오토프라자)",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "수리 및 기타 개인서비스업",
          },
        ],
        workerCount: 1112,
        annualSales: 527600000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "K Car는 ”고객과의 신뢰”를 최고의 가치로 여기고, 중고차 시장의 신뢰도와 투명성을 높이는데 앞장섭니다. K Car만의 진단전문성과 보증서비스, 체계화된 시스템을 통하여 중고차 유통시장의 변화를 주도합니다.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "data:image/jpeg;base64,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",
            },
          ],
        },
      },
      {
        companyNumber: "120-88-01280",
        contactorEmail: "recruit@toss.im",
        companyName: "비바리버블리카",
        homeAddressInfo: {
          fullAddress:
            "서울특별시 강남구 테헤란로 142, 12층 (역삼동, 아크플레이스)",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "금융 및 보험업",
          },
        ],
        workerCount: 764,
        annualSales: 472700000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "대한민국 금융을 혁신해 나가는 토스커뮤니티와 함께 할 동료를 찾습니다. 토스커뮤니티의 목표는 명확합니다.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/113/fwkfqnwuz0opgher__1080_790.png",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/113/xemr1kbbqwkn1lwo__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/113/g3xtmrusn55odxoi__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "220-87-42885",
        contactorEmail: "contact@yanolja.com",
        companyName: "야놀자",
        homeAddressInfo: {
          fullAddress: "서울특별시 강남구 테헤란로 108길 42 (대치동 1003)",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "예술, 스포츠 및 여가관련 서비스업",
          },
        ],
        workerCount: 1194,
        annualSales: 886400000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ결혀ㅛㅙㅑ여교솔첳패ㅓㅔ",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/4924/mynzjzvx2zw7rbfx__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/52/exocenl5nzdbyhwv__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/52/17418_2_4.b5b3f791__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "113-86-21886",
        contactorEmail: "miricanvas@miridih.com",
        companyName: "미리디",
        homeAddressInfo: {
          fullAddress: "서울 구로구 디지털로31길 12, 태평양물산 8층",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "교육 및 서비스업",
          },
        ],
        workerCount: 190,
        annualSales: 403400000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction: "미리디가 만들고 싶은 세상입니다!",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/2569/esaq2zt11khcj0fx__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/2569/38nlhrvtjqw5jg0k__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/2569/qwcc6bvtooh4hzxp__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "211-88-41856",
        contactorEmail: "support@tmon.co.kr",
        companyName: "티몬",
        homeAddressInfo: {
          fullAddress: "서울 강남구 압구정로 118 아리지빌딩",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "기타 개인서비스업",
          },
        ],
        workerCount: 733,
        annualSales: 412200000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "티몬은 더 나은 라이프스타일을 제안합니다. 고객들이 일상 속 어떤 순간에서도 쇼핑에 대한 새로운, 즐거운 경험을 만나는 곳.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/408/zckgxfxssz3xsuhl__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/408/rkcgfsykzo4eczg3__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/408/opddvnikg82fjvet__1080_790.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "116-81-18745",
        contactorEmail: "contact@gsretail.co.kr",
        companyName: "GS라테일",
        homeAddressInfo: {
          fullAddress: "서울시 강남구 논현로 508(역삼동 679번지 GS타워)",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "수리 및 기타 개인서비스업",
          },
        ],
        workerCount: 6756,
        annualSales: 382400000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "GS리테일은 최고의 제품과 진실된 서비스로 고객을 만족시키며 높은 수익을 창출하고, 지속적으로 성장하는 기업입니다.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/10386/ujfcgxcmdsoe46gt__1080_790.jpg",
            },
            {
              fileUrl:
                "https://www.wikileaks-kr.org/news/photo/202205/126655_110496_857.jpg",
            },
            {
              fileUrl:
                "http://www.sisajournal-e.com/news/photo/201911/208571_70771_3458.jpg",
            },
          ],
        },
      },
      {
        companyNumber: "299-86-00021",
        contactorEmail: "contact@laftel.net",
        companyName: "라프텔",
        homeAddressInfo: {
          fullAddress: "서울특별시 송파구 올림픽로 300 롯데월드타워 35층",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "예술, 스포츠 및 여가관련 서비스업 ",
          },
        ],
        workerCount: 92,
        annualSales: 143800000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction: `라프텔은 국내 1위 애니메이션 OTT 플랫폼으로"애니메이션 콘텐츠"에 특화된 스트리밍 서비스입니다.`,
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "data:image/jpeg;base64,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",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/847/at8d5opwdhtl0jws__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/847/lfrsxdzzjqqt8ur4__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/847/1yixbo78p6ldgzn4__1080_790.jpg",
            },
          ],
        },
      },
    ],
    last: false,
    totalPages: 3,
    totalElements: 17,
    size: 8,
    number: 1,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    first: false,
    numberOfElements: 8,
    empty: false,
  },
  list3: {
    content: [
      {
        companyNumber: "106-81-86950",
        contactorEmail: "   bnkr_recruit@bandainamcoasia.com",
        companyName: "반다이남코코리아",
        homeAddressInfo: {
          fullAddress: "서울특별시 중구 서소문로 89, 5층 (순화동, 순화빌딩)",
          addressNumber: 35231,
        },
        businessTagged: [
          {
            id: "예술, 스포츠 및 여가관련 서비스업",
          },
        ],
        workerCount: 1238,
        annualSales: 694200000,
        isLeading: false,
        isAssociated: false,
        latestNoticeYear: null,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction:
            "반다이남코그룹은 상품과 서비스를 통해 꿈, 놀이, 감동을 제공하는 것을 미션으로 삼고, 비전인 ‘세계에서 가장 기대되는 엔터테인먼트 기업 그룹’이 되는 것을 목표로 하고 있습니다.",
          businessCertificate: {
            fileId: "0841d497-9ef4-47a5-819b-19eab4d47f14",
            fileUrl:
              "https://info-dsm.s3.ap-northeast-2.amazonaws.com/info-dsm/COMPANY/000-00-00005/BUSINESS_CERTIFICATE/0841d497-9ef4-47a5-819b-19eab4d47f14/Welcome%20to%20Hwp.hwp",
            fileType: "DOCS",
            extension: "hwp",
            fileName: "Welcome to Hwp.hwp",
            companyNumber: "000-00-00005",
            companyFileClassificationType: "BUSINESS_CERTIFICATE",
          },
          companyIntroductionFile: [],
          companyLogo: null,
          companyPhotoList: [
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/7153/2gmnbcpgckintxf7__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/7153/yxltc3awxohctmbh__1080_790.jpg",
            },
            {
              fileUrl:
                "https://static.wanted.co.kr/images/company/7153/dpb8ql5svkn509xa__1080_790.jpg",
            },
          ],
        },
      },
    ],
    last: true,
    totalPages: 3,
    totalElements: 17,
    size: 8,
    number: 1,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    first: false,
    numberOfElements: 8,
    empty: false,
  },
};
