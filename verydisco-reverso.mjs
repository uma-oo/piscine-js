

import { readFile } from 'node:fs/promises';
let filename = process.argv[2]

function convert(sentence) {

    let words = sentence.split(" ")
    let new_sentence = ''

    for (let i in words) {
        let word = words[i]
        let median = Math.floor((word.length) / 2)
        new_sentence += word.slice(median) + word.slice(0, median)
        if (i != words.length - 1) new_sentence += ` `
    }
    return new_sentence
}



const data_read = await readFile(filename, "utf-8", (err, data) => {
    if (err) return err
    return data
})

console.log(convert(data_read));
