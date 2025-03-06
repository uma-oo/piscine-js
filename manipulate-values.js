

function filterValues(object, func) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        if (func(value, key, object)) {
            new_object[key] = value
        }
    }
    return new_object

}


function mapValues(object, func) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        new_object[key] = func(value, key, object)
    }
    return new_object
}


function reduceValues(object, func, initial_value) {
    let res = accumulate(object, func, initial_value)
    return res

}





function accumulate(object, func, initial_value) {
   let accumulator , start;
    if (initial_value===undefined){
        accumulator=Object.values(object)[0]
        start =1
    } else {
        accumulator= initial_value
        start=0
    }
    for (let [key, value] of Object.entries(object).slice(start)) {
        accumulator = func(accumulator, value, key , object)
       
    }
    return accumulator
}







// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(Object.values(nutrients).slice(0));
// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// console.log(mapValues(nutrients, (v) => v + 1))
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
