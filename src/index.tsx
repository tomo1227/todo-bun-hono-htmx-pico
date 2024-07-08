import { Hono } from "hono";
import "typed-htmx";
import TodoApp from "./components";

const app = new Hono();

let todos: Todo[] = [];

interface Todo {
  key: number;
  text: string;
}

app.get("/", (c) => {
  return c.html(<TodoApp />);
});

app.post("/todo", async (c) => {
  const formData = await c.req.parseBody();
  const newTodo = {
    key: todos.length + 1,
    text: formData.todo as string,
  };
  todos.push(newTodo);

  return c.html(<Task todos={todos} />);
});

app.get("/todo", (c) => {
  return c.html(<Task />);
});

app.delete("/delete/:key", (c) => {
  const key: number = parseInt(c.req.param().key, 10);
  todos = todos.filter((todo) => todo.key !== key);
  return c.html(<Task todos={todos} />);
});

const Task = () => {
  return (
    <article class="container">
      {todos.map((todo) => (
        <section class="grid">
          <div key={todo.key.toString()} class="card">
            <strong>{todo.text}</strong>
          </div>
          <div></div>
          <button
            type="reset"
            class="pico-background-red-450"
            hx-delete={`/delete/${todo.key}`}
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
