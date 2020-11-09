const emojis = require('./emojis.js');
const encodeWord = require('./encode-word.js');
const translateWord = require('./translate-word.js');
const getCategory = require('./get-category.js');
const madlibWord = require('./madlib-word.js');
const search = require('./search.js')
const randomElement = require('./random-element.js');


const command = process.argv[2];
const argument = process.argv[3];
const inputWords = process.argv.slice(3);

if (command === 'encode') {
    const encodedWords = inputWords.map(encodeWord);
    console.log(encodedWords.join(' '));
} else if (command === 'translate') {
    const translatedWords = inputWords.map(translateWord);
    console.log(translatedWords.join(' '));
} else if (command === 'madlibs') {
    const madlibbedWords = inputWords.map(madlibWord);
    console.log(madlibbedWords.join(' '));
} else if (command === "search") {
    const matches = search(argument);
    if (matches.length === 0) {
        console.log('There was no match.');
    } else {
        for (const match of matches) {
            console.log(match.symbol);
        }
    }
} else if (command === 'random' && argument === undefined) {
    const emoji = randomElement(emojis);
    console.log(emoji.symbol);
} else if (command === 'random') {
    const categoryEmojis = getCategory(argument);
    const emoji = randomElement(categoryEmojis);
    console.log(emoji.symbol);
} else {
    console.log('Your choices for what to write after "node main.js" (and a space!) are:');
    console.log('* "encode"');
    console.log('* "translate"');
    console.log('* "madlibs"');
    console.log('* "search"');
    console.log('* "random" (with optional category word)');
}

// or, as a switch:
// switch (command) {
//     case 'encode':
//         const encodedWords = encodeWords(inputWords);
//         console.log(encodedWords.join(' '));
//         break;

//     case 'translate':
//         const translatedWords = translateWords(inputWords);
//         console.log(translatedWords.join(' '));
//         break;

//     case 'madlibs':
//         const madlibbedWords = madlibWords(inputWords);
//         console.log(madlibbedWords.join(' '));
//         break;

//     case 'random':
//         if (argument === undefined) {
//             console.log(randomElement(emojis.emoji));
//         } else {
//             console.log(randomElement(emojis[argument]));
//         }

//         break;
    
//     case 'search':
//         const matches = search(argument);
//         if (matches.length === 0) {
//             console.log('There was no match.');
//         } else {
//             for (const match of matches) {
//                 console.log(match.symbol);
//             }
//         }

//         break;

//     default:
//         console.log('Your choices for what to write after "node main.js" (and a space!) are:');
//         console.log('* "encode"');
//         console.log('* "translate"');
//         console.log('* "madlibs"');
//         console.log('* "random" (with optional category word)');
// }
