/*** 
* @jest-environment jsdom
*/

import { displayError } from "../ts/main";

beforeEach(() => {
    document.body.innerHTML = '';
});


describe('Should add/remove css class depending on argument value - displayError()', () => {

    //Test for reading innerHTML - "displayError"
    test('Should display innerHTML', () => {
        document.body.innerHTML = `
            <div id="error" class="error"></div>
        `;
        let errorText = 'error msg';
       
        
        displayError(errorText, true);

        let errorDiv = (document.getElementById('error') as HTMLDivElement);
        expect(errorDiv).not.toBeNull();
        expect(errorDiv.innerHTML).toBe(errorText);
    });

    //Test for if if-statement is true - "displayError"
    /*test('Should add error class', () => {

    });*/
});