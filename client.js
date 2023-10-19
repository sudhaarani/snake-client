const net = require("net");//net module from node app to use TCP
const { IP, PORT } = require("./constants"); //importing constant variables from constants.js
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({ //establishing a connection
    host: IP,// IP address here, server ip address
    port: PORT// PORT number here, server port
  });

  conn.on("connect", () => {
    const name = "Name: DS";
    //const moveUp = "Move: up";
    conn.write(`Successfully connected to game server! This is ${name}`); //sends msg to server once connection established
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {  //listens the event(msgs) from connected server
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect }; // emporting connect function