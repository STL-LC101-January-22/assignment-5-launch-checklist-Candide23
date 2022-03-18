// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function () {
  

  let pilotNameInput = document.querySelector("input[name = pilotName]");
  let copilotNameInput = document.querySelector("input[name = copilotName]");
  let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
  let cargoMassInput = document.querySelector("input[name = cargoMass]");
  let list = document.getElementById("faultyItems");

  list.style.visibility = "hidden";

  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      validateInput(pilotNameInput.value) === "Empty" ||
      validateInput(copilotNameInput.value) === "Empty" ||
      validateInput(fuelLevelInput.value) === "Empty" ||
      validateInput(cargoMassInput.value) === "Empty"
    ) {
      alert("All fields are required!");
      event.preventDefault();
    } else if (
      validateInput(pilotNameInput.value) === "Is a Number" ||
      validateInput(copilotNameInput.value) === "Is a Number" ||
      validateInput(fuelLevelInput.value) === "Not a Number" ||
      validateInput(cargoMassInput.value) === "Not a Number"
    ) {
      alert("Make sure to enter valid information for each field!");
     event.preventDefault();
    }

      formSubmission(
        document,
        list,
        pilotNameInput.value,
        copilotNameInput.value,
        fuelLevelInput.value,
        cargoMassInput.value,
      
      );
  
   
  });

  let listedPlanets;
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
