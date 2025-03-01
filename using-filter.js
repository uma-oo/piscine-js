


function filterShortStateName(array_string) {
    return array_string.filter((value) => (value.length < 7))
}


function filterStartVowel(array_string) {
    return array_string.filter((value) => (startsWithVowel(value)))

}


function filter5Vowels(array_string) {
    return array_string.filter((value) => contains5vowels(value))
}


function filter1DistinctVowel(array_string) {
    return array_string.filter((value) => containsDisctinctVowel(value))
}



function multiFilter(data_object) {
    return data_object.filter(char => char.region!=="South" && char.capital.length>=8 &&!startsWithVowel(char.name) && containsAtLeast1Vowel(char.tag))

}



function startsWithVowel(string) {
    return string.startsWith("a") || string.startsWith("o") ||
        string.startsWith("i") || string.startsWith("u") ||
        string.startsWith("e") || string.startsWith("A") ||
        string.startsWith("O") || string.startsWith("I") ||
        string.startsWith("U") || string.startsWith("E")

}



function contains5vowels(string) {
    let counter = 0
    for (let char of string) {
        if (startsWithVowel(char)) {
            counter += 1
        }
    }
    return counter >= 5
}

function containsAtLeast1Vowel(string){
    let counter = 0
    for (let char of string) {
        if (startsWithVowel(char)) {
            counter += 1
        }
    }
    return counter >= 1
}




function containsDisctinctVowel(string) {
    let found = false
    let first_vowel
    for (let char in string) {
        if (startsWithVowel(string[char]) && !found) {
            found = true
            first_vowel = string[char].toLowerCase()
        } else if (found && startsWithVowel(string[char]) && first_vowel!== string[char].toLowerCase()){
            return false
        }
    }
    return true
}









console.log(filterShortStateName(["oumayma", "Salah Eddine"]));

console.log(filterStartVowel(["oumayma", "Salah Eddine"]));

console.log(filter1DistinctVowel(["Alabama"]))
console.log(multiFilter([
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
      tag: 'MO',
      name: 'Missouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    {
      tag: 'PA',
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
  ]));


