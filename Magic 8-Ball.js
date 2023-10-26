//Uses node.js, so run code using node [filename] in the terminal.

let eightBallAnswers = ['It is certain', 
                        'It is decidedly so', 
                        'Ask again Later', 
                        'Cannot predict now', 
                        'Concentrate and ask again', 
                        'Don\'t ask again', 
                        'My sources say no', 
                        'Very doubtful'];
let randomNumber;

/*
Main function asynchronous so that commands are executed in order. Only needed due to how this specific program works, in reality
something like this would be better written using a different language (i.e. Python). Without this, the eightBallQuestion function would be
run simulataneous to the askQuestion function, which is not what is wanted.
*/
async function main(){
    console.log('\nAsk me a question! (or type "quit" to exit)')
    while(true){
        randomNumber = Math.floor(Math.random()*8);
        const ans = await askQuestion('\nQuestion: ');
        eightBallQuestion(ans);
        console.log('\nTry asking me another question, or type "quit" to exit!')
    }
}

const eightBallQuestion = (ans) => {
    ((ans.toLowerCase()).trim() === 'quit' || (ans.toLowerCase()).trim() == 'q') ? process.exit() : console.log(`\u001b[32mAnswer: \u001b[37m ${eightBallAnswers[randomNumber]}`);
}

/*
To allow async to work as described above, promises are used. When the promise is resolved, the user's input
is returned to the main loop, and the main loop is allowed to continue. Readline allows for the user's input.
*/
const askQuestion = (query) => {
    let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve =>
    rl.question(('\u001b[36m' + query + '\u001b[37m'), answer => {
        rl.close();
        resolve(answer);
    }))
}

main();



