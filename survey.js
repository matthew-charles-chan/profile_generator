const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like? ", (activity) => {
    rl.question("What's your favourite band? ", (band) => {
      rl.question("what's your faourite sport? ", (sport) => {
        console.log(`My name is ${name} and I like ${activity}. When playing ${sport}, I listen to ${band}.`);
        rl.close();
      });
    });
  });
});