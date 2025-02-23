

function triangle(str, num) {
    let new_str = ""
    for (let i = 1; i <= num; i++) {
        new_str += `${str}`.repeat(i)
        if (i < num) {
            new_str += `\n`
        }

    }
    return new_str
}


