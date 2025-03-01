

function filter(array_data, func) {
    let new_array = []
    for (let i = 0; i < array_data.length; i++) {
        if (func(array_data[i], i, array_data)) {
            new_array.push(array_data[i])
        }
    }
    return new_array
}

function reject(array_data, func) {
    let new_array = []
    for (let i = 0; i < array_data.length; i++) {
        if (!func(array_data[i], i, array_data)) {
            new_array.push(array_data[i])
        }
    }
    return new_array
}

function partition(array_data, func) {
 return [filter(array_data, func), reject(array_data, func)]
}