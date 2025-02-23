

function get(src, path) {
    let result = " "
    let words = path.split(".")
    for (let char of words) {
        if (char == words[0]) {
            result = src[char]
        } else {
            result = result[char]
        }

    }
    return result

}

console.log(get({ key: 'value' }, 'key'))





