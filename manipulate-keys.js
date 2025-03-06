


function filterKeys(object, func) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        if (func(key, value, object)) {
            new_object[key] = value
        }
    }
    return new_object
}

function mapKeys(object, func) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        let new_key = func(key, value, object)
        new_object[new_key] = value
    }
    return new_object
}


function reduceKeys(object, func, initial_value) {
    return accumulateKeys(object, func, initial_value)

}


function accumulateKeys(object, func, initial_value) {
    let acc, start
    if (initial_value === undefined) {
        acc = Object.keys(object)[0]
        start = 1
    } else {
        acc = initial_value
        start = 0
    }

    for (let [key, value] of Object.entries(object).slice(start)) {
        acc = func(acc, key, value, object)
    }

    return acc

}




// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(mapKeys(nutrients, (k) => `-${k}`))
// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }