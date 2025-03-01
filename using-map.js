



function citiesOnly(data_object) {
    return data_object.map(({ city }) => (city));
}



function upperCasingStates(data_array) {
    return data_array.map((city) => (upperCase(city)))
}


function upperCase(city) {
    let values = city.split(" ")
    let new_str = ""
    for (let value of values) {
        if (value !== values[values.length-1]) {
            new_str += value[0].toUpperCase() + value.slice(1) + " "
        } else {
            new_str += value[0].toUpperCase() + value.slice(1)
        }
    }
    return new_str
}

function fahrenheitToCelsius(data_array) {
    return data_array.map((temp) => (fromFtoC(temp)))
}

function fromFtoC(temp) {
    let integer_part = temp.split("°")[0]
    let c = (integer_part - 32) * 5 / 9

    return Math.floor(c).toString() + "°C"
}

function trimTemp(data_object) {
return data_object.map((object) => {
     
    const temperature = object.temperature.replace(/ /g, '');

    return {...object, temperature}

    })
}


function tempForecasts(data_object) {
    return data_object.map(({ city, temperature, state }) => (`${fromFtoC(temperature)}elsius in ${city}, ${upperCase(state)}`))
}






console.log(tempForecasts([
    {
      city: 'Los Angeles',
      state: 'california',
      region: 'West',
      temperature: '101°F'
    },
    {
      city: 'San Francisco',
      state: 'california',
      region: 'West',
      temperature: '84°F'
    },
    {
      city: 'Miami',
      state: 'Florida',
      region: 'South',
      temperature: '112°F'
    },
    {
      city: 'New York City',
      state: 'new york',
      region: 'North East',
      temperature: '0°F'
    },
    {
      city: 'Juneau',
      state: 'Alaska',
      region: 'West',
      temperature: '21°F'
    },
    {
      city: 'Boston',
      state: 'massachussetts',
      region: 'North East',
      temperature: '45°F'
    },
    {
      city: 'Jackson',
      state: 'mississippi',
      region: 'South',
      temperature: '70°F'
    },
    {
      city: 'Utqiagvik',
      state: 'Alaska',
      region: 'West',
      temperature: '-1°F'
    },
    {
      city: 'Albuquerque',
      state: 'new mexico',
      region: 'West',
      temperature: '95°F'
    }
  ]
  )) // -> ['38°Celsius in Pasadena, California']


console.log();
