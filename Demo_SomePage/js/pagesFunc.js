/*
 * JavaScript
 * 
 */

// Declare and initialize a variable `nextDiv` to track the current div being toggled
var nextDiv = 1;

// Define a function `DivToggler` that toggles the content of three div elements
function DivToggler() {

    // Get the HTML element with the ID 'div1' and store it in the variable `divTag1`
    var divTag1 = document.getElementById('div1');

    // Get the HTML element with the ID 'div2' and store it in the variable `divTag2`
    var divTag2 = document.getElementById('div2');

    // Get the HTML element with the ID 'div3' and store it in the variable `divTag3`
    var divTag3 = document.getElementById('div3');

    // If `nextDiv` is 1, change the inner text of `divTag1` to "Der"
    if (nextDiv === 1) {
        divTag1.innerText = "Der";
    }

    // If `nextDiv` is 2, change the inner text of `divTag2` to "var"
    if (nextDiv === 2) {
        divTag2.innerText = "var";
    }

    // If `nextDiv` is 3, change the inner text of `divTag3` to "engang"
    if (nextDiv === 3) {
        divTag3.innerText = "engang";
    }

    // If `nextDiv` is greater than 3, reset `nextDiv` to 0 and clear the text of all divs
    if (nextDiv > 3) {
        nextDiv = 0; // Reset the counter
        divTag1.innerText = " "; // Clear the content of div1
        divTag2.innerText = " "; // Clear the content of div2
        divTag3.innerText = " "; // Clear the content of div3
    }

    // Increment the `nextDiv` variable for the next call to the function
    nextDiv++;
}