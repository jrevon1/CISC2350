/* Homework 5 for CISC2350 - Jordan Revon 10/11/2020 */

function sayMagicWord() {
alert("PLEASE");
}

/* Added function to swap text from a textbox into a span element */
function enterText() {
var span = document.getElementById("textOutput");
var textEntry = document.getElementById("textEntry");
span.innerHTML = textEntry.value;
}