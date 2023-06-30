const MORSE_CODE = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
    '-----': '0'
  };
decodeMorse = function(morseCode){
    const words = morseCode.trim().split('   ');
    const decodedWords = words.map(word => {
    const characters = word.split(' ');
    const decodedCharacters = characters.map(char => MORSE_CODE[char]);
        return decodedCharacters.join('');
    });
    return decodedWords.join(' ');
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
