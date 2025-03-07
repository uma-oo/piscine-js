


function replica(...args) {
    let target = args[0]
    switch (Array.isArray(target)) {
        case true:
            for (let arg of args) {
                switch (Array.isArray(arg)) {
                    case true:
                        target.push(copyArray(arg))
                    case false:
                        let value  = copyObject(arg)
                        target.push(value)
                }
            }

        case false:
            for (let arg of args) {
                console.log("arg", arg);
                switch (Array.isArray(arg)) {
                    case true:
                        target.push(copyArray(arg))
                    case false:
                        console.log("arg", arg);
                        target = {...target, ...arg}
                }
            }

    }



    return target

}


function copyArray(array) {
    let new_array = []
    for (let element of array) {
        if (typeof element === "object" && Array.isArray(element)) {
            new_array.push(copyArray(element))

        } else {
            new_array.push(element)
        }
    }
    return new_array
}

function copyObject(object) {
    let new_object = {}
    for (let [key, value] of Object.entries(object)) {
        console.log(key);
        if (typeof value === "object" && !Array.isArray(value)) {
            new_object[key] = copyObject(value)
        } else if (typeof value === "object" && Array.isArray(value)) {
            new_object[key] = copyArray(value)
        } else {
            new_object[key] = value
        }
    }
    return new_object
}







console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }), { a: { b: 1, c: 23 } });