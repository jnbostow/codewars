/*You are going to be given a word. Your job is to return the middle character
of the word. If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.*/


function middleChar(word) {
    if (word.length % 2 === 0) {
        const midChar = word.length / 2;
        return word.substring(midChar - 1, midChar + 1);
    } else {
        return word.charAt(word.length / 2);
    }
}
