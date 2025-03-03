
import { styles } from "./pimp-my-style.data.js";


let j = styles.length
var i = 0
export function pimp() {
    console.log("i",i , "j", j);
    let btn = document.querySelector('button')
    if (i <= 13) {
        btn.classList.add(styles[i])
        i++
    } else if (i === 14) {
        btn.classList.add(styles[i], "unpimp")
        btn.classList.add()
        i++
    } else {
        if (j===1){
            btn.classList.remove(styles[j-1], "unpimp")
            i=0
            j=styles.length
        }
        btn.classList.remove(styles[j-1])
        j--
  
    }

}