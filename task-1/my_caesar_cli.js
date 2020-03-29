const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ё',
  'Ж',
  'З',
  'И',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ы',
  'Ь',
  'Э',
  'Ю',
  'Я',
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ч',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я'
];

program
  .version('0.0.1')
  .option('-s, --shift <number>', 'a shift', '3')
  .option('-i, --input <pathIn>', 'an input file', './input.txt')
  .option('-o, --output <pathOut>', 'an output file', './output.txt')
  .option('-a, --action <action>', 'an action encode/decode', 'empty');

program.parse(process.argv);

const uglyAlphabet = alphabet
  .slice(program.shift)
  .concat(alphabet.slice(0, program.shift));

const writeData = newLine => {
  fs.writeFile(program.output, newLine, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.info('Success!');
  });
};

(() => {
  fs.readFile(program.input, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Start text:', data);

    const strArr = data.split('');
    let newLine = '';

    switch (program.action) {
      case 'encode':
        strArr.forEach((item, index) => {
          if (alphabet.indexOf(item) === -1) {
            newLine += strArr[index];
          } else {
            newLine += uglyAlphabet[alphabet.indexOf(item)];
          }
        });
        writeData(newLine);
        break;
      case 'decode':
        strArr.forEach((item, index) => {
          if (uglyAlphabet.indexOf(item) === -1) {
            newLine += strArr[index];
          } else {
            newLine += alphabet[uglyAlphabet.indexOf(item)];
          }
        });
        writeData(newLine);
        break;
      case 'empty':
        console.log('select the encoding or decoding directive.');
        break;
      default:
        console.log('program.action:', program.action);
    }
  });
})();
