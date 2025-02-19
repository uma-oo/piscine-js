const escapeStr = `Hello i\'m new to this Language 
 "Please Go easy on me "
 "i'm just a little girl /:"
`



const arr = [4, '2']
const obj = {
    str : "oumayma",
    num : 25,
    bool : true , 
    undef : undefined
}

const nested = {
    arr : [4, undefined, '2'],
    str : "oumayma",
    num : 25,
    bool : true 
}
Object.freeze(nested, obj)