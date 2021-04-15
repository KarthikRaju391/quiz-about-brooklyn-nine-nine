let readlineSync = require("readline-sync")
const chalk = require("chalk")
 
console.clear();

console.log(chalk.dim("This quiz contains 10 questions\nJust enter the option for answers like (a/b/c)\n"))

let userName = readlineSync.question(chalk.bgCyan("What is your name?"))

let score = 0;

console.log(chalk.bgCyan(`\nWelcome ${userName} to the Elite Brooklyn Nine Nine quiz!\n`));


questionBank = [
  {
    question: "1. Who won the first halloween heist? \na: Jake \nb: Amy\nc: Holt\n ",
    answer: "a"
  },
  {
    question: "\n2. Which subject did amy and terry help gina to study?\na: biology\nb: astronomy\nc: chemistry\n ",
    answer: "b"
  },
  {
    question: "\n3. What is Jake's favourite movie? \na: Die hard \nb: Casablanca\nc: Rocky\n ",
    answer: "a"
  },
  {
    question: "\n4. What is the number of the precinct in the show? \na: 50 \nb: 89\nc: 99\n ",
    answer: "c"
  },
  {
    question: "\n5. What happened at Jake and Amy's wedding in Season Five? \na: There was an earthquake \nb: There was a pandemic\nc: There was a bomb threat\n ",
    answer: "c"
  },
  {
    question: '\n6. What was "giggle pig"? \na: a place \nb: a drug\nc: a song\n ',
    answer: "b"
  },
  {
    question: "\n7. Who is the Pontiac Bandit? \na: Gina \nb: Sharon\nc: Doug Judy\n ",
    answer: "c"
  },
  {
    question: "\n8. What type of business did Charles have in Season Five? \na: food truck \nb: clothing store\nc: convenience store\n ",
    answer: "a"
  },
  {
    question: "\n9. What are Jake and Rosa found guilty of in Season Four? \na: murder \nb: vandalism\nc: robbery\n ",
    answer: "c"
  },
  {
    question: "\n10. Where are Jake and Raymond relocated to at the end of Season Three? \na: Russia \nb: Florida\nc: England\n ",
    answer: "b"
  }
]

function play(question, answer){
  let userAnswer = readlineSync.question(chalk.italic(question));

  if(answer === userAnswer){
    console.log(chalk.green("You are correct!\n"));
    score++;
  }
  else{
    console.log(chalk.yellow("you are wrong, the correct answer is: ", answer));
  }
  console.log(chalk.green("Your score is: ", score))
}

for(i = 0; i<questionBank.length; i++){
  play(questionBank[i].question, questionBank[i].answer)
} 

console.log(chalk.bgGrey(`\nYour final score is ${score}!\n`))

if(score<=5){
  console.log(chalk.bgOrange("That is not bad!"));
}
else if(score > 5 && score <= 9){
  console.log(chalk.bgYellow("That was good!"))
}
else{
  console.log(chalk.bgRed("You are one of the elites! congratulations!"))
}


console.log(chalk.magentaBright("\nThankyou for playing the game!"))

console.log(chalk.dim("\nMade by Karthik Raju"))