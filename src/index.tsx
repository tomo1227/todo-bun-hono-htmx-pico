import { Hono } from "hono";
import "typed-htmx";
import TodoApp from "./components/TodoApp";
import Task from "./components/Task";
import Todo from "./components/Todo";

const app = new Hono();

let todos: Todo[] = [];

app.get("/", (c) => {
  return c.html(<TodoApp />);
});

app.post("/todo", async (c) => {
  const formData = await c.req.parseBody();
  const newId =
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  const newTodo = {
    id: newId,
    text: formData.todo as string,
  };
  todos.push(newTodo);

  return c.html(<Task todos={todos} />);
});

app.delete("/delete/:id", (c) => {
  const id: number = parseInt(c.req.param().id, 10);
  todos = todos.filter((todo) => todo.id !== id);
  return c.html(<Task todos={todos} />);
});

export default app;
