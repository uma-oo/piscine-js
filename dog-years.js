
const oneYear = 31557600 


function dogYears(namePlanet , ageDog){
    if (namePlanet==="earth")return Number(((ageDog/oneYear)*7).toFixed(2));
    else if (namePlanet==="mercury") return Number(((ageDog/(0.2408467*oneYear))*7).toFixed(2));
    else if (namePlanet==="venus") return Number(((ageDog/(0.61519726*oneYear))*7).toFixed(2));
    else if (namePlanet==="mars") return Number(((ageDog/( 1.8808158 *oneYear))*7).toFixed(2));
    else if (namePlanet==="jupiter") return Number(((ageDog/(11.862615*oneYear))*7).toFixed(2));
    else if (namePlanet==="saturn") return Number(((ageDog/(29.447498 *oneYear))*7).toFixed(2));
    else if (namePlanet==="uranus") return Number(((ageDog/(84.016846*oneYear))*7).toFixed(2));
    else if (namePlanet==="neptune") return Number(((ageDog/(164.79132 *oneYear))*7).toFixed(2));     
}



console.log(typeof(dogYears("earth", 1000000000)))