import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

//Se till även testa så funktionen som gör att du kan avmarkera todo-uppgiften funkar

//Test for completeing todo - "changeTodo"
test('Should switch from false to true', () => {

    const todo = new Todo('Test', false);

    changeTodo(todo);

    expect(todo.done).toBe(true);
});

