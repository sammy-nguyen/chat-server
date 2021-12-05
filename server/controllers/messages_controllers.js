// Create an array to hold the messages.
// Create a variable that will keep track of what id to assign to messages.
// The id should start at 0 and increment after every creation.

const arrMessage = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    arrMessage.push({ id, text, time });
    id++;
    res.status(200).send(arrMessage);
  },

  read: (req, res) => {
    res.status(200).send(arrMessage);
  },

  update: (req, res) => {
    const { text } = req.body;
    const updatedID = req.params.id;
    const index = arrMessage.findIndex((message) => message.id == updatedID);
    let message = arrMessage[index];

    arrMessage[index] = {
      id: message.id,
      text: text,
      time: message.time,
    };
    res.status(200).send(arrMessage);
  },

  delete: (req, res) => {
    const deletedID = req.params.id;
    index = arrMessage.findIndex((message) => message.id == deletedID);
    arrMessage.splice(index, 1);
    res.status(200).send(arrMessage);
  },
};
