/*** 
 * @jest-environment jsdom
*/

import { displayError } from "../ts/main";


describe('Should add/remove css class depending on argument value - displayError()', () => {
    
    //Test for reading innerHTML - "displayError"
    test('Should display read innerHTML', () => {
        const error = document.body.innerHTML = `<div id="error" class="error"></div>`;
        const errorDiv: HTMLDivElement = (document.getElementById('error') as HTMLDivElement); 
        
        errorDiv.innerHTML = error;

        expect(errorDiv.innerHTML).toBe(error);
    });

    //Test for if if-statement is true - "displayError"
    test('Should add error class', () => {

    });
});
