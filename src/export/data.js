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
export const initialCompany = {
  content: [
    {
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
    },
    {
      companyNumber: "000-00-00000",
      contactorEmail: "bugyejeong7228@gmail.com",
      companyName: "이동현컴퍼니",
      homeAddressInfo: {
        fullAddress: "대전 서구 가수원로 5 (가수원동, 은아아파트5단지)",
        addressNumber: 35389,
      },
      businessTagged: [
        {
          id: "금융 및 보험업",
        },
        {
          id: "부동산업",
        },
        {
          id: "전기‧가스/수도/건설업",
        },
      ],
      workerCount: 123,
      annualSales: 100000000,
      isLeading: false,
      isAssociated: false,
      latestNoticeYear: null,
      totalEmployedCount: 0,
      companyIntroductionResponse: {
        introduction:
          "ㄱ챃푀ㅠ;ㅐㅑㅓㅔㅔ래쇼ㅑㅓㅎ로ㅠ;ㅓ'ㄱ챃푀ㅠ;ㅐㅑㅓㅔㅔ래쇼ㅑㅓㅎ로ㅠ;ㅓ'ㄱ챃푀ㅠ;ㅐㅑㅓㅔㅔ래쇼ㅑㅓㅎ로ㅠ;ㅓ'ㄱ챃푀ㅠ;ㅐㅑㅓㅔㅔ래쇼ㅑㅓㅎ로ㅠ;ㅓ'ㄱ챃푀ㅠ;ㅐㅑㅓㅔㅔ",
        businessCertificate: null,
        companyIntroductionFile: [],
        companyLogo: null,
        companyPhotoList: [],
      },
    },
    {
      companyNumber: "000-00-00001",
      contactorEmail: "steambugye7228@gmail.com",
      companyName: "string",
      homeAddressInfo: {
        fullAddress: "대전 서구 가수원로 5 (가수원동, 은아아파트5단지)",
        addressNumber: 35389,
      },
      businessTagged: [
        {
          id: "사업체 수",
        },
      ],
      workerCount: 123,
      annualSales: 1000,
      isLeading: false,
      isAssociated: false,
      latestNoticeYear: null,
      totalEmployedCount: 0,
      companyIntroductionResponse: {
        introduction: "string",
        businessCertificate: null,
        companyIntroductionFile: [],
        companyLogo: null,
        companyPhotoList: [],
      },
    },
    {
      companyNumber: "000-00-00002",
      contactorEmail: "artgyejeong7228@gmail.com",
      companyName: "string",
      homeAddressInfo: {
        fullAddress: "대전 서구 가수원로 5 (가수원동, 은아아파트5단지)",
        addressNumber: 35389,
      },
      businessTagged: [
        {
          id: "사업체 수",
        },
      ],
      workerCount: 123,
      annualSales: 1000,
      isLeading: false,
      isAssociated: false,
      latestNoticeYear: null,
      totalEmployedCount: 0,
      companyIntroductionResponse: {
        introduction: "string",
        businessCertificate: null,
        companyIntroductionFile: [],
        companyLogo: null,
        companyPhotoList: [],
      },
    },
    {
      companyNumber: "000-00-00005",
      contactorEmail: "o.deng7228@gmail.com",
      companyName: "이동현코퍼레이션",
      homeAddressInfo: {
        fullAddress: "대전 서구 갈마역로25번길 70 (갈마동, 대전둔산중학교)",
        addressNumber: 35231,
      },
      businessTagged: [
        {
          id: "금융 및 보험업",
        },
        {
          id: "부동산업",
        },
        {
          id: "전기‧가스/수도/건설업",
        },
      ],
      workerCount: 6238,
      annualSales: 100000000,
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
        companyPhotoList: [],
      },
    },
    {
      companyNumber: "000-00-00006",
      contactorEmail: "bbbugyejeong1234@gmail.com",
      companyName: "이동현회사",
      homeAddressInfo: {
        fullAddress: "울산 울주군 온산읍 삼평길 16 (강양리)",
        addressNumber: 45008,
      },
      businessTagged: [
        {
          id: "금융 및 보험업",
        },
        {
          id: "부동산업",
        },
        {
          id: "운수 및 창고업",
        },
      ],
      workerCount: 234567,
      annualSales: 1267892461,
      isLeading: false,
      isAssociated: false,
      latestNoticeYear: null,
      totalEmployedCount: 0,
      companyIntroductionResponse: {
        introduction:
          "셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ셭ㄹ쵸호ㅑㅐㅓㅔㅑㅕㅛㅑㄽㅇㅅ",
        businessCertificate: null,
        companyIntroductionFile: [],
        companyLogo: null,
        companyPhotoList: [],
      },
    },
    {
      companyNumber: "100-00-00000",
      contactorEmail: "explosion8280@gmail.com",
      companyName: "프로젝트 이동현",
      homeAddressInfo: {
        fullAddress: "대전 서구 가수원로 5 (가수원동, 은아아파트5단지)",
        addressNumber: 35389,
      },
      businessTagged: [
        {
          id: "부동산업",
        },
        {
          id: "전기‧가스/수도/건설업",
        },
      ],
      workerCount: 123,
      annualSales: 1000000000,
      isLeading: false,
      isAssociated: false,
      latestNoticeYear: null,
      totalEmployedCount: 0,
      companyIntroductionResponse: {
        introduction:
          "ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어ㄴㅇ러ㅏㅣㅏ;ㄹ어",
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
        companyPhotoList: [],
      },
    },
  ],
  pageable: {
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 6,
  size: 10,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  first: true,
  numberOfElements: 6,
  empty: false,
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
