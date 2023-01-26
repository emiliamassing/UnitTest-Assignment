import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

//Se till även testa så funktionen som gör att du kan avmarkera todo-uppgiften funkar

//Test for adding todo - "addTodo"
/*test('Should add todo', () => {

    const shortText = new Todo('no', false);
    
    

});*/

describe('Tests for all functions in functions.ts', () => {
    //Test for completeing todo - "changeTodo"
    test('Should switch from false to true', () => {

        const todo = new Todo('To do', false);

        changeTodo(todo);

        expect(todo.done).toBe(true);
    });

    //Test for clearing all todos - "removeAllTodos"
    test('Should remove all todos', () => {

        let todoList: Todo[] = [
            {text: "Todo 1", done: false}, // Shows that both done and undone todos gets removed
            {text: "Todo 2", done: true}
        ];

        removeAllTodos(todoList);

        expect(todoList.length).toBe(0);
    });
});
