export function cssStringFromArray (cssStringArray) {
  return joinAndTrim(cssStringArray);
}

export function cssString (...cssStrings) {
  return joinAndTrim(cssStrings);
}

function joinAndTrim (cssStringArray) {
  return cssStringArray.join(' ').trim();
}
