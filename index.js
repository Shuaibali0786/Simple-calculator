#! /usr/bin/env node
import inquirer from "inquirer";
// priting a Wellcome Message
console.log("\n\Wellcome To \`Shuaib Ali\` - CLI Simple Calculator\n");
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one of the  operators to perform operation", type: "list", name: "operators", choices: ["Addition", "Subtraction", "Multiplication", "Division"], }
]);
// condditional statement
if (asnwer.operators === "Addition") {
    console.log(asnwer.firstNumber + asnwer.
        secondNumber);
}
else if (asnwer.operators === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
else if (asnwer.operators === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operators === "division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}
else {
    console.log("Please select  valid operators");
}
