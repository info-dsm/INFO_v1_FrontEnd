import { useCallback, useEffect } from "react";

import loadPostcode, { postcodeScriptUrl } from "./load";

function useDaumPostcodePopup(scriptUrl = postcodeScriptUrl) {
  useEffect(() => {
    loadPostcode(scriptUrl);
  }, [scriptUrl]);

  const open = useCallback(
    (options) => {
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

      return loadPostcode(scriptUrl)
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
    },
    [scriptUrl]
  );

  return open;
}

export default useDaumPostcodePopup;
