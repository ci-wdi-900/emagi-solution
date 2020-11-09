const emojis = require('./emojis.js');


const search = function(searchStr) {
    return emojis.filter(function(emoji) {
        return emoji.name.includes(searchStr.toLowerCase());
    }) 
}


module.exports = search;
