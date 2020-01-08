/* eslint-disable no-multi-assign */
/* eslint-disable no-var */
/* eslint-disable func-names */
export const debounce = function(
  func: Function,
  wait: number,
  immediate?: any,
) {
  // immediate默认为false
  let timeout: NodeJS.Timeout | null;
  let args: IArguments | null;
  let context: null;
  let timestamp: number;
  let result: any;

  var later = function() {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args as any);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    // @ts-ignore
    context = this;
    // eslint-disable-next-line prefer-rest-params
    args = arguments;
    timestamp = Date.now();
    const callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};
