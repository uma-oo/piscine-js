

function chunk(array, integer) {
    let new_array = []
    let i = 0
    do {
        new_array.push(array.slice(i, i + integer))
        i = i + integer
    } while (i < array.length);
    return new_array
}

