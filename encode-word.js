const emojis = require('./emojis.js');


const encodeWord = function(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase();
        let found = false;
        for (const emoji of emojis) {
            if (emoji.letter === char) {
                result += emoji.symbol;
                found = true;
            }
        }

        if (found === false) {
            result += char;
        }
    }

    return result;
}



module.exports = encodeWord;
