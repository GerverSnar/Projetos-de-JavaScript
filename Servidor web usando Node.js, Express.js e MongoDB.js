const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const MONGODB_URI = "mongodb://localhost:27017/my-database";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", TodoSchema);

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text });
  await todo.save();
  res.json(todo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});