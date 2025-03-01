

function map(array_data, func) {
    let new_array = []

    for (let i = 0; i < array_data.length; i++) {
        new_array.push(func(array_data[i], i, array_data))
    }
    return new_array
}


function flatMap(array_data, func) {
    for (let i = 0; i < array_data.length; i++) {
        new_array.push(func(array_data[i], i, array_data))
    }
    return new_array.flat()
}



