


function pyramid(str, num) {
    let new_str = ""
    for (let i = 1; i <= num; i++) {
        new_str+=' '.repeat((num-i)*str.length)+str.repeat(2*i-1)
        if (i < num) {
           new_str+=`\n`
        }
    }
    return new_str
}


console.log(pyramid("ak", 5))