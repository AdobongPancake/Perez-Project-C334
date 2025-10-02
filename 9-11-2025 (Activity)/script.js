// Variables
function showVariables() {
    let name = "James";
    const age = 20;
    var city = "Manila";
    document.getElementById("variables-output").textContent =
        `Name: ${name}\nAge: ${age}\nCity: ${city}`;
}

// Operators
function showOperators() {
    let a = 10, b = 3;
    let result = `
Sum: ${a + b}
Difference: ${a - b}
Product: ${a * b}
Quotient: ${a / b}
Comparison (a > b): ${a > b}
    `;
    document.getElementById("operators-output").textContent = result;
}

// Conditionals
function showConditionals() {
    const age = 17;
    let msg;
    if (age >= 18) {
        msg = "You are an adult.";
    } else if (age >= 13) {
        msg = "You are a teenager.";
    } else {
        msg = "You are a child.";
    }
    document.getElementById("conditionals-output").textContent = msg;
}

// Loops
function showLoops() {
    let numbers = "";
    for (let i = 0; i < 5; i++) {
        numbers += i + " ";
    }
    document.getElementById("loops-output").textContent = "For Loop: " + numbers;
}

// Strings
function showStrings() {
    let text = "Hello, JavaScript!";
    let result = `
Length: ${text.length}
Uppercase: ${text.toUpperCase()}
Lowercase: ${text.toLowerCase()}
Includes 'Java': ${text.includes("Java")}
Slice(0,5): ${text.slice(0, 5)}
Replace: ${text.replace("Hello", "Hi")}
    `;
    document.getElementById("strings-output").textContent = result;
}

// Functions
function showFunctions() {
    const square = (x) => x * x;
    const add = (a, b) => a + b;
    let result = `
Square of 4: ${square(4)}
5 + 7 = ${add(5, 7)}
    `;
    document.getElementById("functions-output").textContent = result;
}

// Objects
function showObjects() {
    let car = {
        brand: "Honda",
        model: "BR-V",
        year: 2023,
        start: function() {
            return `${this.brand} ${this.model} is starting...`;
        }
    };
    let result = `
Car: ${car.brand} ${car.model} (${car.year})
Start: ${car.start()}
    `;
    document.getElementById("objects-output").textContent = result;
}
