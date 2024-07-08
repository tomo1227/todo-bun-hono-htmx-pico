import { Hono } from "hono";
import "typed-htmx";
import TodoApp from "./components";

const app = new Hono();

let todos: Todo[] = [];

interface Todo {
  id: number;
  text: string;
}

app.get("/", (c) => {
  return c.html(<TodoApp />);
});

app.post("/todo", async (c) => {
  const formData = await c.req.parseBody();
  const newTodo = {
    id: todos.length + 1,
    text: formData.todo as string,
  };
  todos.push(newTodo);

  return c.html(<Task todos={todos} />);
});

app.get("/todo", (c) => {
  return c.html(<Task />);
});

app.delete("/delete/:id", (c) => {
  const id: number = parseInt(c.req.param().id, 10); // 10進数で整数に変換
  todos = todos.filter((todo) => todo.id !== id);
  return c.html(<Task todos={todos} />);
});

const Task = () => {
  return (
    <article class="container">
      {todos.map((todo) => (
        <section class="grid">
          <div id={todo.id.toString()} class="card">
            <strong>{todo.text}</strong>
          </div>
          <div></div>
          <button
            type="reset"
            class="pico-background-red-450"
            hx-delete={`/delete/${todo.id}`}
            hx-target="closest article"
            hx-swap="outerHTML"
          >
            DELETE
          </button>
        </section>
      ))}
    </article>
  );
};

export default app;
