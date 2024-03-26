import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age: ",
});
console.log("your age is " + answer.age);
