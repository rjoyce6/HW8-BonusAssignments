//Create a program that displays information on the planets based on user input.

var planetArray = [
  {
    name: "Mercury",
    fact: "Mercury is named after the roman messenger to the Gods.",
    image: "img/mercury.png"
  },
  {
    name: "Venus",
    fact: "Venus spins in the opposite direction to most planets.",
    image: "img/venus.png"
  },
  {
    name: "Earth",
    fact: "The Earth is the only planet known to harbor life.",
    image: "img/earth.png"
  },
  {
    name: "Mars",
    fact: "Mercury is named after the roman messenger to the Gods",
    image: "img/mars.png"
  },
  {
    name: "Jupiter",
    fact: "Jupiter is large enough for the earth to fit inside 1,000 times.",
    image: "img/jupiter.png"
  },
  {
    name: "Saturn",
    fact: "Saturn has the second largest moon in the solar system, Titan.",
    image: "img/saturn.png"
  },
  {
    name: "Uranus",
    fact: "Uranus is the coldest planet in the solar system.",
    image: "img/uranus.png"
  },
  {
    name: "Neptune",
    fact: "Neptune orbits the sun once every 165 years.",
    image: "img/mercury.png"
  },
  {
    name: "Pluto",
    fact: "It not a planet; it is a dwarf planet.",
    image: "img/pluto.png"
  }
];


//call function once the button has been clicked
document.getElementById('clickMe').onclick = function(){ planetInformation()};
document.getElementById('clickMe').onkeypress = function (){ planetInformation ()};


//function to find and display information about the planets
function planetInformation(){
  var userPlanet = document.getElementById('planetName').value.toLowerCase(); //getting value from the input

  for (var i = 0; i < planetArray.length; i++) {
    if(userPlanet === planetArray[i].name.toLowerCase()){
      //adding title, image and text
      document.getElementById('title').innerHTML = planetArray[i].name;
      document.getElementById('planetImg').src = planetArray[i].image;
      document.getElementById('info').innerHTML = planetArray[i].fact;



      //add background
      document.getElementById('planetInfo').style.background = "rgba(64,151,185,0.2)";

      // If match found, clear warning message
      document.getElementById('wrongName').textContent = "";

      // stop function if found a match
      return

    }

    // If no matches are found, return this message
    document.getElementById('wrongName').textContent = "Not one of the planets. Please try again!"
    //
    // If no matches are found, clear the content, images & background
    document.getElementById('title').innerHTML = "";
    document.getElementById('info').innerHTML = "";
    document.getElementById('planetImg').src = "";



    // document.getElementById('planetImg').src = "";
    document.getElementById('planetInfo').style.background = "transparent";
  }

}



/*
//Creation
 var div = document.createElement('div');
//Addition
  document.body.appendChild(div);
//Style manipulation
  Positioning div.style.left = '32px'; div.style.top = '-16px';
  Classes div.className = 'ui-modal';
//Modification
  ID div.id = 'test';
  contents (using HTML) div.innerHTML = '<span class="msg">Hello world.</span>';
//  contents (using text) div.textContent = 'Hello world.';
Removal
  div.parentNode.removeChild(div);
//Accessing
  by ID div = document.getElementById('test');
  by tags array = document.getElementsByTagName('div');
  by class array = document.getElementsByClassName('ui-modal');
  by CSS selector (single) div = document.querySelector('div #test .ui-modal');
  by CSS selector (multi) array = document.querySelectorAll('div');
//Relations (text nodes included)
  children node = div.childNodes[i];
  sibling node = div.nextSibling;
//Relations (HTML elements only)
  children element = div.children[i];
  sibling element = div.nextElementSibling;

  // or newImg.src(planetArray[i].image);
  // newImg.setAttribute('src', planetArray[i].image);

*/
