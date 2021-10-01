const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arrYourWord = [];
let arrStar = [];
let vs = `Введите слово:  >   `,
    pub = `Попробуйте угадать букву: `,
    vup = `Вы угадали все буквы, поздравляю!!!`,
    ebp = `Есть, такая буква, продолжим:`,
    bn = `Такой буквы к сожалению в этом слове нету, попробуйте ещё раз`;
rl.question(vs, function u(answer) {
    console.clear();
    arrYourWord = Array.from(answer);
    arrYourWord.map(() => arrStar.push('*'));
    console.log(arrStar);
    let count = arrStar.length;
    youVersion();
    function youVersion() {
        rl.question(pub, function u(letter) {
            if (arrYourWord.includes(letter) && count > 0) {
                arrStar[arrYourWord.indexOf(letter)] = letter;
                delete arrYourWord[arrYourWord.indexOf(letter)];
                count--;
                console.clear();
                switch (count) {
                    case 0: console.log(`${vup} ${arrStar}`);
                        rl.close();
                        break;//Тут по идее break уже и не нужен.
                    default:
                        console.log(`${ebp} ${arrStar}`);
                        youVersion();
                        break;
                }
            } else {
                console.clear();
                console.log(`${bn} ${arrStar}`);
                youVersion();
            }
        });
    }
});