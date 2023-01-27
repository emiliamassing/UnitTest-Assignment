/*** 
* @jest-environment jsdom
*/

import * as main from "../ts/main";
import * as functions from "../ts/functions"
import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

beforeEach(() => {
    document.body.innerHTML = '';
});

describe('Tests for createNewTodo()', () => {

    //Spying on functions to see if they've been called on
    test('Should call on createHtml', () => {
        const todoText = "Go snowboarding";
        let todos: Todo[] = [];
        let htmlSpy = jest.spyOn(main, 'createHtml').mockReturnValue();

        main.createNewTodo(todoText, todos);

        expect(htmlSpy).toHaveBeenCalledTimes(1);
        htmlSpy.mockRestore();
    });


});

describe('Check if functions gets called on - toggletoDo()', () => {

    test('Should call on changeTodo', () => {
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;
        
        let todoList: Todo[] = [
            {text: 'testing', done: true}
        ];

        const changeTodoSpy = jest.spyOn(functions, "changeTodo").mockReturnValue();

        main.toggleTodo(todoList[0]);

        expect(changeTodoSpy).toBeCalledTimes(1);
    });

    test('Should call on createHtml()', () => {
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;

        let todoList: Todo[] = [
            {text: 'testing', done: true}
        ];

        const htmlSpy = jest.spyOn(main, "createHtml").mockReturnValue();

        main.toggleTodo(todoList[0]);

        expect(htmlSpy).toBeCalledTimes(1);
        htmlSpy.mockRestore();
    });
});

describe('Toggle css class depending on argument value - displayError()', () => {

    //if-statement is true - "displayError"
    test('Should add class show', () => {

        document.body.innerHTML = `
            <div id="error" class="error"></div>
        `;
        let errorText = 'error message';
       
        main.displayError(errorText, true);

        let errorDiv:HTMLDivElement = (document.getElementById('error') as HTMLDivElement);
        expect(errorDiv).not.toBeNull();
        expect(errorDiv.classList.contains('show')).toBe(true);
    });

    //if-statement is false - "displayError"
    test('Should remove class show', () => {

        document.body.innerHTML = `
            <div id="error" class="error"></div>
        `;
        let errorText = 'error message';

        main.displayError(errorText, false);

        let errorDiv:HTMLDivElement = (document.getElementById('error') as HTMLDivElement);
        expect(errorDiv).not.toBeNull();
        expect(errorDiv.classList.contains('show')).toBe(false);
    });
});


describe('Check if functions gets called on - clearTodos', () => {
    //Spying on functions to see if they gets called on
    test('Should call on createHTML', () => {
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;
        const htmlSpy = jest.spyOn(main, "createHtml").mockReturnValue();

        main.createHtml([]);

        expect(htmlSpy).toHaveBeenCalledTimes(1);
        htmlSpy.mockRestore();
    });

    test('Should call on clearTodos()', () => {
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;
        const todoSpy = jest.spyOn(functions, "removeAllTodos").mockReturnValue();

        main.clearTodos([]);

        expect(todoSpy).toBeCalledTimes(1); 
    });
});
