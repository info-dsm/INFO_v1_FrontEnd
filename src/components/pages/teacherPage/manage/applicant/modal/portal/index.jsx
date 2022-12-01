import ReactDom from "react-dom";
import AppliModal from "..";
const ApplicantPortal = () => {
  return (
    <>
      {ReactDom.createPortal(
        <AppliModal />,
        document.getElementById("applicant")
      )}
    </>
  );
};
export default ApplicantPortal;
