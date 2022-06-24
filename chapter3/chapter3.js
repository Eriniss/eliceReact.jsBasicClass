const arr = [1, 2, 3, 4, 5];

const myFunc = (...n) => {
  return arr + 2;
}

console.log(myFunc(...arr));