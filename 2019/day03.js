// // day 3
const fs = require ("fs");
const data = fs.readFileSync("day03input.txt", "utf-8").split("\n");
const set1 = data[0].split(",");
const set2 = data[1].split(",");



let move = {'U': [0, 1], 'D': [0, -1], 'L': [-1, 0], 'R': [1, 0] }


let test1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72','U62','R66','U55','R34','D71','R55','D58','R83'] // = distance 159
let test2 = ['R98','U47','R26','D63','R33','U87','L62','D20','R33',  'U53','R51','U98','R91','D20','R16','D67','R40','U7','R15','U6','R7'] // distance 135
let test3 = ["R", "R", "U", "U", "L", "D"]


let t1 = "R080"
let t2 = ""
console.log(Number(t1.slice(1)), t1.slice(1))

function manhattan(x1, x2) {
  return (x1[0] - x2[0]) + Math.abs(x1[1] - x2[1])
}

function pathFinder(moves) {
  let x = 0;
  let y = 0;
  let box = [];

  moves.forEach(move => {
    if (move[0] === "R") {
      x += 1
    } else if (move[0] === "L") {
      x -= 1
    } else if (move[0] === "U") {
      y += 1
    } else if (move[0] === "D") {
      y -= 1
    }
  })

  console.log(x, y)
}

console.log(pathFinder(test3))