
// const callback = await callback

function retry(count, callback) {
    return async function (...args) {
    for ( let i = 0 ; i<=count; i++){
        callback(...args).then(
            ((result)=> result)
        ).catch((err)=> err)
     }
    }
}








