let display = document.getElementById("display_number");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");

let memory = {
  a: "",
  b: "",
  carry: "",
  operator: "",
};

let memory2 = 0;

function initMemory() {
  
  memory = {
    a: "",
    b: "",
    carry: "",
    operator : "",
  }
  
  console.log(memory)
}

//Calculator

function calc() {
  //Target each number element in numbers

  display.innerText = "0";

  for (const number of numbers) {
    number.addEventListener("click", () => {
      if (memory.operator == "") {
        memory.a += number.id;
        console.log(memory);
      } else {
        memory.b += number.id;
      }
      console.table(memory);
      updateDisplay(memory.a, memory.b, memory2);
    });
  }

  //Target each operator element in operators
  for (const operator of operators) {
    operator.addEventListener("click", () => {
      if (operator.id == "=") {
        operate();
  
      } else if (operator.id == "C") {
        memory.b = "";
        updateDisplay(memory.a, memory.b, memory2);
      } else if (operator.id == "AC") {
        memory.a = "";
        memory.b = "";
        memory.carry = "";
        memory.operator = "";
        console.log(memory);
        memory2 = 0;
      } else {
        memory.operator = operator.id;
      }
      updateDisplay(memory.a, memory.b, memory2);
      
      console.table(memory);
      console.log(memory2)
    });
  }
}

//Operate

function operate() {
  let a = Number(memory.a);
  let b = Number(memory.b);
  let operator = memory.operator;

  switch (operator) {
    case "+":
      memory2 = a + b;
      console.log(memory)
      break;
    case "-":
      memory2 = a - b;
      break;
    case "x":
      memory2 = a * b;
      break;
    case "/":
      memory2 = a / b;
      break;
    case "%":
      memory2 = a * (b / 100);
  }
  
  // return;
}

//Update Display

function updateDisplay(a, b, c) {
  if (a !== "" && b == "" && c == "") {
    display.innerText = a;
  } else if (a !== "" && c == "") {
    display.innerText = b;
  } else if (a !== "" && b !== "") {
    display.innerText = c;
  } else if (a == "" && b == "" && c == "") {
    display.innerText = 0;
  }
}

calc();
