const fs = require("fs");

fs.readFile("src/sample_input/input.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  let obj = {};
  let inputLines = data.toString().split("\n");
  for (let i = 0; i < inputLines.length; i++) {
    input = inputLines[i].trim().split(" ");
    if (input[0] === "CREATE") {
      if (obj[input[1]] === undefined) {
        obj[input[1]] = { name: input[2], balance: 0 };
      }
    }
    if (input[0] === "DEPOSIT") {
      if (input[1] === "ACC001") {
        obj["ACC001"].balance = obj["ACC001"].balance + Number(input[2]);
      }
      if (input[1] === "ACC002") {
        obj["ACC002"].balance = obj["ACC002"].balance + Number(input[2]);
      }
    }
    if (input[0] === "WITHDRAW") {
      if (input[1] === "ACC001") {
        obj["ACC001"].balance = obj["ACC001"].balance - Number(input[2]);
      }
      if (input[1] === "ACC002") {
        obj["ACC002"].balance = obj["ACC002"].balance - Number(input[2]);
      }
    }
    if(input[0] === "BALANCE"){
        let name = obj[input[1]].name;
        let balance = obj[input[1]].balance
        console.log(`${name} ${balance}`)
    }
  }
});
