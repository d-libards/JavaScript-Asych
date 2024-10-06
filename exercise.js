const check100 = function (num1, num2) {
  return num1 === 100 || num2 === 100 || num1 + num2 === 100;
  //   if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
  //     return true;
  //   }

  //   return false;
};

// console.log(check100(100, 0));
// console.log(check100(23, 23));

const extensionSlice = function (string) {
  return string.slice(string.indexOf("."));
};

// console.log(extensionSlice(`text.txt`));
// console.log(extensionSlice(`script.js`));

const moveCharForward = function (string) {
  let result = "";

  for (let i = 0; string.length - 1 >= i; i++) {
    let nextChar = string.charCodeAt(i) + 1;
    result += String.fromCharCode(nextChar);
  }

  return result;
};

// console.log(moveCharForward("ABCD"));

const date = new Date();

// console.log(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);

const startWith = function (str) {
  return str.startsWith("New!") ? str : `New! ${str}`;
};

console.log(startWith("test"));
console.log(startWith("New!"));
