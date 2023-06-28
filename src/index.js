const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let result = expr.split('');
  const chunkSize = 10;

  for (let i = 0; i < result.length; i += chunkSize) {
    let chunk = result.slice(i, i + chunkSize);
    chunk = chunk.join('').replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
    if (chunk === '**********') {
    arr.push(' ');
    }
    if (MORSE_TABLE[chunk]) {
    arr.push(MORSE_TABLE[chunk]);
    } 
  }
  return arr.join('');  
}

module.exports = {
    decode
}