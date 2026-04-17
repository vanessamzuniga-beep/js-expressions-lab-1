//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

// Function converting to Celsius
function convertFToC(tempInFahrenheit){
    tempInCelsius = (tempInFahrenheit -32) * 5/9
    return tempInCelsius
}

// Converting to celsius
const day1TempC = convertFToC(day1TempF)
console.log(day1TempC)

const day3TempC = convertFToC(day3TempF)
console.log(day3TempC)

const day5TempC = convertFToC(day5TempF)
console.log(day5TempC)

const day7TempC = convertFToC(day7TempF)
console.log(day7TempC)

const day9TempC = convertFToC(day9TempF)
console.log(day9TempC)

const day11TempC = convertFToC(day11TempF)
console.log(day11TempC)

const day13TempC = convertFToC(day13TempF)
console.log(day13TempC)

const day15TempC = convertFToC(day15TempF)
console.log(day15TempC)

const day17TempC = convertFToC(day17TempF)
console.log(day17TempC)

const day19TempC = convertFToC(day19TempF)
console.log(day19TempC)

const day21TempC = convertFToC(day21TempF)
console.log(day21TempC)

const day23TempC = convertFToC(day23TempF)
console.log(day23TempC)

const day25TempC = convertFToC(day25TempF)
console.log(day25TempC)

const day27TempC = convertFToC(day27TempF)
console.log(day27TempC)

const day29TempC = convertFToC(day29TempF)
console.log(day29TempC)

// Get sum of Celsius
const tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC
console.log(tot_temperature_in_celsius)

// Get average of celsius
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30
console.log(avg_temperature_in_celsius)

//Function converting to Fahrenheit
function convertCToF(tempInCelsius){
    tempInFahrenheit = (tempInCelsius * 9 / 5) + 32
    return tempInFahrenheit
}

// Convert to Fahrenheit
const day2TempF = convertCToF(day2TempC)
console.log(day2TempF)

const day4TempF = convertCToF(day4TempC)
console.log(day4TempF)

const day6TempF = convertCToF(day6TempC)
console.log(day6TempF)

const day8TempF = convertCToF(day8TempC)
console.log(day8TempF)

const day10TempF = convertCToF(day10TempC)
console.log(day10TempF)

const day12TempF = convertCToF(day12TempC)
console.log(day12TempF)

const day14TempF = convertCToF(day14TempC)
console.log(day14TempF)

const day16TempF = convertCToF(day16TempC)
console.log(day16TempF)

const day18TempF = convertCToF(day18TempC)
console.log(day18TempF)

const day20TempF = convertCToF(day20TempC)
console.log(day20TempF)

const day22TempF = convertCToF(day22TempC)
console.log(day22TempF)

const day24TempF = convertCToF(day24TempC)
console.log(day24TempF)

const day26TempF = convertCToF(day26TempC)
console.log(day26TempF)

const day28TempF = convertCToF(day28TempC)
console.log(day28TempF)

const day30TempF = convertCToF(day30TempC)
console.log(day30TempF)

//Get sum of Fahrenheit
const tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF
console.log(tot_temperature_in_fahrenheit)

//Get average of Fahrenheit
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
console.log(avg_temperature_in_fahrenheit)