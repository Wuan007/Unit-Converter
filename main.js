// select input field
var input = document.querySelector("#input");

// Catch user input event
input.addEventListener("input", convert);

function convert() {
 
      // Get value of user input 
      var value = input.value;
      var output =document.querySelector("#output");
      if(value !=="") {
            // Show output
            output.style.display = "block";
      } else{
            output.style.display = "none";
      
            //Gram    
            document.querySelector("#gram"). textContent = value * 453.592;
   
            // killogram
            document.querySelector("#kilogram"). textContent = value * 453.592 / 1000;
            
            // Ounce
            document.querySelector("#ounce").textContent = value * 16;
      }
}







// Gram




// check unit type


