export const debounce = (func, wait) => {
  let timeoutId = null;
  return function (event) {
    let self = this;
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(self, event), wait);
  };
};
