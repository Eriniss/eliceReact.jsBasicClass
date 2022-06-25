const myObj = {
  name: "민수",
  grade: "freshman",
}

const newObj = { ...myObj }

newObj.gender = "male";
newObj.grade = "sophomore";

console.log(newObj);