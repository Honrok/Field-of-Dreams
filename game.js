const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let word = `Введите слово:  >   `;
let yourWord = '';
let arrYourWord = [];
let arrStar = [];
console.clear();
rl.question(word, function u(answer) {
    yourWord = answer;
    console.clear();

    arrYourWord = Array.from(yourWord);
    for (let i = 0; i < arrYourWord.length; i++) {
        arrStar.push('*');
    }

    console.log(arrStar);
    let count = arrStar.length;
    youVersion();
    function youVersion() {
        rl.question(`Попробуйте угадать букву: `, function u(answer) {
            if (arrYourWord.indexOf(answer) != -1 && count > 0) {
                for (let k = 0; k < arrYourWord.length; k++) {
                    if (answer == arrYourWord[k]) {
                        arrStar[k] = answer;
                        delete arrYourWord[k];
                        count--;
                    }
                    else continue;
                }
                if (count == 0) {
                    console.clear();
                    console.log(`Вы угадали все буквы, поздравляю!!!  ${arrStar}`);
                    rl.close();
                } else {
                    console.clear();
                    console.log(`Есть, такая буква, продолжим:  ${arrStar}`);
                    youVersion()
                };
            } else {
                console.clear();
                console.log(`Такой буквы к сожалению в этом слове нету, попробуйте ещё раз ${arrStar}`);
                youVersion();
            }
        });
    }
});