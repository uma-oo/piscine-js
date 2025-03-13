
// const callback = await callback

function retry(count, callback) {
    return async function (...args) {
    
    for ( let i = 0 ; i<=count; i++){
        console.log("hnaaaa");
        let result = await callback(...args)
        return result
     }
    }
}








