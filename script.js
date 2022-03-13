// Write your JavaScript code here!



window.addEventListener("load", function() {

    
    let pilotName = document.querySelector("input[name='pilotName']");
    let copilotName = document.querySelector("input[name='copilotName']");
    let fuelLevel = document.querySelector("input[name='fuelLevel']");
    let cargoMass = document.querySelector("input[name='cargoMass']");
    let list = document.getElementById("faultyItems");

  let formSubmitBtn = document.getElementById("formSubmit");
  formSubmitBtn.addEventListener("submit", function (event) {
    

    if (
      validateInput(pilotName) === "" ||
      validateInput(copilotName) === "" ||
      validateInput(fuelLevel) === "" ||
      validateInput(cargoMass) === ""
    ) {
      alert("All fields are required");
      //event.preventDefault();
    } else if (
      validateInput(pilotName) === "number" ||
      validateInput(copilotName) === "number" ||
      validateInput(fuelLevel) !== "number" ||
      validateInput(cargoMass) !== "number"
    ) {
      alert("Make sure to enter valid information for each field!");
      //event.preventDefault();
    } else {
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
      //event.preventDefault();
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