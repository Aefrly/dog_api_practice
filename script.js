console.log("script.js loaded");

let data = fetch('https://dogapi.dog/api/facts');
console.log(data);

//Sending API requests using async/await
/*async function getDogFact() {
  const response = await fetch("https://dogapi.dog/api/facts");
  const data = await response.json();
  const fact = data.facts[0];
  
  // Update the DOM with the dog fact
  const output = document.getElementById("dog-fact-output"); 
  output.textContent = fact;
}

const button = document.getElementById('fetch-dog-btn');
button.addEventListener('click', function() {
    getDogFact();
});*/

//Sending API requests using .then()
function getDogFact() {
  fetch("https://dogapi.dog/api/facts")
    .then(response => response.json())  // Covert the response
    .then(data => { 
      // Update the DOM with the dog fact
      const fact = data.facts[0]; 
      const output = document.getElementById("fact-output"); 
      output.textContent = fact; 
    }) 
    .catch(error => { 
      // Message to print if there was an error
      console.error("Error fetching dog fact:", error); 
    });
}

// Same button code as async/await 
const button = document.getElementById("fetch-dog-btn"); 

button.addEventListener("click", function () { 
  getDogFact(); 
});