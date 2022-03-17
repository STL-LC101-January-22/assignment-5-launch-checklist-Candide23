/// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  let missionTarget = document.getElementById("missionTarget");

  missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                
                `;
   
}

function validateInput(testInput) {
  

    if(testInput ===""){
        return "Empty";
    }
    
    else if (isNaN(testInput)) {
      return "Not a Number";
    } 
    
    
    else  {
      return "Is a Number";
    }

    
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel,event) {

 
  
  let pilotNameInput = document.querySelector("input[name = pilotName]");
  let copilotNameInput = document.querySelector("input[name = copilotName]");
  let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
  let cargoMassInput = document.querySelector("input[name = cargoMass]");

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");


  let readyForLaunnch = true;
if (
  validateInput(pilotNameInput.value) === "Empty" ||
  validateInput(copilotNameInput.value) === "Empty" ||
  validateInput(fuelLevelInput.value) === "Empty" ||
  validateInput(cargoMassInput.value) === "Empty"
) {
 event.preventDefault();
  alert ("Fields are required");
} else if (
  validateInput(pilotNameInput.value) === "Is a Number" ||
  validateInput(copilotNameInput.value) === "Is a Number" ||
  validateInput(fuelLevelInput.value) === "Not a Number" ||
  validateInput(cargoMassInput.value) === "Not a Number"
) {
   event.preventDefault();
  alert ("Make sure to enter valid information for each field");
}
  
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

  if (fuelLevel < 10000) {
       list.style.visibility = "visible";
       fuelStatus.innerHTML = `Fuel level too low for launch`;
       launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        readyForLaunnch = false;
     } else {
       fuelStatus.innerHTML = `Fuel level high enough for launch`;
     }

     if (cargoLevel > 10000) {
       list.style.visibility = "visible";
       cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
       launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        readyForLaunnch = false;
     } else {
       cargoStatus.innerHTML = `Cargo mass low enough for launch`;
     }

     if (readyForLaunnch) {
       launchStatus.innerHTML = "Shuttle is Ready for Launch";
       launchStatus.style.color = "rgb(65, 159, 106)";
     }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json() });

    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random() * planets.length);
   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
