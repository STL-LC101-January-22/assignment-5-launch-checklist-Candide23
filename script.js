// Write your JavaScript code here!



window.addEventListener("load", function() {

    
    let pilotName = document.querySelector("input[name='pilotName']");
    let copilotName = document.querySelector("input[name='copilotName']");
    let fuelLevel = document.querySelector("input[name='fuelLevel']");
    let cargoMass = document.querySelector("input[name='cargoMass']");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden"

  let formSubmitBtn = document.getElementById("formSubmit");
  formSubmitBtn.addEventListener("submit", function (event) {
    

    if (
      validateInput(pilotName) === "Empty" ||
      validateInput(copilotName) === "Empty" ||
      validateInput(fuelLevel) === "Empty" ||
      validateInput(cargoMass) === "Empty"
    ) {
      alert("All fields are required");
      event.preventDefault();
    } else if (
      validateInput(pilotName) === "Is a Number" ||
      validateInput(copilotName) === "Is a Number" ||
      validateInput(fuelLevel) === "Not a Number" ||
      validateInput(cargoMass) === "Not a Number"
    ) {
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
    } else {
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
      event.preventDefault();
    }
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });
});