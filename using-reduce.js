



function adder(array_data, initial=0){
  return array_data.reduce(
    (prev, next)=>prev+next, initial
  )
}

function sumOrMul(array_data, initial=0){
 return array_data.reduce(addOrMultiply, initial)
}

function addOrMultiply(prev, next){
    if (next%2!==0){
        return prev+next
    }
    return prev*next
}




function funcExec(array_functions, initial=0){
   return  array_functions.reduce(
    (previous, next)=> next(previous), initial
)
}

