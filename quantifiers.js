

function every(array_data, func) {
    for (let i = 0; i < array_data.length; i++) {
        if (!func(array_data[i], i, array_data)) {
            return false
        }
    }
    return true

}


function some(array_data, func) {
    for (let i = 0; i < array_data.length; i++) {
        if (func(array_data[i], i, array_data)) {
            return true
        }
    }
    return false

}


function none(array_data, func) {
    return !every(array_data, func)
}