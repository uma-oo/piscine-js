
function debounce(func, delay) {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}


function opDebounce(func , delay, options= { leading : false, maxWait:0, trailing:true }){
    switch (options){
     case options.leading && !options.trailing:
        break
     case options.trailing && !options.leading:
        debounce(func, delay)
     case options.leading && options.trailing:
        break 
    }
}





// console.log(await run(debounce(add, 100), { delay: 50, count: 5 }), 0);


// const run = async (callback, { delay, count }) => {
//     const arr = []
//     await setIntervalSync(() => callback(arr, 1), delay, count * delay + 5)
//     return arr.length
// }

// const add = (arr, el) => arr.push(el)

// let res
// async () =>  {
//     // test with debounce wait limit inferior to wait time call (how much time we wait to the function be called again)
//     // it works concurrently
//     res = await Promise.all([
//         run(debounce(add, 50), { delay: 100, count: 5 }),
//         run(debounce(add, 20), { delay: 50, count: 10 }),
//     ]
//     )
//     console.log(res);
// }  



// console.log(res);
