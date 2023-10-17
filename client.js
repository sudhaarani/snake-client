const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.31.60.168",// IP address here, server ip address
    port: 50541// PORT number here, server port
  });

  // conn.on("connect", () => {
  //   conn.write("Connection established!"); //sends msg to server once connection established
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {  //listens the event(msgs) from connected server
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };