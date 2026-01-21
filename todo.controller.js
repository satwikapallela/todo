import { readTodos, writeTodos } from "../models/todo.model.js";

export const getTodos = (req, res, next) => {
  try {
    const todos = readTodos();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const addTodo = (req, res, next) => {
  try {
    const { title, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todos = readTodos();

    const newTodo = {
      id: Date.now(),
      title,
      status: status || false
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = readTodos();

    const index = todos.findIndex(todo => todo.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = { ...todos[index], ...req.body };
    writeTodos(todos);

    res.status(200).json(todos[index]);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = readTodos();

    const filteredTodos = todos.filter(todo => todo.id != id);
    if (todos.length === filteredTodos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    writeTodos(filteredTodos);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    next(error);
  }
};
