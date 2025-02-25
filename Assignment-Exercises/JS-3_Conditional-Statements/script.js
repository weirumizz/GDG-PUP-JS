function checkAge() {
  const age = document.getElementById("ageInput").value; // Get the age value from the input

  let result;
  if (age >= 0 && age <= 12) {
    result = "Child";
  } else if (age >= 13 && age <= 19) {
    result = "Teenager";
  } else if (age >= 20) {
    result = "Adult";
  } else {
    result = "Invalid age. Please enter a valid number.";
  }

  document.getElementById("result").textContent = result; // Display the result in the HTML element
  return result;
}
