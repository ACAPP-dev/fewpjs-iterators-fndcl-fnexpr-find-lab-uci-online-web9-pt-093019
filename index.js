const testVar = {}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]
function testFunc() {
  return "hi"
}

const superbowlWin = (arrayObject) => {
  const result = arrayObject.find(recordObject => recordObject.result === "W")
  if (result) {return result.year}
}

console.log(superbowlWin(record))