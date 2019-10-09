const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  });
  return result;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (searchTransport) {
  const result = this.journeys.filter((journey) => {
    return (searchTransport === journey.transport);
  });
  return result;
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return (minDistance < journey.distance);
  });
  return result;
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return result;
};



Traveller.prototype.getUniqueModesOfTransport = function () {
  //   const result = this.journeys.map((journey) => {
  //   });
  //   const unique = [];
  //   result.forEach ((journey)=>{
  //     if journey !==
  //   })
  //   return result;
  // };


  let array = [];
  let journeys = this.journeys
  journeys.forEach((journey) => {
    if (array.includes(journey.transport) ){
      return
    } else {
      array.push(journey.transport)
    };
  });
  return array;
};







module.exports = Traveller;
