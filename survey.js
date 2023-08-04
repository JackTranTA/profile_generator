const readline = require('readline');

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const answers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const survey = function() {
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      answers[i] = answer;
      i++;
      console.log();
      survey();
    });
  } else {
    rl.close();
    console.log("Generated profile: ");
    setTimeout(() => console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`), 1000);
  }
};

survey();