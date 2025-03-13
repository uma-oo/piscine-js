
// const callback = await callback

function retry(count, callback) {
    for ( let i = 0 ; i<=count; i++){
    return function (...args) {
        callback(...args).then(
            ((result)=> result)
        ).catch((err)=> err)
     }
    }
}





