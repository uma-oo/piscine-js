


// is.num = (argument) => {
//     return typeof (argument) === "number" ? true : false;
// }

function  num(argument){
    return typeof (argument) === "number" ? true : false;
}

function nan(argument) {
    return typeof (argument) === "number" && Number.isNaN(argument) ? true : false
}


function str(argument) {
    return typeof (argument) === "string" ? true : false
}

function bool(argument) {
    return typeof (argument) === "boolean" ? true : false

}

function undef(argument) {
    return typeof (argument) === "undefined" ? true : false
}

function def(argument) {
    return typeof (argument) !== "undefined" ? true : false
}



function arr(argument) {
    return Array.isArray(argument) ? true : false;
}

function obj(argument) {
    return typeof (argument) === "object" ? true : false;
}

function fun(argument) {
    return typeof (argument) === "function" ? true : false;
}


function truthy(argument) {
    return argument !== "" && argument !== 0 && argument !== -0 && argument !== null && argument !== undefined && argument !== 0n && argument !== NaN && argument !== false ? true : false
}

function falsy(argument) {
    return !truthy(argument)
}


is.num = num()
is.nan = nan()
is.str = str()
is.bool= bool()
is.falsy= falsy()
is.truthy= truthy()
is.fun = fun()
is.obj = obj()
is.arr=arr()
is.undef= undef()
is.def=def()
