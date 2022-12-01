import "./style.css";
export const Notice = (props) => {
  if (document.getElementsByClassName("NoticeMainDiv").length === 0) {
    const body = document.querySelector("body");
    const mainDiv = document.createElement("div");
    const logoSpan = document.createElement("span");
    const iconDiv = document.createElement("div");
    const messageDiv = document.createElement("div");
    const barDiv = document.createElement("div");

    mainDiv.classList.add("NoticeMainDiv");
    logoSpan.classList.add("NoticeLogo");
    iconDiv.classList.add("NoticeIcon");
    messageDiv.classList.add("NoticeMessage");
    messageDiv.innerText = `${props.message}`;
    barDiv.classList.add("NoticeBar");

    if (props.state === "success") {
      mainDiv.classList.add("NoticeSuccessMain");
      iconDiv.classList.add("NoticeSuccessIcon");
      barDiv.classList.add("NoticeSuccessBar");
    } else if (props.state === "error") {
      mainDiv.classList.add("NoticeErrorMain");
      barDiv.classList.add("NoticeErrorBar");
    }

    logoSpan.appendChild(iconDiv);
    mainDiv.appendChild(logoSpan);
    mainDiv.appendChild(messageDiv);
    mainDiv.appendChild(barDiv);

    body.appendChild(mainDiv);

    setTimeout(() => {
      body.removeChild(mainDiv);
    }, 3500);
    clearTimeout();
  }
};
