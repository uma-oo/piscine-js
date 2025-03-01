


function hasCity(country, array_str) {
    return function (city) {
        for(let element of array_str)
        if (element==city){
            return `${city} is a city from ${country}`
        }
        return `${city} is not a city from ${country}`
    }

}



