/* eslint-disable no-multi-assign */
/* eslint-disable no-var */
/* eslint-disable func-names */
export const debounce = function(func, wait, immediate) {
  // immediate默认为false
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  var later = function() {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    // eslint-disable-next-line prefer-rest-params
    args = arguments;
    timestamp = Date.now();
    // 第一次调用该方法时，且immediate为true，则调用func函数
    const callNow = immediate && !timeout;
    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};
