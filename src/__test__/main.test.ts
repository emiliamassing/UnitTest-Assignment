/*** 
* @jest-environment jsdom
*/

//import { displayError } from "../ts/main";
import * as main from "../ts/main";
import * as functions from "../ts/functions"

beforeEach(() => {
    document.body.innerHTML = '';
});


describe('Toggle css class depending on argument value - displayError()', () => {

    //if-statement is true - "displayError"
    test('Should add class show', () => {

        //Arrange 
        document.body.innerHTML = `
            <div id="error" class="error"></div>
        `;
        let errorText = 'error message';
       
        //Act
        main.displayError(errorText, true);

        //Assert
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
        //Arange
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;
        const htmlSpy = jest.spyOn(main, "createHtml").mockReturnValue();

        //Act
        main.createHtml([]);

        //Assert
        expect(htmlSpy).toHaveBeenCalledTimes(1);
    });

    test('Should call on removeAllTodos()', () => {
        //Arrange
        document.body.innerHTML = `
            <ul id="todos" class="todo"></ul>
        `;
        const todoSpy = jest.spyOn(functions, "removeAllTodos").mockReturnValue();

        //Act
        main.clearTodos([]);

        //Assert
        expect(todoSpy).toBeCalledTimes(1);
    });
});
