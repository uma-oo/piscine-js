



function defaultCurry(object1) {
    return function (object2) {
        for (let [key, value] of Object.entries(object2)) {
            object1[key] = value
        }
        return object1
    }

}


function mapCurry(func) {
    return function (object) {
        let new_object = {}
        for (let element of Object.entries(object)) {
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


// const personnel = {
//     lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
//     sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
//     calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
// }

function reduceScore(object) {
  let sum =0
   let using_force = function(){
    for (let [key , value] of Object.entries(object)){
        filterCurry(
         ([k, v]) => ( k==="isForceUser" && v ===true ,console.log("k",k, 'v', v)) 
     
        )(key)
        return using_force.length
    }


   }
   
   
}

function filterForce() {

}


function mapAverage() {

}



// console.log(reduceScore(personnel.lukeSkywalker));


console.log((defaultCurry(Object.freeze({ http: 403 }))(Object.freeze({ http: 200 })), {
    http: 200,
  }));

  console.log(defaultCurry({ http: 403 })({}), { http: 403 })
