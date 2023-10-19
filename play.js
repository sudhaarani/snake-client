
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connObject = connect();
//to send messages to the server we need connection object for setupInput func, so connection object is returned from connect func
// in client.js is passed as argument to setupInput func here
setupInput(connObject);