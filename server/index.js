// Require express.
// Create an express app.

const express = require("express");
const app = express();
const messageController = require("./controllers/messages_controllers");

// Configure the app to parse JSON from the body.
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const url = "/api/messages";
app.post(url, messageController.create);
app.get(url, messageController.read);
app.put(`${url}/:id`, messageController.update);
app.delete(`${url}/:id`, messageController.delete);

//Configure the app to listen on port 3001 and display a message when it is listening.
const port = 3001;
app.listen(port, () => {
  console.log(`${port} is running :)`);
});
