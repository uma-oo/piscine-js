
let arg = process.argv[2]
let words = arg.split(" ")
let new_sentence = ''


for (let word of words) {
    let median = Math.ceil((word.length) / 2)
    let [first, ...rest] = word.split(word[median])
    rest = rest.join(word[median])
    let left =word[median]
    if (rest===undefined) rest=""
    if (first===undefined) first=""
    if( word[median]===undefined) left=""
    if (rest.length < first.length) {
        new_sentence += `${left}${rest}${first} `
    } else {
        new_sentence += `${rest}${first}${left} `
    }
}

console.log(new_sentence);
