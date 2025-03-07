



function defaultCurry(object1) {
    let new_object = {}
    // solution tafhaa 
    // 7ta l imta ghadi nb9aa mklkhaa hakka 
    // i need to work more 
    return function (object2) {
        for (let [key, value] of Object.entries(object1)) {
            new_object[key] = value
        }
        for (let [key, value] of Object.entries(object2)) {
            new_object[key] = value
        }
        return new_object
    }

}


function mapCurry(func) {
    return function (object) {
        let new_object = {}
        for (let element of Object.entries(object)) {
            let new_key, new_value
            [new_key, new_value] = func(element, object)
            new_object[new_key] = new_value
        }
        return new_object
    }
}


function reduceCurry(func) {
    return function (object, initial_value) {
        let acc, start
        if (initial_value === undefined) {
            acc = Object.entries(object)[0]
            start = 1
        } else {
            acc = initial_value
            start = 0
        }
        for (let element of Object.entries(object).slice(start)) {
            acc = func(acc, element, object)
        }
        return acc
    }
}


function filterCurry(func) {
    let new_object = {}
    return function (object) {
        for (let element of Object.entries(object)) {
            if (func(element, object)) {
                new_object[element[0]] = element[1]
            }
        }
        return new_object
    }
}


const personnel = {
    lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
    sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
    calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
}



function reduceScore(object, initial_value) {
    let new_object = filterCurry(([, v]) =>(v["isForceUser"]==true))(object)
    return reduceCurry(([k, v])=>(  (initial_value, [k, v] )  ))(new_object, initial_value)

    


}

function filterForce() {

}

// mapAverage: that will return a new object with the property averageScore, that is the average of the scores for each person.
function mapAverage() {

}



// console.log(reduceScore(personnel.lukeSkywalker));
console.log(mapCurry(([k, v]) => [`${k}🤙🏼`, `${v}🤙🏼`])({ emoji: 'cool' }),);

console.log(reduceScore(personnel, 0), 420)