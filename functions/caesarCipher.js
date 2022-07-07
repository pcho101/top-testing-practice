const isUpperCase = (char) => {
  const c = char.charCodeAt(0);
  return c >= 65 && c <= 90
}

const isLowerCase = (char) => {
  const c = char.charCodeAt(0);
  return c >= 97 && c <= 122
}

const getNextChar = (char) => {
  if(isUpperCase(char)) {
    const nextCharCode = char.charCodeAt(0) + 1 > 90 ? 65 : char.charCodeAt(0) + 1;
    return String.fromCharCode(nextCharCode);
  }
  else if(isLowerCase(char)) {
    const nextCharCode = char.charCodeAt(0) + 1 > 122 ? 97 : char.charCodeAt(0) + 1;
    return String.fromCharCode(nextCharCode);
  }
  else {
    return char
  }
}

const caesarCipher = (string) => {
  return string.split("").map(x => getNextChar(x)).join("");
}

export { caesarCipher }