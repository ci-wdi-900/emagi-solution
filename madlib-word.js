const getCategory = require('./get-category.js');
const randomElement = require('./random-element.js');


const madlibWord = function(word) {
    const category = getCategory(word);
    if (category.length === 0) {
        return word;
    } else {
        return randomElement(category).symbol;
    }
}


module.exports = madlibWord;
