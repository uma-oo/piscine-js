

export function getArchitects(){
    let architects = document.getElementsByTagName('a')
    console.log(architects);
    
    let non_architects = document.getElementsByTagName('span')
    return [Array.from(architects), Array.from(non_architects)]
}


export function getClassical(){
  let classical = document.getElementsByClassName("classical")
  let nonClassical = document.querySelectorAll("a:not(.classical), span:not(.classical)")
  return [Array.from(classical), Array.from(nonClassical)]
}


export function getActive(){
    let active_architects= document.querySelectorAll("a.classical.active")
    let non_active_classical_architects = document.querySelectorAll("a:not(.classical.active)")
    return [Array.from(active_architects), Array.from(non_active_classical_architects)]
}


export function getBonannoPisano(){
    let BonannoPisano= document.getElementById("BonannoPisano")
    let array_of_other = Array.from(document.querySelectorAll("a.classical.active"))
    const res = array_of_other.filter((element)=>element!=BonannoPisano)
    return [BonannoPisano, res]
}