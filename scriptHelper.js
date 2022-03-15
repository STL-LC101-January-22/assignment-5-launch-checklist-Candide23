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
    }else if (isNaN(testInput)) {
      return "Not a Number";
    } else  {
      return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  //The pilot and co-pilot names should be strings
  //and the fuel level and cargo mass should be numbers.

  //formSubmission() will take in a document parameter and strings representing the pilot, co-pilot,
  //fuel level, and cargo mass.

  /*let pilotName = document.querySelector("input[name='pilotName']");
  let copilotName = document.querySelector("input[name='copilotName']");
  let fuelLevel = document.querySelector("input[name='fuelLevel']");
  let cargoMass = document.querySelector("input[name='cargoMass']");*/

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  let readyForLaunnch = true;

  //let listItems = document.getElementById("faultyItems");

  /*if the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".*/

  /*if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Make sure to enter valid information for each field!");
  }*/

  /*copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch  `;
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch `;

  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    fuelStatus.innerHTML = "Fuel level too low for launch";
  } else if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    fuelStatus.innerHTML = "Shuttle not ready for launch";
  } else {
    let readyForLaunnch = true;
    launchStatus.style.color = "rgb(65, 159, 106)";
    fuelStatus.innerHTML = "Shuttle is ready for launch";
  }*/

  /*let pilotInput = document.querySelector("input[name='pilotName']");
  let pilot = pilotInput.value
  let copilotInput = document.querySelector("input[name='copilotName']");
  let copilot = copilotInput.value;
  let fuelLevelInput = document.querySelector("input[name='fuelLevel']");
  let fuelLevel = fuelLevelInput.value; 
  let cargoMassInput = document.querySelector("input[name='cargoMass']");
  let cargoMass = cargoMassInput.value*/

  /*if (fuelLevel < 10000 || cargoLevel > 10000) {
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch `;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch  `;
      list.style.visibility = "visible";
     //faultyItems.setAttribute = ("style : visible", "color: red");
    launchStatus.style.color = "rgb(65, 159, 106)";
     fuelStatus.innerHTML = "Fuel level high enough for launch";
     cargoStatus.innerHTML = "Cargo mass too heavy for launch";
     launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    
   } else if (fuelLevel >= 10000 || cargoLevel <= 10000) {
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch `;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch  `;
       list.style.visibility = "visible";
     //faultyItems.setAttribute = ("style : visible", "color: green");
     launchStatus.style.color = "gren";
     fuelStatus.innerHTML = "Fuel level too low for launch";
     cargoStatus.innerHTML = "Cargo mass low enough for launch";
     launchStatus.innerHTML = "Shuttle is Ready for Launch";
   }*/

  /*if(validateInput(pilot)===""||validateInput(copilot)===""||validateInput(fuelLevel)===""|| validateInput(cargoMass)===""){
     window.alert("All fields are required");
  
   } else if (validateInput(pilot)==="number"||validateInput(copilot)==="number" ||validateInput(fuelLevel)!=="number"||validateInput(cargoMass)!=="number" ){
     window.alert("Make sure to enter valid information for each field!");
   }*/

  /*if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not ready for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    readyForLaunnch = false;
  } else if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    readyForLaunnch = false;
  } else {
    readyForLaunnch = true;
    launchStatus.style.color = "rgb(65, 159, 106)";
    fuelStatus.innerHTML = "Shuttle is ready for Launch";
  }*/

  // work but don't give the answer when is not ready
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
