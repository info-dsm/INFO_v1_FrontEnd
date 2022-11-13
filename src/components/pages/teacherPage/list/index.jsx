import Wait from "./wait";
const TeacherList = () => {
  return (
    <>
      <Wait path="/notice/waiting-notice/list" />
      <Wait path="/notice/list" />
    </>
  );
};
export default TeacherList;
