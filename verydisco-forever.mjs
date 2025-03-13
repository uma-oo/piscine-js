
import { writeFile } from 'node:fs/promises';

let arg = process.argv[2]

function convert(sentence) {

    let words = sentence.split(" ")
    let new_sentence = ''

    for (let i in words) {
        let word = words[i]
        let median = Math.ceil((word.length) / 2)
        let [first, ...rest] = word.split(word[median])
        rest = rest.join(word[median])
        let left = word[median]
        if (rest === undefined) rest = ""
        if (first === undefined) first = ""
        if (word[median] === undefined) left = ""
        if (rest.length < first.length) {
            new_sentence += `${left}${rest}${first}`
        } else {
            new_sentence += `${rest}${first}${left}`
        }
        // console.log(typeof i , typeof(words.length-1), i);  in kaykun index string ghariiib 
        if (i!=words.length-1) new_sentence+=` ` , console.log("hna");
    }

    return new_sentence
}


writeFile("verydisco-forever.txt", convert(arg), (err=> {
    if (err) throw err 
}))


