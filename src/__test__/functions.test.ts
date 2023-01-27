import * as functions from "../ts/functions";

import { Todo } from "../ts/models/Todo";

//Se till även testa så funktionen som gör att du kan avmarkera todo-uppgiften funkar

describe('Tests for addTodo()', () => {
    //Test for adding todo - "addTodo()"
    test('Should add new todo, if', () => {
        //Arrange
        let todo: Todo[] = [];
        const testText = 'Dressage with Merlin';
        const length = todo.length; 
        
        //Act
        functions.addTodo(testText, todo);

        //Assert
        expect(todo.length).toBe(length+1);
        expect(todo[todo.length-1].text).toBe('Dressage with Merlin');
    });

    //Test for trying to add too short text - "addTodo()"
    test('Should not add new todo, else', () => {
        let todo: Todo[] = [];
        const testText = '';
        const length = todo.length; 
    });
});

//Test for completeing todo - "changeTodo"
test('Should switch from false to true', () => {

    const todo = new Todo('Brush Aramis', false);

    functions.changeTodo(todo);

    expect(todo.done).toBe(true);
});

//Test for clearing all todos - "removeAllTodos"
test('Should remove all todos', () => {

    let todoList: Todo[] = [
        {text: 'Dressage with Merlin', done: false}, // Shows that both done and undone todos gets removed
        {text: 'Brush Aramis', done: true}
    ];

    functions.removeAllTodos(todoList);

    expect(todoList.length).toBe(0);
});
