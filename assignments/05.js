// const numNeighbors = Number(prompt('How many neighbor countries does your country have?'))

// if (numNeighbors === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border!')
// } else {
//     console.log('No borders!')
// }

const speakEnglish = false
const lessThan50 = false
const isIsland = false

if (speakEnglish && lessThan50 && !isIsland) {
    console.log('You should live in this country')
} else {
    console.log('This country does not meet your criteria')
}