const arr = [1, 2, 3, 4, 5];

const myFunc = (...n) => {
  let sum = 0;
  n.map((item) => {
    sum += item;
  })
  return sum;
}

console.log(myFunc(...arr));