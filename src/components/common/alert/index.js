import "./styles.css";

export const Alert = (function () {
  let promise = null;
  return function (props) {
    if (promise) return promise;
    const body = document.querySelector("body");
    const mainDiv = document.createElement("div");
    const modalDiv = document.createElement("div");
    const iconDiv = document.createElement("div");
    const icon = document.createElement("div");
    const h1 = document.createElement("h1");
    const message = document.createElement("div");
    const buttonDiv = document.createElement("div");

    mainDiv.classList.add("AlertMainDiv");
    modalDiv.classList.add("AlertModal");
    iconDiv.classList.add("AlertIconDiv");
    message.classList.add("AlertMessage");
    buttonDiv.innerHTML = `<button id="AlertButton">OK</button>`;
    message.innerText = props.message;
    h1.innerText = props.state;
    h1.classList.add("AlertH1");
    icon.classList.add("AlertIcon");

    if (props.state === "success") {
      h1.classList.add("SuccessH1");
      buttonDiv.classList.add("SuccessButton");
      iconDiv.classList.add("SuccessIconDiv");
      icon.classList.add("SuccessIcon");
    } else if (props.state === "error") {
      h1.classList.add("ErrorH1");
      buttonDiv.classList.add("ErrorButton");
      iconDiv.classList.add("ErrorIconDiv");
    }

    iconDiv.appendChild(icon);
    modalDiv.appendChild(iconDiv);
    modalDiv.appendChild(h1);
    modalDiv.appendChild(message);
    modalDiv.appendChild(buttonDiv);
    mainDiv.appendChild(modalDiv);
    body.appendChild(mainDiv);

    promise = new Promise((resolve, reject) => {
      document.getElementById("AlertButton").addEventListener("click", () => {
        modalDiv.classList.add("AlertFadeOutModal");
        setTimeout(() => {
          body.removeChild(mainDiv);
          return resolve("resolve");
        }, 500);
      });
    });
    return promise;
  };
})();
