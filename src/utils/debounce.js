export const debounce = (callback, delay) => {
  let timeoutId
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}
