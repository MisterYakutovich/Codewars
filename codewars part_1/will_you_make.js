const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
    return mpg*fuelLeft>=distanceToPump ? true : false
  };
  console.log(zeroFuel(500,25,19))