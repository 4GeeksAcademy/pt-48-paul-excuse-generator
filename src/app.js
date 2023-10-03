let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator(array) {
  let theExcuse;
  theExcuse = array[Math.floor(Math.random() * array.length)];
  return theExcuse;
}

function newExcuse(who, action, what, when) {
  let myNewExcuse = "";
  myNewExcuse =
    excuseGenerator(who) +
    " " +
    excuseGenerator(action) +
    " " +
    excuseGenerator(what) +
    " " +
    excuseGenerator(when) +
    ".";
  return myNewExcuse;
}

let generateExcuse = newExcuse(who, action, what, when);

document.getElementById("excuse").innerHTML = generateExcuse;
