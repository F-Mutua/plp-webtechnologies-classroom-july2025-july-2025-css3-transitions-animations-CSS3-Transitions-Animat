// Part 2: JavaScript Functions

// Global variable to demonstrate scope
const globalMessage = "This is a global variable";

// Function with parameters and return value
function calculateArea(radius) {
  // Local variable with function scope
  const pi = Math.PI;
  const area = pi * radius * radius;

  displayOutput(`Area of circle with radius ${radius} is ${area.toFixed(2)}`);
  return area;
}

// Function that manipulates strings and returns a value
function stringManipulation() {
  const inputString = "Web Development";
  const manipulated = inputString.split('').reverse().join('');

  displayOutput(`Original: ${inputString}, Manipulated: ${manipulated}`);
  return manipulated;
}

// Function to demonstrate scope
function scopeDemonstration() {
  // Local variable with same name as global
  const localMessage = "This is a local variable";

  displayOutput(`Global: ${globalMessage}, Local: ${localMessage}`);
}

// Utility function to display output
function displayOutput(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `<p>${message}</p>`;
}

// Part 3: Combining CSS with JavaScript

// Function to start animation
function startAnimation() {
  const box = document.getElementById('anim-box');
  box.classList.add('bounce');
}

// Function to stop animation
function stopAnimation() {
  const box = document.getElementById('anim-box');
  box.classList.remove('bounce');
}

// Function to toggle modal
function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('active');
}

// Scroll-triggered animation
window.addEventListener('scroll', () => {
  const slideElement = document.querySelector('.slide-in');
  const elementPosition = slideElement.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (elementPosition < screenPosition) {
    slideElement.classList.add('active');
  }
});

// Initialize scroll animation on page load
window.addEventListener('load', () => {
  // Trigger scroll event to check initial positions
  window.dispatchEvent(new Event('scroll'));
});
