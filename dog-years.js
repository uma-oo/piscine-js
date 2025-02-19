
const oneYear = 31557600 


function dogYears(namePlanet , ageDog){
    if (namePlanet==="earth")return ((ageDog/oneYear)*7).toFixed(2);
    else if (namePlanet==="mercury") return ((ageDog/(0.2408467*oneYear))*7).toFixed(2);
    else if (namePlanet==="venus") return ((ageDog/(0.61519726*oneYear))*7).toFixed(2);
    else if (namePlanet==="mars") return ((ageDog/( 1.8808158 *oneYear))*7).toFixed(2);
    else if (namePlanet==="jupiter") return ((ageDog/(11.862615*oneYear))*7).toFixed(2);
    else if (namePlanet==="saturn") return( (ageDog/(29.447498 *oneYear))*7).toFixed(2);
    else if (namePlanet==="uranus") return ((ageDog/(84.016846*oneYear))*7).toFixed(2);
    else if (namePlanet==="neptune") return ((ageDog/(164.79132 *oneYear))*7).toFixed(2);     
}


