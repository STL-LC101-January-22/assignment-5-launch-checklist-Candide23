// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function () {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  /*let pilotName = document.getElementById("pilotName");
  let copilotName = document.getElementById("copilotName");
  let fuelLevel = document.getElementById("fuelLevel");
  let cargoMass = document.getElementById("cargoMass");
  let list = document.getElementById("faultyItems");*/

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
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ){
         event.preventDefault();
         alert("Fields are required");

    } 
    else if((validateInput(isNaN(pilotNameInput.value ))=== "Is a number") &&(validateInput(isNaN(copilotNameInput.value ))==="Is a Number")&&
    (validateInput(isNaN(fuelLevelInput.value ))=== "Not a number")&&(validateInput(isNaN(cargoMassInput.value ))=== "Not a number")){
        
      event.preventDefault();
        alert("Make sure to enter valid information for each field");

    }
      formSubmission(
        document,
        list,
        pilotNameInput.value,
        copilotNameInput.value,
        fuelLevelInput.value,
        cargoMassInput.value,
        event.preventDefault()
      );
  
   
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
