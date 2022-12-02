import styled from "styled-components";
import SelectContainer from "./SelectContainer";
import companyImg from "../../../../../images/company.png";
import teacherImg from "../../../../../images/teacher.png";

const Select = () => {
  const data = [
    {
      img: teacherImg,
      title: "선생님 로그인",
      description: (
        <>
          선생님으로 로그인하여 <br /> 사이트를 관리해보세요!
        </>
      ),
      url: "teacher/login",
    },
    {
      img: companyImg,
      title: "기업 로그인",
      description: (
        <>
          기업으로 로그인하여 <br /> 채용 공고를 등록해보세요!
        </>
      ),
      url: "company/login",
    },
  ];
  return (
    <>
      <MainDiv>
        {data.map((item) => (
          <SelectContainer
            img={item.img}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </MainDiv>
    </>
  );
};

export default Select;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: inline-flex;
  justify-content: center;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2086_9)'%3E%3Crect width='1920' height='1080' fill='white'/%3E%3Crect width='1920' height='1080' fill='white'/%3E%3Cmask id='path-2-inside-1_2086_9' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1174.6 0H1911.89C1916.31 0 1919.89 3.58172 1919.89 8V1088.78L575 1237L1174.6 0Z'/%3E%3C/mask%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1174.6 0H1911.89C1916.31 0 1919.89 3.58172 1919.89 8V1088.78L575 1237L1174.6 0Z' fill='%23AB91F8'/%3E%3Cpath d='M1174.6 0V-2H1173.35L1172.8 -0.872366L1174.6 0ZM1919.89 1088.78L1920.11 1090.77L1921.89 1090.57V1088.78H1919.89ZM575 1237L573.2 1236.13L571.622 1239.38L575.219 1238.99L575 1237ZM1174.6 2H1911.89V-2H1174.6V2ZM1911.89 2C1915.21 2 1917.89 4.6863 1917.89 8H1921.89C1921.89 2.47714 1917.42 -2 1911.89 -2V2ZM1917.89 8V1088.78H1921.89V8H1917.89ZM1919.68 1086.79L574.781 1235.01L575.219 1238.99L1920.11 1090.77L1919.68 1086.79ZM576.8 1237.87L1176.4 0.872366L1172.8 -0.872366L573.2 1236.13L576.8 1237.87Z' fill='white' mask='url(%23path-2-inside-1_2086_9)'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2086_9'%3E%3Crect width='1920' height='1080' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  align-items: center;
  gap: 50px;
`;
