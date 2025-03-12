



let arg = process.argv[2]
let words = arg.split(" ")
let new_sentence = ''
for (let word of words) {
    let median = Math.ceil((word.length) / 2)
    let [first, ...rest] = word.split(word[median])
    rest = rest.join(word[median])
    if (rest.length < first.length) {
        new_sentence += `${word[median]}${rest}${first} `
    } else {
        new_sentence += `${rest}${first}${word[median]} `
    }

}

console.log(new_sentence);


async ({ path, eq, randStr }) => {
    const tic = randStr(5)
    const tac = randStr(5)
    const ying = randStr(3)
    const yang = randStr(2)
    const { stdout } = await exec(`node ${path} "${tic}${tac} ${ying}${yang}"`)
    return eq(stdout.trim(), `${tac}${tic} ${yang}${ying}`)
  }
  
  