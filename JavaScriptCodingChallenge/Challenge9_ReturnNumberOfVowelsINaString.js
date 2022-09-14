//Return the Number of Vowels in a String
const vowels = ["a", "e", "i", "o", "u"]

function countVowelsIterative(text) {
  let number = 0

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {              //determines whether a string contains the given characters within it or not
      number++
    }
  }

  //console.log(`The text contains ${number} vowel(s)`)
  console.log('The text contains ' + number + ' vowel(s)')

  return number
}
countVowelsIterative("OritseWeyinmiGbiaye")
