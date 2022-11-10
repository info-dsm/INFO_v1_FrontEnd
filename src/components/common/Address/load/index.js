// export const postcodeScriptUrl =
//   "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

// const loadPostcode = (() => {
//   const scriptId = "daum_postcode_script";
//   let promise = null;

//   return function (url = postcodeScriptUrl) {
//     if (promise) return promise;

//     promise = async () => {
//       const script = document.createElement("script");
//       script.src = url;
//       script.onload = async () => {
//         if (window.daum.Postcode) {
//           return await window.daum.Postcode;
//         }
//         new Error(
//           "Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."
//         );
//       };
//       script.onerror = (error) => error;
//       script.id = scriptId;
//       document.body.appendChild(script);
//     };

//     return promise;
//   };
// })();

// export default loadPostcode;
export const postcodeScriptUrl =
  "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const loadPostcode = (function () {
  const scriptId = "daum_postcode_script";
  let promise = null;

  return function (url = postcodeScriptUrl) {
    if (promise) return promise;

    promise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        if (window.daum.Postcode) {
          return resolve(window.daum.Postcode);
        }
        reject(
          new Error(
            "Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."
          )
        );
      };
      script.onerror = (error) => reject(error);
      script.id = scriptId;
      document.body.appendChild(script);
    });

    return promise;
  };
})();

export default loadPostcode;
