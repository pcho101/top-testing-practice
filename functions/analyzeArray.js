const analyzeArray = (array) => {
  const length = array.length;
  const total = array.reduce((prev, cur) => (prev + cur), 0)
  const maxVal = array.reduce((a, b) => Math.max(a, b));
  const minVal = array.reduce((a, b) => Math.min(a, b));

  const newObject = {
    average: total/length,
    min: minVal,
    max: maxVal,
    length: length
  }

  return newObject
}

export { analyzeArray }