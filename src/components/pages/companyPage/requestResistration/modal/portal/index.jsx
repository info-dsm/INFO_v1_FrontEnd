import ReactDom from "react-dom";
import SelectModal from "..";
const ModalPortal = () => {
  return (
    <>
      {ReactDom.createPortal(<SelectModal />, document.getElementById("modal"))}
    </>
  );
};
export default ModalPortal;
