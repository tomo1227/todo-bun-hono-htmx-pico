import Todo from "./Todo";

interface TaskProps {
  todos: Todo[];
}

const Task = ({ todos }: TaskProps) => {
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
export default Task;
