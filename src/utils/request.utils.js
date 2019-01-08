export function delay(fn = () => {}, delay = 1000) {
  return setTimeout(() => {
    fn();
  }, delay);
}