
// Stores the active TCP connection object.
let connection; //outer-most scope so that it can be used by all functions in this module
// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;//to send messages to the server we need connection object, which is returned from connect func
  // in client.js is passed as argument to setupInput func here
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8"); //
  stdin.resume();
  stdin.write("\t\t     press ctrl + c to terminate the game\n");
  stdin.write("\t   or press any of the keys(w,a,s,d) to start the game\n");
  stdin.write("\t\t       or press m to send the message\n");
  stdin.on("data", handleUserInput); //callback function
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') { //other term for "ctrl + c"
    process.stdin.write("\t\t\t        Game Terminated!\n");
    process.exit(); //terminates the game
  }
  if (key === 'w') { //"Move: up" is sent to server when key w is pressed
    connection.write("Move: up");
  }
  if (key === 'a') { //"Move: left" is sent to server when key a is pressed
    connection.write("Move: left");
  }
  if (key === 's') { //"Move: down" when key s is pressed
    connection.write("Move: down");
  }
  if (key === 'd') { //"Move: right" when key d is pressed
    connection.write("Move: right");
  }
  if (key === 'm') { //given message is sent when key m is pressed
    connection.write("Say: straight only");
  }
};

module.exports = { setupInput };