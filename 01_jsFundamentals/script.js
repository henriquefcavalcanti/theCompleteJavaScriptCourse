// let js = 'amazing'
// console.log(40 + 8 + 23 - 10)

// console.log('Jonas')
// console.log('23')

// let firstName = 'Matilda'
// console.log(firstName)
// console.log(firstName)

// const PI = 3.1415

// console.log(PI)

// let javaScriptIsFun = true
// console.log(javaScriptIsFun)

// console.log(true)
// console.log(typeof javaScriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')

// javaScriptIsFun = 'YES!'
// console.log(typeof javaScriptIsFun)

// let year
// console.log(year)
// console.log(typeof year)

// year = 1991
// console.log(year)
// console.log(typeof year)

// console.log(typeof null)

// let age = 30
// age = 31

// const birthYear = 1991
// birthYear = 1990

// const job

// var job = 'programmer'
// job = 'teacher'


// // Math operators
// const now = 2037
// const ageJonas = now - 2002
// const ageSarah = now - 2020
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Henrique'
// const LastName = 'Cavalcanti'
// console.log(firstName + ' ' + LastName)

// // Assignment operator
// let x = 10 + 5 // 10
// x += 10 // x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x++ // x = x +1
// x-- // x = x - 1
// console.log(x)

// // Comparison operators
// console.log(ageJonas > ageSarah)
// console.log(ageSarah >= 18)

// const isFullAge = ageSarah >= 18

// console.log(now - 1991 > now - 2018)

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018

// console.log(now - 1991 > now - 2018)

// console.log(25 - 10 - 5)

// let x, y
// x = y = 25 - 10 - 5 // x = y = 10, x = 10
// console.log(x, y)

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge)




// //////////////////////
// // Coding Challenge #1
// const markHeight = 1.69
// const markMass = 78
// const johnHeight = 1.95
// const johnMass = 92

// const markBMI = markMass / markHeight ** 2
// const johnBMI = johnMass / johnHeight ** 2

// let markHigherBMI = markBMI > johnBMI
// console.log(markHigherBMI)


/////////////////////////////////////

// const firstName = 'Henrique'
// const job = 'programmer'
// const birthYear = 2002
// const year = 2037

// const henrique = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
// console.log(henrique)

// const henriqueNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(henriqueNew)

// console.log(`Just a regular string...`)

// console.log(`String with
// multiple
// lines`)


// const age = 15

// if (age >= 18) {
//     console.log('Sarah can start diving license!!')
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years!!`)
// }

// const birthYear = 1991
// let century
// if (birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21
// }
// console.log(century)



// ////////////////
// // Coding Challenge #2
// const markHeight = 1.69
// const markMass = 78
// const johnHeight = 1.95
// const johnMass = 92

// const markBMI = markMass / markHeight ** 2
// const johnBMI = johnMass / johnHeight ** 2

// if(markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// }

// // type conversion
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('Jonas'))
// console.log(typeof NaN)

// console.log(String(23), 23)

// // type coercion
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3)
// console.log('23' / '2')
// console.log('23' > '18')

// let n = '1' + 1
// n = n - 1
// console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100
if(money) {
    console.log("Don't spend it all!")
} else {
    console.log("You should get a job!")
}

let height = 81
if(height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}