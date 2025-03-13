
// const callback = await callback

function retry(count, callback) {
    return async function (...args) {
        for (let i = 0; i <= count; i++) {
            let res = callback(...args).then(
                (result) => { console.log("result",result);   return  result}
            )
            if (res){ return res}
            else if (!res && count===i){
                console.log("hnaaaa");
               throw res
            }
        }
    }
}








