// Part 1: Variables and conditionals
let names = []; // array to hold names

// Example of a conditional
let greeting = "Hello Student!";
if (greeting.includes("Student")) {
  console.log("Welcome to the simple app!");
}

// Part 2: Functions
function addName() {
  let input = document.getElementById("nameInput");
  let newName = input.value.trim();

  if (newName === "") {
    alert("Please enter a name!");
  } else {
    names.push(newName); // add name to array
    input.value = ""; // clear input box
    displayNames();
  }
}

function displayNames() {
  let list = document.getElementById("nameList");
  list.innerHTML = ""; // clear old list

  // Part 3: Loop examples
  // Example 1: for loop
  for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
  }

  // Example 2: forEach loop
  names.forEach((name, index) => {
    console.log("Name " + (index + 1) + ": " + name);
  });
}

// Part 4: DOM interactions
document.getElementById("addBtn").addEventListener("click", addName);
document.getElementById("showBtn").addEventListener("click", displayNames);
document.body.style.backgroundColor = "#f0f8ff"; // Change background color
