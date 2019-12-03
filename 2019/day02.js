const fs = require ("fs")
let data = fs.readFileSync("day02input.txt", "utf-8").split(",").map(x=>Number(x));

// part1
const intCode = input => {
  for (let i = 0 ; i < input.length ; i += 4) {
    if (input[i] === 1) {
      input[input[i+3]] = input[input[i+1]] + input[input[i+2]]
    } else if (input[i] === 2) {
      input[input[i+3]] = input[input[i+1]] * input[input[i+2]]
    } else if (input[i] === 99) {
      return input[0];
    }
  }
}

const programAlarmState = input => {
  input[1] = 12;
  input[2] = 2;
  return intCode(input)
}

// console.log(programAlarmState(data))

// part2
const nounVerb = () => {
  for (let noun = 1; noun < 100 ; noun++) {
    for (let verb = 1; verb < 100 ; verb++) {

      let reset = [...data]
      reset[1] = noun;
      reset[2] = verb;

      if (intCode(reset) === 19690720) return (100 * noun + verb)
    }
  }
}

console.log(nounVerb())
