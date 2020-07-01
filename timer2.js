const alarm = function () {
  var stdin = process.stdin;
  // Without this, we would only get streams once enter is pressed
  stdin.setRawMode(true);
  // Resume stdin in the parent process (node app won't quit all by itself
  // Unless an error or process.exit() happens)
  stdin.resume();
  // I don't want binary, do you?
  stdin.setEncoding("utf8");
  // On any data into stdin
  stdin.on("data", function (key) {
    // ctrl-c ( end of text )
    if (key === "\u0003") {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
    if (key === "b") {
      process.stdout.write("\x07");
    }
    if (key >= 1 && key <= 10) {
      console.log("Setting timer for " + key + " secounds...");
      setTimeout(() => {
        process.stdout.write("\x07");
      }, key * 1000);
    }
    // write the key to stdout all normal like
    process.stdout.write(key);
  });
};
alarm();
