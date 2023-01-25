/*** @jest-environment jsdom*/
import { displayError } from "../ts/main";

//Test for displaying error - "displayError"
test('Should display error', () => {
    const error = 'error';
    const errorDiv: HTMLDivElement = (document.getElementById(error) as HTMLDivElement);

    errorDiv.innerHTML = error;

    expect(errorDiv.innerHTML).toBe('error');
});