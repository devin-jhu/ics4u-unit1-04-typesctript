/**
 * the guess game program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022 10 30
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
// counter for the loop
let counter = 1

// Generate the number
const min = 1
const max = 6
const randomNumber = Math.floor(Math.random() * max + min)

// loop
while (true) {
  // Input
  const userNumberString = prompt('Guess a number between 1 to 6: ')
  const userNumber = parseInt(userNumberString)

  // Process
  if (randomNumber === userNumber) {
    break
  } else if (userNumber > randomNumber && userNumber < 7) {
    counter++
    console.log('Too big try again')
  } else if (userNumber < randomNumber && userNumber > 0) {
    counter++
    console.log('Too small try agian')
  } else {
    counter++
    console.log('invalid input')
  }
}

// Output
console.log(`\nYou won in ${counter} tries`)

console.log('\nDone.')
