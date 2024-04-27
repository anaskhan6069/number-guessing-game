#! /usr/bin/env node    
import inquirer from "inquirer";
import { Random } from "random-js";
// Create a new Random instance
const random = new Random();
// Generate a random number between 1 and 100
const secret_number = random.integer(1, 20);
console.log(">>>  WELCOME TO NUMBER GUESSING GAME  <<<<\n\n");
let attempt = 0;
let user_correct = false;
while (user_correct == false) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "q1",
            message: "Guess a number between 1 to 20: "
        }
    ]);
    let user_input = answer.q1;
    attempt += 1;
    if (user_input == secret_number) {
        console.log(`\nCongratulations. You have guessed correct number.`);
        //console.log("Secret number was: ",secret_number);
        console.log("Attempts you took: ", attempt);
        console.log("Very well played :)");
        user_correct = true;
    }
    else if (user_input <= 0 || user_input > 20) {
        console.log("Number must be between > 1 to 20 <...");
    }
    else if (user_input > secret_number) {
        console.log(`${user_input} is high, try small number...`);
    }
    else if (user_input < secret_number) {
        console.log(`${user_input} is low, try big number...`);
    }
}
console.log("\n...THANKS FOR PLAYING...");
