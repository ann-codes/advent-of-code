const fs = require("fs")
let data = fs.readFileSync("day01input.txt", "utf-8").split("\n");

// part1
const fuelReq = (input) => {
  let fuel = input.map(mass => Math.floor(Number(mass)/3) - 2)
  return fuel.reduce((sum, current) => sum + current)
}

const fuelReq_golf = i => i.map(m => Math.floor(Number(m)/3)-2).reduce((t,cv) => t+cv)

// part2
const realFuelReq = (input) => {
  let fuel = input.reduce((totalMass, currentMass) => {
    currentMass = Math.floor(Number(currentMass)/3)-2
    while (currentMass > 0) {
      totalMass.push(currentMass)
      currentMass = Math.floor(Number(currentMass)/3)-2
    }
    return totalMass
  }, [])
  return fuel.reduce((sum, current) => sum + current)
}

console.log(realFuelReq(data))
