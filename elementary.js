


function multiply(a, b) {
    let result = 0
    for (let i = 1; i <= b; i++) {
        result += a

    }
    return result
}

// integer division operator // hada f python ( z3ma division euclidienne ;)

function divide(a, b) {
    let result=0
    while(a-b>=0){
      result+=1
      a=a-b
    }
   return result
}

function modulo(a, b) {
    return a-multiply(b, divide(a,b))

}


console.log(multiply(5,3) )
console.log(divide(15,5) )
console.log(modulo(9,5) )
console.log(multiply(34, 78))