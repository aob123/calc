let display = document.getElementById("display_number");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");

let memory = {
  number1: "",
  number2: "",
  operator: "",
  carry: "",
};

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (memory.operator != "") {
      memory.number2 += number.id;
      display.innerText = memory.number2;
    } else {
      memory.number1 += number.id;
      memory.operator = "";
      display.innerText = memory.number1;
    }
    console.log(memory);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.id != "=") {
      memory.operator = operator.id;
      console.log(memory);

      if (memory.operator == "AC") {
        memory.carry = "";
        memory.operator = "";
      }
    } else if (operator.id == "=") {
      calculate(memory.operator, Number(memory.number1), Number(memory.number2));
      console.log(operator.id);
    } else {
      return;
    }
  });
});

function calculate(operator, a, b) {
  
  let mem_carry = memory.carry;
  

  switch (operator) {
    case "+":
      mem_carry = a + b;
      break;
    case "-":
      mem_carry = a - b;
      break;
    case "x":
      mem_carry = a * b;
      break;
    case "/":
      mem_carry = a / b;
      break;
    case "%":
      mem_carry = (a / 100) * b;
      break;
     }


      Number(mem_carry)
  console.log(mem_carry);
  updateDisplay(mem_carry);
}

function updateDisplay(carry) {
  display.innerText = carry;
  memory.number1 = "";
  memory.number2 = "";
  memory.operator = "";

  console.log(memory);
}
