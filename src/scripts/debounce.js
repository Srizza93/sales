export default function createDebounce() {
  let timeout = null;
  return function (fnc) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, 250);
  };
}
