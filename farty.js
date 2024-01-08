const numerals = {
    'I': 1,
    'V': 5,
    "X": 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
let number = 0

function farty(roman) {
    for(let i = 0; i < roman.length; i++){
        let letter = roman[i];
        if(numerals[roman[i+1]] > numerals[roman[i]]){
            number = number + ((numerals[roman[i+1]]) - (numerals[roman[i]]))
            i++
        }else{
            number = number + numerals[letter]
        }
    }
    console.log(number)
}
farty('MCMXCIV')