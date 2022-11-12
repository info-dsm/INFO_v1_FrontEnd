import "./style.css";
export const Notice = (props) => {
  const asdf = document.getElementsByClassName("MainDiv");
  console.log(asdf);
  if (asdf.length === 0) {
    const body = document.querySelector("body");
    const mainDiv = document.createElement("div");
    const logoSpan = document.createElement("span");
    const iconDiv = document.createElement("div");
    const messageDiv = document.createElement("div");
    const barDiv = document.createElement("div");

    mainDiv.classList.add("MainDiv");
    logoSpan.classList.add("Logo");
    iconDiv.classList.add("Icon");
    messageDiv.classList.add("Message");
    messageDiv.innerText = `${props.message}`;
    barDiv.classList.add("Bar");

    if (props.state === "success") {
      mainDiv.classList.add("SuccessMain");
      iconDiv.classList.add("SuccessIcon");
      barDiv.classList.add("SuccessBar");
    } else if (props.state === "error") {
      mainDiv.classList.add("ErrorMain");
      barDiv.classList.add("ErrorBar");
    }

    logoSpan.appendChild(iconDiv);
    mainDiv.appendChild(logoSpan);
    mainDiv.appendChild(messageDiv);
    mainDiv.appendChild(barDiv);
    console.log(mainDiv);

    body.appendChild(mainDiv);

    setTimeout(() => {
      body.removeChild(mainDiv);
      console.log(mainDiv);
    }, 3500);
    clearTimeout();
  }
};
