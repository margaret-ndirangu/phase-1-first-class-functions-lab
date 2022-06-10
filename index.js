// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers) {
    return drivers.slice(0,drivers.length -2)
  };
  const returnLastTwoDrivers= function(drivers) {
    return drivers.slice(-2)
  };
  const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers] 
  const createFareMultiplier= function(value){ 
    return function (fareMultiplier){
      return (fareMultiplier*value);
    }
  } 
  const fareDoubler= createFareMultiplier(2);
  const fareTripler= createFareMultiplier(3) ; 
 
  const selectDifferentDrivers= function(drivers,selectingDrivers){
    return selectingDrivers(drivers);
  }
  