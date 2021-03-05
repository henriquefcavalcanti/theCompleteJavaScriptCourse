let country = 'Brazil'
let continent = 'South America'
let population = 213.4
let description = `Brazil is in South America, and its ${population} million people speak portuguese`

console.log(population / 2)
population++
console.log(population)
console.log(population > 6)
console.log(population > 33)
console.log(description)


if(population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}
