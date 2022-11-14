export const open = (options) => {
  const {
    defaultQuery,
    left,
    top,
    popupKey,
    popupTitle,
    autoClose,
    onComplete,
    onResize,
    onClose,
    onSearch,
    onError,
    ...others
  } = {
    ...options,
  };
  const postcodeScriptUrl =
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
  return loadPostcode()
    .then((Postcode) => {
      const postcode = new Postcode({
        ...others,
        oncomplete: onComplete,
        onsearch: onSearch,
        onresize: onResize,
        onclose: onClose,
      });
      postcode.open({
        q: defaultQuery,
        left,
        top,
        popupTitle,
        popupKey,
        autoClose,
      });
    })
    .catch(onError);
};
