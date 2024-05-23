function reverseString(word) {
    charsOfWord = word.split("")
    let reversedString = ""

    while (charsOfWord.length > 0) {
        reversedString = reversedString + charsOfWord.pop()
    }

    return reversedString
}

// Do not edit below this line
module.exports = reverseString;
