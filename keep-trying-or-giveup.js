
// const callback = await callback

function retry(count, callback) {
    return async function (...args) {
        for (let i = 0; i <= count; i++) {
            console.log(i);
            let res = callback(...args).then(
                (result) => { console.log(i, result); return result }
            ).catch(
                (err) => { console.log("err", err); return err}
            )

            // 
            console.log("hereeeee");
            console.log(res);
            if (res && String(res).startsWith("Error")) return res // omg rah l3kss li khassu ykuun
            else if (count === i && res) {
                return res
            }
            // if (res){ return res}
            // else if (!res && count===i){
            //     console.log("hnaaaa");
            //    throw res
            // }
        }
    }
}








