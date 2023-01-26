/*** 
* @jest-environment jsdom
*/

import { displayError } from "../ts/main";

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
        displayError(errorText, true);

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

        displayError(errorText, false);

        let errorDiv:HTMLDivElement = (document.getElementById('error') as HTMLDivElement);
        expect(errorDiv).not.toBeNull();
        expect(errorDiv.classList.contains('show')).toBe(false);
    });
});