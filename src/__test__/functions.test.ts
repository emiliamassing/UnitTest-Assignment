/*** 
* @jest-environment jsdom
*/

import * as functions from "../ts/functions";
import * as main from "../ts/main";
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

test('Should switch from false to true, changeTodo()', () => {

    const todo = new Todo('Brush Aramis', false);

    functions.changeTodo(todo);

    expect(todo.done).toBe(true);
});

test('Should remove all todos, removeAllTodos()', () => {

    let todoList: Todo[] = [
        {text: 'Dressage with Merlin', done: false}, // Shows that both done and undone todos gets removed
        {text: 'Brush Aramis', done: true}
    ];

    functions.removeAllTodos(todoList);

    expect(todoList.length).toBe(0);
});

describe('Tests for sortTodoList()', () => {

    test('Should sort todos from a-ö', () =>{
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;
        
        let todoList: Todo[] = [
            {text: 'Merlin', done: false},
            {text: 'Aramis', done: false},
            {text: 'Dacke', done: false}
        ];

        functions.sortTodoList(todoList);

        expect(todoList[0].text).toEqual('Aramis');
        expect(todoList[1].text).toEqual('Dacke');
        expect(todoList[2].text).toEqual('Merlin');
    });

    test('Should call on createHtml', () => {
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;
        const htmlSpy = jest.spyOn(main, "createHtml").mockReturnValue();

        main.createHtml([]);

        expect(htmlSpy).toHaveBeenCalledTimes(1);
        htmlSpy.mockRestore();
    });
});