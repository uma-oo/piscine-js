// let initialValue = 0

// let obj = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

// let sum = obj.reduce(function (accumulator, curValue) {

//     return accumulator + curValue.n

// }, initialValue)

// console.log(sum)



// function flat(array, depth = 1) {
//     let initialValue = []
//     let result = array.reduce(function (array, initialValue) {
//         if (!Array.isArray(array)) {
//             initialValue.push(array)
//         } else if (Array.isArray(array) && depth > 0) {
//             initialValue.push(flat(array, depth - 1))
//         }

//     }, initialValue)

//   return result
// }

// kifash depth hna 0 u lhiiih 1 ?????
function flat(array, depth = 0) {
    let initialValue = [];
    let result = array.reduce(function (accumulator, currentValue) {
        if (!Array.isArray(currentValue)) {
            accumulator.push(currentValue);
        } else if (Array.isArray(currentValue) && depth >= 0) {
            accumulator.push(...flat(currentValue, depth - 1)); 
            depth=depth-1
        } else {
            accumulator.push(currentValue)
        }
        return accumulator;
    }, initialValue);

    return result; 
}

console.log(flat([1, [2, [3], [4, [5]]]], 2))
console.log(flat(flat([1, [2]])))
console.log(flat([1, [2, [3]]]))