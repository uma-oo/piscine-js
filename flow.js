


function flow(array_funcs) {
    return function(...args){
        let res = array_funcs[0](...args)
        for (let func of array_funcs.slice(1)) {
            res = func(res)
        }
        return res
    }
  
}


// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])
// console.log(flowedFunctions(2, 3)) // -> 25