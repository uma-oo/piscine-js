const escapeStr = `Hello i\'m new to this Language 
 \` escaped , \\ escaped, \/ escaped , \" escaped, \'
 "Please Go easy on me "
 "i'm just a little girl /:"
`



const arr = [4, '2'];
Object.freeze(arr)
const obj = {
    str : "oumayma",
    num : 25,
    bool : true , 
    undef : undefined
};
Object.freeze(obj);

const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str : obj.str,
        num : obj.num,
        bool : obj.bool
    
    }
    
};
Object.freeze(nested , nested.obj);