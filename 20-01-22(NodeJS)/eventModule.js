const event = require("events");

class Event extends event {}

const myCall = new Event();
let c = 0;
myCall.on("call", (a) => {
  console.log("Hello " + a + "\n " + this);
  console.log(c);
  c++;
});

console.log("app is activated");
myCall.emit("call", "Kamal Singh");
console.log("App still running");
myCall.emit("call", "Kamal Singh rawat");
