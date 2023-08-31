const Model = require("../models/model.js");

const fetchTodos = async (req, res) => {
  try {
    //find the notes
    const todos = await Model.find({ user: req.user._id });

    //Respond with them
    res.json({ todos });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const fetchTodo = async (req, res) => {
  try {
    //Get id off the url
    const todoId = req.params.id;

    //Find the note using that id
    const todo = await Model.findOne({ _id: todoId, user: req.user._id });

    //Respond with the note
    res.json({ todo });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const createTodo = async (req, res) => {
  try {
    //Get the sent in data off request body
    const { productname, sellername, price } = req.body;

    //create a note with it
    const todo = await Model.create({
      productname,
      sellername,
      price,
      user: req.user._id,
    });

    //respond with the new note
    res.json({ todo });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const updateTodo = async (req, res) => {
  //Get the id off the url
  const todoId = req.params.id;

  //Get the data off the req body
  const { productname, sellername, price } = req.body;

  //Find and update the record
  await Model.findOneAndUpdate(
    { _id: todoId, user: req.user_id },
    {
      productname,
      sellername,
      price,
    }
  );

  //Find updated note
  const todo = await Model.findById(todoId);

  //Respond with it
  res.json({ todo });
};

const deleteTodo = async (req, res) => {
  try {
    //get id off url
    const todoId = req.params.id;
    //Delete the record
    await Model.deleteOne({ _id: todoId, user: req.user._id });
    //Respond
    res.json({ success: "Record deleted" });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  fetchTodos,
  fetchTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
