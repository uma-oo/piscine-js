


function invert(object){
  let new_object = {}
  for (let [key, value] of Object.entries(object)){
    new_object[value]= key
  }
  return new_object
}