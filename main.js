
    // script.js
const celciusField = document.querySelector("#celcius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");


// loading rest
window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});



if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelcius();

//   loading feature
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelcius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelcius = (inputValue - 32) * (5 / 9);
      celciusField.innerHTML = `${FahrenheitToCelcius.toFixed(3)} &deg;c`;
    } 
    
    else if (tempType.value === "kelvin") {
      const KelvinToCelcius = inputValue - 273.15;
      celciusField.innerHTML = `${KelvinToCelcius.toFixed(3)} &deg;c`;
    }
  }, 1200)
}




