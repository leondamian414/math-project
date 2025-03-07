// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Display the random number on the screen
document.getElementById("random-number").innerHTML = randomNumber;

// Add an event listener to the "Generate Random Number" button
document.getElementById("generate-random-number-button").addEventListener("click", function() {
  // Generate a new random number and update the display
  let newRandomNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("random-number").innerHTML = newRandomNumber;
});
