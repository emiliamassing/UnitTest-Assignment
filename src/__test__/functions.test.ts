/*** 
* @jest-environment jsdom
*/

import * as functions from "../ts/functions";
import { Todo } from "../ts/models/Todo";

describe('Tests for addTodo()', () => {
    test('Should add new todo, if', () => {
        let todo: Todo[] = [];
        const testText = 'Dressage with Merlin';
        const length = todo.length; 
        
        functions.addTodo(testText, todo);

        expect(todo.length).toBe(length+1);
        expect(todo[todo.length-1].text).toBe('Dressage with Merlin');
    });

    test('Should not add new todo, else', () => {
        let todo: Todo[] = [];
        const testText = '';
        const length = todo.length;
        
        functions.addTodo(testText, todo);

        expect(todo.length).toBe(length);
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

describe('Tests for sortTodoList()', () => {
    
});