import { Notice } from "../../../../common/notice";
import { fileName } from "./data";
import * as S from "./styles";

const CompanyFormData = ({ state, setState }) => {
  const AddFileProps = (e, props) => {
    let arr = [];
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i].size <= 1000000) {
        arr.push(e.target.files[i].name);
      } else {
        Notice({
          state: "error",
          message: "파일 크기가 너무 큽니다.",
        });
        arr = [];
        break;
      }
    }
    setState({ ...state, [props]: arr });
  };
  return (
    <S.UlSubmitted>
      {fileName.map((item, i) => (
        <>
          <S.LiProps>
            <S.LabelFile for={`${item.name}`}>{item.kr}</S.LabelFile>
            <S.FileHidden
              type="file"
              id={`${item.name}`}
              multiple={
                item.name === "companyIntroductionFile" ||
                item.name === "companyPhotoList"
                  ? "multiple"
                  : ""
              }
              accept={
                i < 2 ? ".pdf, .doc, .docx, .hwp" : "image/jpeg, image/png"
              }
              name={item.name}
              onChange={(e) => AddFileProps(e, item.name)}
            ></S.FileHidden>

            {state[item.name].map((files) => (
              <>
                <S.FileTextDiv>
                  <S.UlTable>
                    <S.FileTextDiv>{files}</S.FileTextDiv>
                  </S.UlTable>
                </S.FileTextDiv>
              </>
            ))}
          </S.LiProps>
        </>
      ))}
    </S.UlSubmitted>
  );
};
export default CompanyFormData;
