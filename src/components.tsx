const TodoApp = () => {
  return (
    "<!DOCTYPE html>" +
    (
      <html lang="jp">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" data-theme="dark light" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@picocss/pico@latest/css/pico.lime.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.colors.min.css"
          />
          <script src="https://unpkg.com/htmx.org@1.9.10/dist/htmx.js"></script>
        </head>
        <body>
          <main class="container">
            <h1 class="pico-color-pink-500">Welcome!</h1>
            <h1>Hono & Bun & htmx & Pico CSS Todo App</h1>
            <form
              hx-post="/todo"
              hx-target="#todos"
              {...{ "hx-on::after-request": "this.reset()" }}
            >
              <input
                id="todo"
                name="todo"
                type="text"
                required="true"
                placeholder="ここにタスクを入力"
              />
              <button type="submit">ADD TASK</button>
            </form>
            <section id="todos" hx-get="/todo" hx-trigger="load"></section>
          </main>
        </body>
      </html>
    )
  );
};

export default TodoApp;
