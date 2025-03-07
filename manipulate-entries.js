



function filterEntries(object, func) {
    let new_object = {}
    for (let element of Object.entries(object)) {
        if (func(element, object)) {
            new_object[element[0]] = element[1]
        }
    }
    return new_object
}


function mapEntries(object, func) {
    let new_object = {}
    for (let element of Object.entries(object)) {
        let new_key, new_value
        [new_key, new_value] = func(element, object)
        new_object[new_key] = new_value
    }
    return new_object

}


function reduceEntries(object, func, initial_value) {
    let accumulator, start;
    if (initial_value === undefined) {
        accumulator = Object.entries(object)[0]
        start = 1
    } else {
        accumulator = initial_value
        start = 0
    }
    for (let element of Object.entries(object).slice(start)) {
        accumulator = func(accumulator, element, object)
    }
    
    return accumulator

}

function totalCalories(object) {
  let new_object = mapEntries(object, ([k, v])=>  [ k ,(nutritionDB[k].calories*v*10)/100])
  console.log(new_object);
  return Math.round(reduceEntries(new_object, (acc, [ , v]) =>[ , acc[1]+v] )[1])/10
}


function lowCarbs(object) {
  let total_amount = mapEntries(object , ([k, v])=>[k ,( nutritionDB[k].carbs*v)/100])
  return filterEntries(object, ([key,])=> (total_amount[key]<50))
}

function cartTotal(object) {
 let new_object =  mapEntries (object, ([k, v])=>{
        let inner_obj = {}
        for (let [key, value] of Object.entries(nutritionDB[k])){
         inner_obj[key]=Math.round((value*v*1000)/100)/1000

        }
        return [k, inner_obj]
    
 })
return new_object
}

const nutritionDB = {
    tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
    vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
    oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
    onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
    garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
    sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
    orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
  }



// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }
// console.log(totalCalories(groceriesCart));

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))


