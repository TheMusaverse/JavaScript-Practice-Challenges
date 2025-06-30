// Prompt the user for their year of birth
const birthYear = prompt("Enter your year of birth:");

// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Calculate the age
const age = currentYear - Number(birthYear);

// Determine the category
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age <= 36) {
  console.log("You are a youth.");
} else if (age > 36) {
  console.log("You are an elder.");
} else {
  console.log("Invalid input. Please enter a valid year.");
}
