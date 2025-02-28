// Select elements by their IDs
const addButt = document.getElementById("button-add");
const subButt = document.getElementById("button-subtract");
const num = document.getElementById("counter-text");

// Event listener for increment button
addButt.addEventListener("click", function () {
  let counter = parseInt(num.textContent); // Get the current number value
  counter++; // Increment the value
  num.textContent = counter; // Update the text content
});

// Event listener for decrement button
subButt.addEventListener("click", function () {
  let counter = parseInt(num.textContent); // Get the current number value
  if (counter > 0) {
    counter--; // Decrement the value only if greater than 0
  }
  num.textContent = counter; // Update the text content
});
