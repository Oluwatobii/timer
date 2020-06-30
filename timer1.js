args = process.argv.slice(2); // is an array [];

const alarm = function (input) {
  for (num of args) {
    if (input === []) {
      break;
    } else if (Math.sign(num) === -1 || num === NaN) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, num * 1000);
    }
  }
};

console.log(alarm(args));

//An illustration on how to run this file: node timer1.js 10 3 5 15 9
