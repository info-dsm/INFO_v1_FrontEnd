import styled from "styled-components";

export const Page_moving_btn = styled.a`
  width: ${(props) => props.width || "600px"};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #4000ff;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

export const Sortation = styled.div`
  position: absolute;
  top: 0;
`;

export const Image = styled.img.attrs({
  onError: (e) => console.log(e),
})`
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
  background-size: contain;
  /* object-fit: scale-down; */
  border-radius: 10px;
`;

// export const Search_bar = ({width = '800px', search = function() {}}) => {

//     return (
//         <Search_Box width={width}>
//             <Search_input placeholder='검색어를 입력해주세요.' width={width}/>
//             <Search_btn onClick={() => {
//                 let text = document.querySelectorAll('input')[0];
//                 search(text.value);
//                 text.value = '';
//             }}>검색</Search_btn>
//         </Search_Box>
//     )
// }

const Search_Box = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: 60px;
  top: 500px;

  background: #4000ff;
  border-radius: 100px;
  font-family: "NanumGothic";
  font-style: normal;
`;

const Search_input = styled.input`
  width: calc(${(props) => props.width} - 80px);
  height: 50px;
  padding: 0 60px 0 45px;

  background: #ffffff;
  border-radius: 100px;
  border: none;
  margin: 5px 0 0 5px;

  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
`;

const Search_btn = styled.button`
  position: absolute;
  width: 125px;
  height: 60px;
  right: 0;

  background: #4000ff;
  border: none;
  border-radius: 100px;

  font-weight: 600;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  cursor: pointer;
`;
