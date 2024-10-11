// jQuery source code
// jqueryFunc.js

// When the DOM (Document Object Model) is fully loaded, the function inside $(document).ready() will execute
$(document).ready(function () {

    // Alert the user that the page has been loaded successfully
    alert("Page was loaded!");
});

// Declare a variable `n` and initialize it to 0
var n = 0;

// Define a function `jQueryChangeDom` that changes the DOM element styles based on the value of `n`
function jQueryChangeDom() {

    // Increment `n` by 1
    n = n + 1;

    // Check if `n` is even (when divided by 2, the remainder is 0)
    if (n % 2 === 0) {

        // If `n` is even, change the color of all <li> elements to green using jQuery's `css()` function
        $('li').css("color", "green");

        // Reset `n` to 0 after setting the color to green
        n = 0;
    } else {
        // If `n` is odd, change the color of all <li> elements to orange
        $('li').css("color", "orange");
    }
}