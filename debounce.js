
function debounce(func, delay) {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

function opDebounce(func, delay, options = { leading: false }) {
    let timeout;
    let leading_invoked = false
    return function (...args) {
        if (timeout){
           clearTimeout(timeout)
        }
        if (!timeout && !leading_invoked && options.leading) {
            func(...args)
            leading_invoked = true
        }
        if ((leading_invoked || !options.leading)) {
            timeout = setTimeout(() => {
                func(...args)
            }, delay)
        }
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
